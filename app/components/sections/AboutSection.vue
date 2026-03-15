<template>
  <section id="about" class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-16">
    <div class="max-w-4xl w-full">
      <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
        About Me
      </h2>
      
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <div class="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-neutral-700">
            <img 
              src="/images/pi4.jpg" 
              :alt="personalInfo.fullName" 
              class="w-full h-full object-cover"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            />
            <!-- Fallback if image doesn't load -->
            <div class="hidden w-full h-full bg-neutral-600 flex items-center justify-center">
              <span class="text-4xl text-neutral-400">{{ personalInfo.fullName.charAt(0) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Quick Intro -->
        <div class="flex-1 text-center lg:text-left">
          <h3 class="text-2xl font-semibold text-soft-amber mb-4">{{ personalInfo.fullName }}</h3>
          <p class="text-neutral-300 leading-relaxed text-lg">
            {{ personalInfo.bio }}
          </p>
          
          <!-- Quick Stats -->
          <div class="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-soft-amber"> 1 </div>
              <div class="text-sm text-neutral-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-soft-amber">10+</div>
              <div class="text-sm text-neutral-400">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-soft-amber">5+</div>
              <div class="text-sm text-neutral-400">Technologies</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-soft-amber">100%</div>
              <div class="text-sm text-neutral-400">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAboutData } from '~/composables/useAboutData'

const { personalInfo } = useAboutData()
</script>
