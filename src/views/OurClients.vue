<template>
  <div class="clients-page">
    <section class="hero-section position-relative">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <div class="section-header">
              <h1 class="section-title">Our Trusted Clients</h1>
              <p class="section-description">
                Partnering with industry leaders to deliver excellence in logistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="container my-5">

      <div class="row g-4">
        <div v-for="client in clients" :key="client.id" class="col-md-4 col-lg-3">
          <div class="client-card">
            <div class="logo-wrapper">
              <img :src="client.logo" :alt="client.name + ' logo'" class="client-logo">
            </div>
            <div class="client-info">
              <h3 class="client-name">{{ client.name }}</h3>
              <p class="client-industry">{{ client.industry }}</p>
              <p class="client-description">{{ client.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-section mt-5">
        <div class="text-center mb-5">
          <div class="section-badge">Testimonials</div>
          <h2 class="section-title">What Our <span class="gradient-text">Clients Say</span></h2>
        </div>
        <div class="row">
          <div v-for="testimonial in featuredTestimonials" :key="testimonial.id" class="col-md-6 mb-4">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>{{ testimonial.content }}</p>
                <div class="testimonial-author">
                  <strong>{{ testimonial.author }}</strong>
                  <span>{{ testimonial.position }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OurClients',
  data() {
    return {
      clients: [
        {
          id: 1,
          name: 'DACHSER INDIA PVT LTD',
          logo: '/client-logos/dachser.png',
          industry: 'Logistics & Supply Chain',
          description: 'Global logistics provider with comprehensive transport and warehousing solutions.'
        },
        {
          id: 2,
          name: 'WILO MATHER AND PLATT PUMPS PVT LTD',
          logo: '/client-logos/wilo.jfif',
          industry: 'Manufacturing',
          description: 'Leading manufacturer of pumps and pump systems for various industries.'
        },
        {
          id: 3,
          name: 'A-HARTRODT INDIA PVT LTD',
          logo: '/client-logos/hartrodt.png',
          industry: 'Logistics Services',
          description: 'International freight forwarding and logistics solutions provider.'
        },
        {
          id: 4,
          name: 'PHOENIX GLOBALTRANS SOLUTIONS PVT LTD',
          logo: '/client-logos/phoenix.jfif',
          industry: 'Transportation',
          description: 'Innovative transportation and logistics solutions across India.'
        },
        {
          id: 5,
          name: 'ROHLIG INDIA PVT LTD',
          logo: '/client-logos/rohlig.png',
          industry: 'Logistics & Freight',
          description: 'International logistics company specializing in freight forwarding.'
        },
        {
          id: 6,
          name: 'KEEPSARA INTERNATIONAL PVT LTD',
          logo: '/client-logos/global.jfif',  // Using a generic logo as placeholder
          industry: 'International Trade',
          description: 'International trade and logistics solutions provider.'
        },
        {
          id: 7,
          name: 'SUDU LOGISTICS PVT LTD',
          logo: '/client-logos/sudu.png',
          industry: 'Logistics',
          description: 'Comprehensive logistics and supply chain solutions.'
        },
        {
          id: 8,
          name: 'GLOBAL LOGISTICS PVT LTD',
          logo: '/client-logos/global.jfif',
          industry: 'Logistics',
          description: 'End-to-end logistics and transportation services.'
        },
        {
          id: 9,
          name: 'BROWN BULL LOGISTICS PVT LTD',
          logo: '/client-logos/brownbull.png',
          industry: 'Logistics',
          description: 'Specialized logistics and transportation solutions provider.'
        },
        {
          id: 10,
          name: 'CONTINENTAL CARRIERS PVT LTD',
          logo: '/client-logos/global.jfif',  // Using a generic logo as placeholder
          industry: 'Transportation',
          description: 'Pan-India transportation and logistics services.'
        },
        {
          id: 11,
          name: 'JAYASHREE POLYMERS PVT LTD',
          logo: '/client-logos/global.jfif',  // Using a generic logo as placeholder
          industry: 'Manufacturing',
          description: 'Leading manufacturer of polymer products and solutions.'
        },
        {
          id: 12,
          name: 'JYTE LOGISTICS PVT LTD',
          logo: '/client-logos/jyte.jpeg',
          industry: 'Logistics',
          description: 'Innovative logistics and supply chain management solutions.'
        },
        {
          id: 13,
          name: 'JET SPEED INDIA PVT LTD',
          logo: '/client-logos/jetspeed.png',
          industry: 'Express Logistics',
          description: 'Fast and reliable express logistics services.'
        },
        {
          id: 14,
          name: 'NAVKAR CLEARING PVT LTD',
          logo: '/client-logos/navkar.png',
          industry: 'Customs Clearing',
          description: 'Specialized in customs clearing and forwarding services.'
        },
        {
          id: 15,
          name: 'NTC LOGISTICS INDIA PVT LTD',
          logo: '/client-logos/ntc.png',
          industry: 'Logistics',
          description: 'Comprehensive logistics and supply chain solutions provider.'
        }
      ],
      featuredTestimonials: [
        {
          id: 1,
          content: "Malaxmi Roadways has consistently delivered exceptional logistics services. Their reliability and efficiency have been crucial to our supply chain success.",
          author: "John Smith",
          position: "Supply Chain Director, TechCorp Industries"
        },
        {
          id: 2,
          content: "We have been working with Malaxmi Roadways for over 5 years, and their service quality has been outstanding. They are more than a service provider; they are a trusted partner.",
          author: "Sarah Johnson",
          position: "Operations Manager, Fresh Foods Inc."
        }
      ]
    }
  }
})
</script>

<style scoped>
.clients-page {
  background: linear-gradient(135deg, #f6f8fe 0%, #ffffff 100%);
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(to right, #007bff, #28a745);
  position: relative;
  overflow: hidden;
  padding: 7rem 0 5rem;
  color: white;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  opacity: 0.1;
  z-index: 1;
}

.section-header {
  position: relative;
  z-index: 2;
}

.section-badge {
  display: inline-block;
  padding: 0.625rem 1.25rem;
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(40, 167, 69, 0.2);
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.section-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-title-container {
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98));
  padding: 2rem 3rem;
  border-radius: 24px;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 20px 40px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.hero-title-container:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 8px 12px rgba(0, 0, 0, 0.15),
    0 30px 60px rgba(0, 0, 0, 0.1);
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(56, 189, 248, 0.1);
  color: #0284c7;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.title-main {
  display: block;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.gradient-text {
  background-image: linear-gradient(135deg, #007bff, #28a745);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.client-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  border: 1px solid rgba(0, 123, 255, 0.08);
  backdrop-filter: blur(10px);
}

.client-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 123, 255, 0.15);
}

.logo-wrapper {
  padding: 2.5rem;
  background: linear-gradient(135deg, #ffffff, #f8fafc);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  border-bottom: 1px solid rgba(0, 123, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
}

.logo-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.02) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.client-card:hover .logo-wrapper::before {
  opacity: 1;
}

.client-card:hover .logo-wrapper {
  background: linear-gradient(135deg, #f8fafc, #ffffff);
}

.client-logo {
  width: 140px;
  height: 100px;
  object-fit: contain;
  transition: all 0.3s ease;
  filter: brightness(1.02) contrast(1.05);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.client-card:hover .client-logo {
  transform: scale(1.02);
  filter: brightness(1.05) contrast(1.1);
}

.client-info {
  padding: 2rem;
  background: white;
}

.client-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #152238;
}

.client-industry {
  color: #28a745;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.client-description {
  font-size: 0.9375rem;
  color: #6c757d;
  margin-bottom: 0;
  line-height: 1.6;
}

.testimonial-section {
  padding-top: 5rem;
}

.testimonial-section .section-title {
  color: #343a40;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.testimonial-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 3rem;
  height: 100%;
  border: 1px solid rgba(0, 123, 255, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, #007bff, #28a745);
  opacity: 0.7;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 123, 255, 0.15);
}

.testimonial-content {
  position: relative;
  padding-top: 3rem;
  padding-left: 1rem;
}

.testimonial-content::before {
  content: '"';
  position: absolute;
  top: -1rem;
  left: -0.5rem;
  font-size: 6rem;
  font-family: Georgia, serif;
  background: linear-gradient(135deg, #007bff, #28a745);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.2;
  line-height: 1;
}

.testimonial-content p {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial-author strong {
  color: #152238;
  font-size: 1.125rem;
  font-weight: 700;
}

.testimonial-author span {
  color: #fda638;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .client-card {
    margin-bottom: 1rem;
  }
}
</style>