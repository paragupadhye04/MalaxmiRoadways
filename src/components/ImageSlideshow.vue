<!-- Image Slideshow Component -->
<template>
  <div class="slideshow-container">
    <transition-group name="fade">
      <div v-for="(image, index) in images" 
           :key="index" 
           v-show="currentIndex === index" 
           class="slide">
        <img :src="image.src" :alt="image.alt" class="slide-image">
      </div>
    </transition-group>
    
    <!-- Navigation Dots -->
    <div class="slideshow-dots">
      <button v-for="(image, index) in images" 
              :key="index"
              :class="['dot', { active: currentIndex === index }]"
              @click="setSlide(index)"
              :aria-label="'View slide ' + (index + 1)">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ImageSlideshow',
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: new URL('../assets/images/logistics1.jpg', import.meta.url).href, alt: 'Logistics Service 1' },
        { src: new URL('../assets/images/logistics2.jpg', import.meta.url).href, alt: 'Logistics Service 2' },
        { src: new URL('../assets/images/services-bg.jpg', import.meta.url).href, alt: 'Logistics Service 3' },
      ],
      timer: null as number | null,
    }
  },
  mounted() {
    this.startSlideshow()
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    startSlideshow() {
      this.timer = window.setInterval(() => {
        this.nextSlide()
      }, 5000) // Change slide every 5 seconds
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    setSlide(index: number) {
      this.currentIndex = index
      // Reset timer when manually changing slides
      if (this.timer) {
        clearInterval(this.timer)
        this.startSlideshow()
      }
    }
  }
})
</script>

<style scoped>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  filter: brightness(0.9) contrast(1.1);
  transition: transform 0.3s ease;
}

.slide:hover .slide-image {
  transform: scale(1.02);
}

.slideshow-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

/* Transition Effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>