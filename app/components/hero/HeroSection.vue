<template>
  <section
    ref="hero"
    class="relative min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 overflow-hidden bg-neutral-900"
    @mousemove="spawnRipple"
  >
    <!-- SVG Mask Layer -->
    <svg class="absolute inset-0 w-full h-full">
      <defs>
        <mask id="text-mask">
          <rect width="100%" height="100%" fill="black" />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="8vw"
            font-weight="bold"
            fill="white"
          >
            Theo Pacs
          </text>
        </mask>
      </defs>

      <!-- Ripples clipped by the text mask -->
      <g mask="url(#text-mask)">
        <circle
          v-for="r in ripples"
          :key="r.id"
          :cx="r.x"
          :cy="r.y"
          :r="r.radius"
          :style="{ opacity: r.opacity }"
          class="ripple"
        />
      </g>
    </svg>

    <!-- Hero content -->
    <div class="relative z-10 text-center text-neutral-100">
      <p class="text-lg md:text-xl opacity-90 animate-fadeIn delay-200">
        something something dawgs
      </p>
      <div class="mt-48 animate-fadeIn delay-400">
        <button class="bg-soft-amber text-neutral-900 px-6 py-3 rounded-lg hover:bg-warm-terra transition">
          Explore Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"

const hero = ref(null)
const ripples = ref([])
let idCounter = 0

function spawnRipple(e) {
  // get SVG coordinates relative to hero
  const rect = hero.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  // create ripple object
  const ripple = {
    id: idCounter++,
    x,
    y,
    radius: 0,
    opacity: 0.4
  }

  ripples.value.push(ripple)

  // animate ripple growth
  const duration = 2000 // 2s
  const maxRadius = 100 + Math.random() * 50 // randomize size a bit
  const start = performance.now()

  function animate(time) {
    const elapsed = time - start
    const progress = Math.min(elapsed / duration, 1)

    ripple.radius = maxRadius * progress
    ripple.opacity = 0.4 * (1 - progress)

    // Ensure radius never goes negative
    if (ripple.radius < 0) ripple.radius = 0

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      // remove finished ripple
      const index = ripples.value.findIndex((r) => r.id === ripple.id)
      if (index > -1) ripples.value.splice(index, 1)
    }
  }

  requestAnimationFrame(animate)
}

// clear ripples when hero scrolls out of view
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) ripples.value = []
    },
    { threshold: 0 }
  )
  if (hero.value) observer.observe(hero.value)
})
</script>

<style scoped>
.ripple {
  fill: #fcd34d; /* soft amber */
}
</style>