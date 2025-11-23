<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="row align-items-center min-vh-50">
          <div class="col-lg-8 mx-auto text-center">
            <span class="hero-tag">Contact Us</span>
            <h1 class="hero-title">
              Get In <span class="text-accent">Touch</span>
            </h1>
            <p class="hero-text">
              We're here to help with your logistics needs. Reach out to us for any inquiries or support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Information Cards -->
    <section class="contact-info py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Get in Touch</span>
          <h2 class="section-title">How to Reach Us</h2>
        </div>
        <div class="row g-4">
          <!-- Office Location -->
          <div class="col-md-4">
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="info-content">
                <h3>Our Office</h3>
                <p class="info-text">
                  SHOP NO 25, SHUBHARAMBH PLAZA,<br>
                  NEAR RAILWAY STATION,<br>
                  TALEGAON DABHADE, TAL- MAVAL,<br>
                  DIST – PUNE-410507
                </p>
              </div>
              <div class="info-footer">
                <a href="https://goo.gl/maps" target="_blank" class="info-link">
                  <i class="bi bi-map"></i> View on Map
                </a>
              </div>
            </div>
          </div>
          <!-- Contact Details -->
          <div class="col-md-4">
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-telephone-fill"></i>
              </div>
              <div class="info-content">
                <h3>Contact Info</h3>
                <p class="info-text">
                  Phone: +(91) 90114 38899<br>
                  Phone: +(91) 98235 37557<br>
                  Email: vijayendra@mahalaxmitrans-log.com<br>
                  Email: mahesh@mahalaxmitrans-log.com
                </p>
              </div>
              <div class="info-footer">
                <a href="tel:+919011438899" class="info-link">
                  <i class="bi bi-telephone"></i> Call Now
                </a>
              </div>
            </div>
          </div>
          <!-- Business Hours -->
          <div class="col-md-4">
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-clock-fill"></i>
              </div>
              <div class="info-content">
                <h3>Business Hours</h3>
                <p class="info-text">
                  Monday - Saturday<br>
                  9:00 AM - 6:00 PM<br>
                  <span class="highlight">24/7 Support Available</span>
                </p>
              </div>
              <div class="info-footer">
                <span class="support-badge">
                  <i class="bi bi-headset"></i> Always Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="form-section py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <span class="section-tag">Contact Form</span>
          <h2 class="section-title">Send Us a Message</h2>
          <p class="section-description">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-form-card">
              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row g-4">
                  <!-- Name Field -->
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        v-model="form.name" 
                        placeholder="Your Name"
                        required
                      >
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <!-- Email Field -->
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        v-model="form.email" 
                        placeholder="Your Email"
                        required
                      >
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <!-- Phone Field -->
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input 
                        type="tel" 
                        class="form-control" 
                        id="phone" 
                        v-model="form.phone" 
                        placeholder="Your Phone"
                        required
                      >
                      <label for="phone">Your Phone</label>
                    </div>
                  </div>
                  <!-- Subject Field -->
                  <div class="col-md-6">
                    <div class="form-floating">
                      <select class="form-select" id="subject" v-model="form.subject" required>
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request Quote</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <!-- Message Field -->
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea 
                        class="form-control" 
                        id="message" 
                        v-model="form.message" 
                        placeholder="Your Message"
                        style="height: 150px"
                        required
                      ></textarea>
                      <label for="message">Your Message</label>
                    </div>
                  </div>
                  <!-- Submit Button -->
                  <div class="col-12 text-center">
                    <button 
                      type="submit" 
                      class="btn btn-primary btn-lg submit-btn"
                      :disabled="isSubmitting"
                    >
                      <span v-if="!isSubmitting">Send Message</span>
                      <span v-else>
                        <i class="bi bi-arrow-repeat spinning"></i> Sending...
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="ratio ratio-21x9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen="true" 
          loading="lazy"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

async function submitForm() {
  try {
    isSubmitting.value = true
    // Replace with your Google Form action URL (e.g., from Google Forms embed code)
    const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse'
    const formData = new FormData()
    formData.append('entry.123456789', form.name) // Replace with actual entry IDs from Google Form
    formData.append('entry.987654321', form.email)
    formData.append('entry.112233445', form.phone)
    formData.append('entry.556677889', form.subject)
    formData.append('entry.998877665', form.message)

    await fetch(googleFormUrl, {
      method: 'POST',
      body: formData,
      mode: 'no-cors', // Required for Google Forms
    })

    // Reset form after successful submission
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    
    alert('Message sent successfully!')
  } catch (error) {
    alert('Failed to send message. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
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
  margin-bottom: 1rem;
}

.section-description {
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
}

.info-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.info-icon {
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 167, 69, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
}

.info-icon i {
  font-size: 2rem;
  color: #28a745;
}

.info-content {
  flex: 1;
  text-align: left;
}

.info-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 1rem;
}

.info-text {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
}

.info-link {
  color: #28a745;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.info-link:hover {
  color: #218838;
}

.highlight {
  color: #28a745;
  font-weight: 600;
}

.support-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border-radius: 2rem;
  font-weight: 600;
}

.contact-form-card {
  background: #ffffff;
  border-radius: 1rem;
  padding: 2.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.form-floating > label {
  font-size: 0.875rem;
  color: #6c757d;
  padding: 1rem 0.75rem;
  height: auto;
  transform-origin: 0 0;
  transition: opacity .1s ease-in-out,transform .1s ease-in-out;
}

.form-floating > .form-select + label {
  opacity: 0.65;
  transform: scale(.85) translateY(-0.5rem) translateX(0.15rem);
}

.form-floating > .form-control,
.form-floating > .form-select {
  height: 3.5rem;
  padding: 1rem 0.75rem;
  border-color: #e9ecef;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
}

.form-floating > .form-select {
  padding-top: 1.625rem;
  padding-bottom: 0.625rem;
}

.form-floating > .form-control:focus,
.form-floating > .form-select:focus {
  border-color: #28a745;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}

.form-floating > textarea.form-control {
  height: 150px;
  padding: 1rem 0.75rem;
}

.submit-btn {
  background: linear-gradient(to right, #007bff, #28a745);
  border: none;
  padding: 1rem 3rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.submit-btn:not(:disabled):hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.submit-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.spinning {
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 0.5rem;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.map-section {
  margin-top: 5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-hero {
    padding: 3rem 0;
  }
  
  .info-card {
    margin-bottom: 1.5rem;
    padding: 2rem;
  }
  
  .contact-form-card {
    padding: 1.5rem;
  }
  
  .submit-btn {
    padding: 0.875rem 2.5rem;
  }
}
</style>