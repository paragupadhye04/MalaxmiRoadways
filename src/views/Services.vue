<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8 mx-auto text-center">
            <span class="hero-tag">Comprehensive Solutions</span>
            <h1 class="hero-title">
              Our <span class="text-accent">Services</span>
            </h1>
            <p class="hero-text">
              We are committed to providing safe, reliable, and efficient transportation services. 
              Our comprehensive logistics solutions are designed to meet your unique needs with 
              a focus on quality, timeliness, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid py-5">
      <div class="container">
        <div class="row g-4">
          <!-- Air Transportation -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-airplane"></i>
              </div>
              <div class="service-content">
                <h3>Air Transportation</h3>
                <p>Swift and reliable air freight services for time-sensitive cargo. Global reach with dedicated air freight solutions.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Sea Transportation -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-water"></i>
              </div>
              <div class="service-content">
                <h3>Sea Transportation</h3>
                <p>Cost-effective ocean freight solutions for large shipments. Worldwide maritime logistics network.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- ODC Transportation -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-truck"></i>
              </div>
              <div class="service-content">
                <h3>ODC Transportation</h3>
                <p>Specialized transportation for Over Dimensional Cargo. Expert handling of large and complex shipments.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Warehousing -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-building"></i>
              </div>
              <div class="service-content">
                <h3>Warehousing</h3>
                <p>State-of-the-art warehousing facilities. Secure storage with inventory management systems.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Safe Transit -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <div class="service-content">
                <h3>Safe Transit</h3>
                <p>Maximum security and safety measures for your cargo. Fully insured transportation services.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Express Delivery -->
          <div class="col-md-6 col-lg-4">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-lightning"></i>
              </div>
              <div class="service-content">
                <h3>Express Delivery</h3>
                <p>Fast and reliable delivery services for time-sensitive shipments with real-time tracking.</p>
              </div>
              <div class="service-footer">
                <router-link to="/contact-us" class="service-link">
                  Learn More <i class="bi bi-arrow-right"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Features -->
    <section class="features-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Why Choose Us</span>
          <h2 class="section-title">Our Strengths</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-clock-history"></i>
              </div>
              <div class="feature-content">
                <h4>Quick Service</h4>
                <p>Fast and efficient logistics solutions with dedicated support</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-calendar-check"></i>
              </div>
              <div class="feature-content">
                <h4>Timely Delivery</h4>
                <p>Guaranteed on-time delivery with real-time tracking</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="bi bi-emoji-smile"></i>
              </div>
              <div class="feature-content">
                <h4>Happy Customers</h4>
                <p>Customer satisfaction is our top priority</p>
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

export default defineComponent({
  name: 'Services',
})
</script>

<style scoped>
.services-page {
  background-color: #f8f9fa;
}

.hero-section {
  background: linear-gradient(to right, #007bff, #28a745);
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  color: white;
}

.mission-statement {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.service-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.service-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.service-link:hover {
  color: var(--accent-dark);
}

.features-section {
  background: #f8f9fa;
  padding: 4rem 0;
}

.section-header {
  margin-bottom: 3rem;
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
  margin-bottom: 1rem;
}

.feature-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.02), rgba(40, 167, 69, 0.02));
}

.feature-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(40, 167, 69, 0.1));
  border-radius: 1rem;
}

.feature-icon i {
  font-size: 1.5rem;
  background: linear-gradient(to right, #007bff, #28a745);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.feature-content h4 {
  color: #343a40;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
}

.feature-content p {
  color: #6c757d;
  margin-bottom: 0;
  line-height: 1.6;
}

@media (max-width: 991.98px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-text {
    font-size: 1rem;
  }
  
  .service-card {
    margin-bottom: 1rem;
  }
  
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>