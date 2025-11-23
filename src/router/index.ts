import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import OurVehicles from '../views/OurVehicles.vue'
import OurClients from '../views/OurClients.vue'
import ContactUs from '../views/ContactUs.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  { 
    path: '/', 
    name: 'home', 
    component: Home,
    meta: { title: 'Home' }
  },
  { 
    path: '/about', 
    name: 'about', 
    component: AboutUs,
    meta: { title: 'About Us' }
  },
  { 
    path: '/services', 
    name: 'services', 
    component: Services,
    meta: { title: 'Our Services' }
  },
  { 
    path: '/fleet', 
    name: 'fleet', 
    component: OurVehicles,
    meta: { title: 'Our Fleet' }
  },
  { 
    path: '/clients', 
    name: 'clients', 
    component: OurClients,
    meta: { title: 'Our Clients' }
  },
  { 
    path: '/contact', 
    name: 'contact', 
    component: ContactUs,
    meta: { title: 'Contact Us' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Mahalaxmi Transport & Logistics` || 'Mahalaxmi Transport & Logistics'
  next()
})

export default router