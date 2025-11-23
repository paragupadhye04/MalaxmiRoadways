<template>
  <div class="vehicles-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8 mx-auto text-center">
            <span class="hero-tag">Our Fleet</span>
            <h1 class="hero-title">
              Versatile and <span class="text-accent">Reliable</span> Logistics Solutions
            </h1>
            <p class="hero-text">
              We understand that every shipment is unique. Our diverse and specialized fleet of trucks 
              is designed to handle a wide array of cargo types efficiently and securely across India.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fleet Overview Section -->
    <section class="fleet-overview py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="overview-content">
              <p class="lead mb-4">
                Our extensive range of vehicles, from nimble urban delivery vans to robust long-haul trailers, 
                ensures that we have the right equipment for your specific logistics needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vehicle Types Section -->
    <section class="vehicle-types py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Our Fleet</span>
          <h2 class="section-title">Vehicle Types & Applications</h2>
        </div>

        <div class="row g-4">
          <!-- Mini/Box Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-truck"></i>
              </div>
              <h3>Mini/Box Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Last-mile urban delivery, parcels, small cargo.</p>
                <h4>Key Features:</h4>
                <p>Agile and compact, perfect for navigating congested city streets. Efficient door-to-door deliveries of e-commerce goods, furniture, and smaller consignments.</p>
              </div>
            </div>
          </div>

          <!-- Flatbed Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-truck-flatbed"></i>
              </div>
              <h3>Flatbed Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Oversized, heavy, or irregularly shaped cargo.</p>
                <h4>Key Features:</h4>
                <p>Open platform with no sides, perfect for transporting industrial machinery, construction materials, and items requiring crane loading.</p>
              </div>
            </div>
          </div>

          <!-- Container Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-box-seam"></i>
              </div>
              <h3>Container Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Secure, long-distance, general cargo.</p>
                <h4>Key Features:</h4>
                <p>Standardized, weatherproof containers (20ft, 32ft) offering maximum security for high-value goods across different transport modes.</p>
              </div>
            </div>
          </div>

          <!-- Refrigerated Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-thermometer-snow"></i>
              </div>
              <h3>Refrigerated Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Perishables, pharmaceuticals, temperature-sensitive goods.</p>
                <h4>Key Features:</h4>
                <p>Advanced temperature control systems maintaining consistent environment for preserving food items and medicines.</p>
              </div>
            </div>
          </div>

          <!-- Tanker Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-fuel-pump"></i>
              </div>
              <h3>Tanker Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Liquids, gases, chemicals, fuel.</p>
                <h4>Key Features:</h4>
                <p>Sealed, secure cylindrical tanks for safe and compliant transport of bulk liquids, petroleum products, and chemicals.</p>
              </div>
            </div>
          </div>

          <!-- Trailer Trucks -->
          <div class="col-md-6 col-lg-4">
            <div class="vehicle-card">
              <div class="vehicle-icon">
                <i class="bi bi-truck-front"></i>
              </div>
              <h3>Trailer Trucks</h3>
              <div class="vehicle-details">
                <h4>Ideal For:</h4>
                <p>Maximum payload, long-haul interstate logistics.</p>
                <h4>Key Features:</h4>
                <p>Powerful tractor units with attached trailers engineered for maximum capacity and interstate cargo movement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-5">
      <div class="container">
        <div class="cta-card text-center">
          <h2>Choose the Right Vehicle for Your Needs</h2>
          <p class="lead mb-4">
            We are committed to providing reliable transport solutions tailored to your cargo requirements. 
            Whether you need a small van for a quick local delivery or a heavy-duty trailer for a major 
            industrial shipment, our fleet is ready to roll.
          </p>
          <router-link to="/contact-us" class="btn btn-primary btn-lg">
            Get a Quote
            <i class="bi bi-arrow-right ms-2"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OurVehicles',
})
</script>

<style scoped>
.vehicles-page {
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

.fleet-overview {
  background: #ffffff;
}

.overview-content {
  color: #6c757d;
  font-size: 1.2rem;
  line-height: 1.8;
}

.vehicle-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.vehicle-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.vehicle-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.vehicle-icon i {
  font-size: 2rem;
  color: #28a745;
}

.vehicle-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1.5rem;
}

.vehicle-details h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #28a745;
  margin-bottom: 0.5rem;
}

.vehicle-details p {
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.cta-section {
  background: #ffffff;
}

.cta-card {
  background: linear-gradient(to right, #007bff, #28a745);
  border-radius: 1rem;
  padding: 3rem 2rem;
  color: white;
}

.cta-card h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-card p {
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
}

.btn-primary {
  background-color: white;
  color: #28a745;
  border: none;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

@media (max-width: 991.98px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-text {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .cta-card h2 {
    font-size: 2rem;
  }
}
</style>