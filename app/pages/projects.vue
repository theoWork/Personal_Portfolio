<template>
  <div>
    <HeroSection />
    
    <!-- Projects Section -->
    <section class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-16">
      <div class="max-w-7xl w-full">
        <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
          Projects
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project1.jpg" 
                alt="E-Commerce Platform" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">E-Commerce Platform</h3>
                <p class="text-neutral-300 text-sm">Full-stack e-commerce solution with modern UI/UX</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Vue.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Node.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">MongoDB</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Stripe</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project2.jpg" 
                alt="Task Management App" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">Task Management App</h3>
                <p class="text-neutral-300 text-sm">Collaborative task management with real-time updates</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">React</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">TypeScript</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Firebase</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project3.jpg" 
                alt="Weather Dashboard" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">Weather Dashboard</h3>
                <p class="text-neutral-300 text-sm">Real-time weather data visualization with interactive charts</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Vue.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Chart.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">API Integration</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">D3.js</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project4.jpg" 
                alt="Social Media Analytics" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">Social Media Analytics</h3>
                <p class="text-neutral-300 text-sm">Data analytics dashboard for social media metrics</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">React</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Python</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">PostgreSQL</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">D3.js</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 5 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project5.jpg" 
                alt="Portfolio Website" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">Portfolio Website</h3>
                <p class="text-neutral-300 text-sm">Personal portfolio with modern design and animations</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Nuxt.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Tailwind CSS</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Framer Motion</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">GSAP</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 6 -->
          <div class="bg-neutral-700 rounded-lg overflow-hidden hover:bg-neutral-600 transition-all duration-300 transform hover:scale-105">
            <div class="relative h-64">
              <img 
                src="/images/project6.jpg" 
                alt="Mobile Banking App" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent flex items-end p-6">
                <h3 class="text-xl font-semibold text-soft-amber mb-2">Mobile Banking App</h3>
                <p class="text-neutral-300 text-sm">Secure mobile banking application with biometric auth</p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">React Native</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">TypeScript</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">Node.js</span>
                  <span class="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-200">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '~/components/hero/HeroSection.vue'
</script>