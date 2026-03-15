<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm transition-all duration-300"
       :class="{ 'bg-neutral-900/95 shadow-lg': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-8 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Desktop Navigation -->
        <div class="hidden md:block flex-1">
          <div class="flex items-baseline justify-center space-x-8">
            <a
              v-for="item in navigationItems"
              :key="item.name"
              :href="item.href"
              @click="handleMobileNavClick(item.href)"
              class="block px-4 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              :class="{ 'bg-neutral-700 text-white': isActive(item.href) }"
            >
              {{ item.name }}
            </a>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-soft-amber"
          >
            <svg class="h-6 w-6" :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <div class="px-4 pt-2 pb-4 space-y-2 bg-neutral-900/95 backdrop-blur-sm shadow-lg">
        <a 
          v-for="item in navigationItems" 
          :key="item.name"
          :href="item.href"
          @click="handleMobileNavClick(item, $event)"
          class="block px-4 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
          :class="{ 'bg-neutral-700 text-white': isActive(item.href) }"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

const scrollToSection = (elementId) => {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleNavClick = (item, event) => {
  if (item && item.href && item.href.startsWith('#')) {
    event.preventDefault()
    scrollToSection(item.href)
  } else if (item && item.href) {
    router.push(item.href)
  }
}

const handleMobileNavClick = (item, event) => {
  closeMobileMenu()
  if (item && item.href && item.href.startsWith('#')) {
    event.preventDefault()
    scrollToSection(item.href)
  } else if (item && item.href) {
    router.push(item.href)
  }
}

const isActive = (item) => {
  if (item && item.href && item.href.startsWith('#')) {
    const element = document.querySelector(item.href)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    }
  }
  return false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
