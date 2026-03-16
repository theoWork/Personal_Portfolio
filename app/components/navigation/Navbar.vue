<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm transition-all duration-300"
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
              @click="handleNavClick(item, $event)"
              class="relative px-4 py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {{ item.name }}

              <!-- Underline -->
              <div
                class="absolute bottom-0 left-0 w-full h-[2px] bg-soft-amber transition-all duration-300"
                :class="activeSection === item.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
                style="transform-origin:left"
              ></div>
            </a>

          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-700 focus:outline-none"
          >
            <svg class="h-6 w-6" v-if="!mobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg class="h-6 w-6" v-if="mobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden transition-all duration-300 ease-in-out"
      :class="mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'"
    >
      <div class="px-4 pt-2 pb-4 space-y-2 bg-neutral-900/95 backdrop-blur-sm shadow-lg">

        <a
          v-for="item in navigationItems"
          :key="item.name"
          :href="item.href"
          @click="handleMobileNavClick(item, $event)"
          class="block px-4 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors relative"
        >
          {{ item.name }}

          <div
            class="absolute bottom-0 left-0 w-full h-[2px] bg-soft-amber transition-all duration-300"
            :class="activeSection === item.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
            style="transform-origin:left"
          ></div>

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
const activeSection = ref('#hero')

const navigationItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' }, 
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20

  const scrollPosition = window.scrollY + 150

  for (const item of navigationItems) {
    const section = document.querySelector(item.href)

    if (!section) continue

    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      activeSection.value = item.href
      break
    }
  }
}

const scrollToSection = (id) => {
  const element = document.querySelector(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

const handleNavClick = (item, event) => {
  if (item.href.startsWith('#')) {
    event.preventDefault()
    scrollToSection(item.href)
  } else {
    router.push(item.href)
  }
}

const handleMobileNavClick = (item, event) => {
  closeMobileMenu()

  if (item.href.startsWith('#')) {
    event.preventDefault()
    scrollToSection(item.href)
  } else {
    router.push(item.href)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>