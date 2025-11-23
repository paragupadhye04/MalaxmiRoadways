<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero position-relative">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="row min-vh-80 align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <span class="hero-tag">Professional Logistics Services</span>
              <h1 class="hero-title">
                Trusted Transport & 
                <span class="text-accent">Logistics</span> Partner
              </h1>
              <p class="hero-text">
                Specialized in providing comprehensive logistics solutions with a focus on reliability, 
                efficiency, and customer satisfaction across India.
              </p>
              <div class="hero-cta">
                <router-link to="/contact" class="btn btn-primary me-3">
                  Get Quote Now
                  <i class="bi bi-arrow-right ms-2"></i>
                </router-link>
                <router-link to="/services" class="btn btn-outline-primary">
                  Our Services
                  <i class="bi bi-box-arrow-up-right ms-2"></i>
                </router-link>
              </div>
              <div class="hero-stats mt-5">
                <div class="stat-item">
                  <span class="stat-number">60+</span>
                  <span class="stat-label">Years Legacy</span>
                </div>
                <div class="stat-divider"></div>
                <div class="stat-item">
                  <span class="stat-number">100%</span>
                  <span class="stat-label">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-slideshow-wrapper">
              <ImageSlideshow />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Our Services</span>
          <h2 class="section-title">Transportation Solutions</h2>
          <p class="section-description">
            We provide comprehensive logistics solutions tailored to your needs
          </p>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-truck"></i>
              </div>
              <div class="service-content">
                <h3>Road Transport</h3>
                <p>
                  Reliable and efficient road transportation services across India with nationwide coverage and real-time tracking.
                </p>
              </div>
              <div class="service-footer">
                <router-link to="/services" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-box-seam"></i>
              </div>
              <div class="service-content">
                <h3>Warehousing</h3>
                <p>
                  State-of-the-art storage solutions with modern facility management and inventory tracking.
                </p>
              </div>
              <div class="service-footer">
                <router-link to="/services" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div class="service-content">
                <h3>Express Delivery</h3>
                <p>
                  Fast and reliable delivery services for time-sensitive cargo with priority handling.
                </p>
              </div>
              <div class="service-footer">
                <router-link to="/services" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImageSlideshow from '@/components/ImageSlideshow.vue'

export default defineComponent({
  name: 'Home',
  components: {
    ImageSlideshow
  }
})
</script>

<style scoped>
.hero {
  background: linear-gradient(to right, #007bff, #28a745);
  min-height: 80vh;
  overflow: hidden;
  color: white;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 2rem 0;
}

.hero-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #fff;
}

.text-accent {
  color: #28a745;
}

.hero-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
}

.hero-cta .btn-primary {
  background: white;
  color: #28a745;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.hero-cta .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-cta .btn-outline-primary {
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 2rem;
  transition: all 0.3s ease;
  background: transparent;
}

.hero-cta .btn-outline-primary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  color: var(--text-muted);
  font-size: 1rem;
}

.stat-divider {
  width: 2px;
  height: 50px;
  background-color: var(--border-color);
}

.hero-slideshow-wrapper {
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

@media (max-width: 991.98px) {
  .hero-slideshow-wrapper {
    height: 300px;
    margin-top: 2rem;
  }
}

/* Services Section */
.section-header {
  margin-bottom: 4rem;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--accent-light);
  color: var(--accent);
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.section-description {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.service-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.service-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.service-icon i {
  font-size: 2rem;
  color: #28a745;
}

.service-content {
  flex: 1;
  text-align: left;
}

.service-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1rem;
}

.service-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.service-link {
  color: #28a745;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: #218838;
}



@media (max-width: 991.98px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-text {
    font-size: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>