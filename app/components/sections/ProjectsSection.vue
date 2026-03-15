<template>
  <section id="projects" class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-16 relative">
    <!-- WIP Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/WIP.png" 
        alt="Work In Progress - Coming Soon"
        class="w-full h-full object-cover opacity-90"
        onerror="this.style.display='none';"
      />
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-neutral-900/30"></div>
    </div>
    
    <!-- Content on top of background -->
    <div class="max-w-7xl w-full relative z-10">
        <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
          
        </h2>
        
        <!-- Fallback if image doesn't load -->
        <div class="hidden bg-neutral-700/50 p-16 rounded-lg border-2 border-dashed border-neutral-600">
          <div class="text-center">
            <div class="inline-flex items-center space-x-2 mb-6">
              <span class="text-3xl font-bold text-soft-amber">WIP</span>
              <span class="text-neutral-400">|</span>
              <span class="text-xl text-neutral-300">Work In Progress</span>
            </div>
            <p class="text-lg text-neutral-300 mb-8">
              Currently working on exciting new projects! More coming soon...
            </p>
            <div class="flex justify-center space-x-6">
              <div class="px-6 py-3 bg-neutral-600 rounded-lg text-base text-neutral-200">
                <span class="animate-pulse">🚧</span> AI-Powered Tools
              </div>
              <div class="px-6 py-3 bg-neutral-600 rounded-lg text-base text-neutral-200">
                <span class="animate-pulse">🚧</span> Real-time Collaboration
              </div>
              <div class="px-6 py-3 bg-neutral-600 rounded-lg text-base text-neutral-200">
                <span class="animate-pulse">🚧</span> Advanced Analytics
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
// Projects section: static content for now
</script>
