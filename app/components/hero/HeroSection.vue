<template>
  <section
    id="hero"
    ref="hero"
    class="relative min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 overflow-hidden bg-neutral-900"
    @mousemove="spawnRipple"
  >
    <!-- SVG Mask Layer -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <defs>
        <mask id="text-mask">
          <rect width="100%" height="100%" fill="black" />

          <!-- Main Name -->
          <text
            x="50%"
            y="45%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="8vw"
            font-weight="bold"
            fill="white"
          >
            Theo Pacs
          </text>

          <!-- Small "friend name" line -->
          <text
            x="50%"
            y="60%"
            text-anchor="middle"
            dominant-baseline="middle"
           font-size="1.5vw"
            font-weight="medium"
            fill="white"
          >
            or Yong if we're friends
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
      <!-- Intro line -->
      <p class="text-lg md:text-xl opacity-90 animate-fadeIn delay-200">
        They call me …
      </p>

      <!-- Spacing so ripples are centered nicely -->
      <div class="mt-32"></div>

      <!-- CTA Button -->
      <div class="mt-64 animate-fadeIn delay-400">
        <a href="#projects" class="inline-block">
          <button class="bg-soft-amber text-neutral-900 px-8 py-4 rounded-lg hover:bg-warm-terra transition">
            Explore Projects
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import { useRippleEffect } from '~/composables/useRippleEffect'

const hero = ref(null)

// Use composables
const { ripples, spawnRipple } = useRippleEffect(hero)
</script>

<style scoped>
.ripple {
  fill: #fcd34d; /* soft amber */
  vector-effect: non-scaling-stroke; /* ensures crisp circles */
}
</style>