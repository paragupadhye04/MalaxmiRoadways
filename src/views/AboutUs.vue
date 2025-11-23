<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8 mx-auto text-center">
            <span class="hero-tag">Our Legacy</span>
            <h1 class="hero-title">
              About <span class="text-accent">Us</span>
            </h1>
            <p class="hero-text">
              A legacy of excellence in transportation and logistics, serving businesses 
              with reliability and dedication for over six decades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- History Section -->
    <section class="history-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="history-content">
              <span class="section-tag">Our Story</span>
              <h2 class="section-title">A Legacy of Trust</h2>
              <p class="history-text">
                Founded as "R. G. Pardeshi and Sons Transports" by Late Mr. Raghunath Pardeshi over 60 years ago, 
                we have been providing vital transportation links for businesses throughout Maharashtra. The legacy 
                continued with the establishment of Mahalaxmi Transport & Logistics in June 2010.
              </p>
              <p class="history-text">
                We quickly established ourselves as a specialized logistics company, serving diverse industries 
                from automobiles to pharmaceuticals. Our reputation for reliability, professional approach, 
                competitive pricing, and extensive network has made us the preferred choice for transportation 
                between Mumbai & Pune.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="history-image">
              <img src="@/assets/images/truck-icon.svg.avif" alt="Our Legacy" class="img-fluid rounded-lg shadow-lg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Our Values</span>
          <h2 class="section-title">What Drives Us</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="value-card">
              <div class="value-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <div class="value-content">
                <h3>Reliability</h3>
                <p>
                  Consistently delivering on our promises with safe and dependable transportation services.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="value-card">
              <div class="value-icon">
                <i class="bi bi-graph-up"></i>
              </div>
              <div class="value-content">
                <h3>Excellence</h3>
                <p>
                  Striving for continuous improvement in all aspects of our service delivery.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="value-card">
              <div class="value-icon">
                <i class="bi bi-people"></i>
              </div>
              <div class="value-content">
                <h3>Customer Focus</h3>
                <p>
                  Putting our customers first with professional service and competitive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievement Section -->
    <section class="achievements-section py-5">
      <div class="container">
        <div class="achievements-wrapper">
          <div class="achievement-item">
            <div class="achievement-icon">
              <i class="bi bi-clock-history"></i>
            </div>
            <div class="achievement-content">
              <div class="achievement-number">60+</div>
              <div class="achievement-label">Years Legacy</div>
              <div class="achievement-line"></div>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">
              <i class="bi bi-building"></i>
            </div>
            <div class="achievement-content">
              <div class="achievement-number">2</div>
              <div class="achievement-label">Major Hubs</div>
              <div class="achievement-line"></div>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">
              <i class="bi bi-grid-3x3-gap"></i>
            </div>
            <div class="achievement-content">
              <div class="achievement-number">15+</div>
              <div class="achievement-label">Industry Sectors</div>
              <div class="achievement-line"></div>
            </div>
          </div>
          
          <div class="achievement-item">
            <div class="achievement-icon">
              <i class="bi bi-emoji-smile"></i>
            </div>
            <div class="achievement-content">
              <div class="achievement-number">1000+</div>
              <div class="achievement-label">Happy Clients</div>
              <div class="achievement-line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutUs',
})
</script>

<style scoped>
.about-page {
  background-color: #f8f9fa;
}

.hero-section {
  background: linear-gradient(to right, #007bff, #28a745);
  position: relative;
  padding: 6rem 0;
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
  max-width: 800px;
  margin: 0 auto;
}

.section-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 2rem;
}

.history-text {
  color: #6c757d;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.history-image img {
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.value-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.value-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.value-icon i {
  font-size: 2rem;
  color: #28a745;
}

.value-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1rem;
}

.value-content p {
  color: #6c757d;
  margin-bottom: 0;
  line-height: 1.6;
}

.achievements-section {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.achievements-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 123, 255, 0.1);
}

.achievement-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 123, 255, 0.2);
}

.achievement-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(40, 167, 69, 0.1));
  border-radius: 1rem;
  flex-shrink: 0;
}

.achievement-icon i {
  font-size: 1.75rem;
  background: linear-gradient(to right, #007bff, #28a745);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.achievement-content {
  flex: 1;
}

.achievement-number {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #007bff, #28a745);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.achievement-label {
  color: #6c757d;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.achievement-line {
  width: 50px;
  height: 3px;
  background: linear-gradient(to right, #007bff, #28a745);
  margin-top: 1rem;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .achievements-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .achievement-item {
    padding: 1.5rem;
  }

  .achievement-number {
    font-size: 2rem;
  }
}

@media (max-width: 991.98px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-text {
    font-size: 1rem;
  }
  
  .history-image {
    margin-top: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .achievement-number {
    font-size: 2.5rem;
  }
}
</style>