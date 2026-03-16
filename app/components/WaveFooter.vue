<template>
  <footer class="relative overflow">
    <!-- 3 Layer Animated Waves - absolutely positioned to overflow -->
    <div class="absolute inset-x-0 top-0 h-48 -translate-y-24">
      <svg
        class="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <!-- Wave Layer 1 - Back -->
        <path
          d="M0,23 C320,30 420,4 740,23 C1060,30 1140,4 1440,23 L1440,200 L0,200 Z"
          fill="#1f2937"
          class="wave wave1"
          :style="{ animationDelay: '0s' }"
        />
        
        <!-- Wave Layer 2 - Middle -->
        <path
          d="M0,28 C240,21 400,6 640,28 C880,21 1040,6 1280,28 L1440,28 L1440,200 L0,200 Z"
          fill="#374151"
          class="wave wave2"
          :style="{ animationDelay: '2s' }"
        />
        
        <!-- Wave Layer 3 - Front -->
        <path
          d="M0,33 C180,26 360,7 540,33 C720,26 900,7 1080,33 L1440,33 L1440,200 L0,200 Z"
          fill="#4b5563"
          class="wave wave3"
          :style="{ animationDelay: '4s' }"
        />
        
        <!-- Wave Layer 4 - Original Wave 1 measurements -->
        <path
          d="M0,100 C320,130 420,70 740,100 C1060,130 1140,70 1440,100 L1440,200 L0,200 Z"
          fill="#6b7280"
          class="wave wave4"
          :style="{ animationDelay: '1s' }"
        />
        
        <!-- Wave Layer 5 - Original Wave 2 measurements -->
        <path
          d="M0,120 C240,90 400,150 640,120 C880,90 1040,150 1280,120 L1440,120 L1440,200 L0,200 Z"
          fill="#9ca3af"
          class="wave wave5"
          :style="{ animationDelay: '3s' }"
        />
        
        <!-- Wave Layer 6 - Original Wave 3 measurements -->
        <path
          d="M0,140 C180,110 360,170 540,140 C720,110 900,170 1080,140 L1440,140 L1440,200 L0,200 Z"
          fill="#d1d5db"
          class="wave wave6"
          :style="{ animationDelay: '5s' }"
        />
      </svg>
    </div>
  </footer>
</template>

<script setup>
// Just the waves - no extra logic needed
</script>

<style scoped>
.wave {
  animation: wave-animation 8s ease-in-out infinite;
  transform-origin: center;
}

.wave1 {
  animation-duration: 10s;
}

.wave2 {
  animation-duration: 12s;
}

.wave3 {
  animation-duration: 14s;
}

.wave4 {
  animation-duration: 11s;
}

.wave5 {
  animation-duration: 13s;
}

.wave6 {
  animation-duration: 15s;
}

@keyframes wave-animation {
  0%, 100% {
    transform: translateY(0) scaleY(1);
  }
  25% {
    transform: translateY(-10px) scaleY(1.1);
  }
  50% {
    transform: translateY(0) scaleY(0.95);
  }
  75% {
    transform: translateY(-5px) scaleY(1.05);
  }
}
</style>
