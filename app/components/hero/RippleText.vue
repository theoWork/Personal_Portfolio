<template>
  <svg class="absolute inset-0 w-full h-full">
    <defs>
      <mask id="text-mask">
        <rect width="100%" height="100%" fill="black" />
        <text
          x="70%"
          y="50%"
          text-anchor="end"
          dominant-baseline="middle"
          font-size="8vw"
          font-weight="bold"
          fill="white"
        >
          <tspan x="70%" dy="-0.8em">Theo</tspan>
          <tspan x="70%" dy="0.8em">Paculanang</tspan>
        </text>
      </mask>
    </defs>

    <!-- Background for ripples to be visible -->
    <rect width="100%" height="100%" fill="#1f2937" />

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
</template>

<script setup>
const props = defineProps({
  ripples: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.ripple {
  fill: #fcd34d; /* soft amber */
}
</style>
