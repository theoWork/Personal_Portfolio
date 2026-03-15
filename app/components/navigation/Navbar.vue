<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-neutral-900/90 to-transparent backdrop-blur-sm transition-all duration-300"
       :class="{ 'bg-neutral-900/95 shadow-lg': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Desktop Navigation -->
        <div class="hidden md:block flex-1">
          <div class="flex items-baseline justify-center space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-neutral-200 hover:text-soft-amber px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              :class="{ 'text-soft-amber': $route.path === item.href }"
            >
              {{ item.name }}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-soft-amber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="text-neutral-200 hover:text-soft-amber p-2 rounded-md transition-colors duration-200"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg 
              class="h-6 w-6" 
              :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6" 
              :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      class="md:hidden transition-all duration-300 ease-in-out"
      :class="{ 
        'max-h-64 opacity-100': mobileMenuOpen, 
        'max-h-0 opacity-0 overflow-hidden': !mobileMenuOpen 
      }"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-900/95 backdrop-blur-sm">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.href"
          class="text-neutral-200 hover:text-soft-amber block px-3 py-2 text-base font-medium transition-colors duration-200"
          :class="{ 'text-soft-amber bg-neutral-800/50': $route.path === item.href }"
          @click="closeMobileMenu"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
