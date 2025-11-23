<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="navbar-bg"></div>
    <div class="container position-relative">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/images/mtl-logo.png" alt="MAHALAXMI TRANSPORT & LOGISTICS Logo" height="45">
        <span class="brand-text">MAHALAXMI TRANSPORT & LOGISTICS</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/fleet">Our Fleet</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/clients">Clients</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link contact-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
})
</script>

<style scoped>
.navbar {
  position: relative;
  padding: 1rem 0;
  background: transparent;
  overflow: hidden;
}

.navbar-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    #1a1a1a 0%,
    #2d2d2d 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  z-index: 0;
}

.navbar-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, 
      rgba(75, 75, 75, 0.15) 0%,
      rgba(60, 60, 60, 0.15) 25%,
      rgba(45, 45, 45, 0.15) 50%,
      rgba(30, 30, 30, 0.15) 75%,
      rgba(15, 15, 15, 0.15) 100%
    );
  animation: gradientMove 15s ease infinite;
}

.navbar-brand {
  position: relative;
  font-weight: 700;
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-brand img {
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.15), transparent);
  border-radius: 50%;
  padding: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.navbar-brand:hover img {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.brand-text {
  background: linear-gradient(45deg, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: all 0.3s ease;
  z-index: 1;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: white;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.contact-link {
  background: rgba(255, 255, 255, 0.1);
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin-left: 0.5rem;
  backdrop-filter: blur(5px);
}

.contact-link::after {
  display: none;
}

.contact-link:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.nav-link:hover {
  color: white !important;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background: rgba(26, 26, 26, 0.95);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .contact-link {
    margin: 0.5rem 0;
    text-align: center;
  }
}
</style>