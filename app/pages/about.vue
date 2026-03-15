<template>
  <div>
    <HeroSection />
    
    <!-- About Section -->
    <section class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-16">
      <div class="max-w-6xl w-full">
        <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
          About Me
        </h2>
        
        <!-- Personal Introduction -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <!-- Photo and Bio -->
          <div class="space-y-8">
            <div class="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-neutral-700">
              <img 
                src="/images/pi3.jpg" 
                :alt="personalInfo.fullName" 
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div class="w-full h-full flex items-center justify-center text-neutral-400" style="display: none;">
                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-soft-amber mb-4">{{ personalInfo.fullName }}</h3>
              <p class="text-lg text-neutral-300 mb-4">{{ personalInfo.nickname }} (if we're friends)</p>
              <p class="text-neutral-300 leading-relaxed mb-4">
                {{ personalInfo.bio }}
              </p>
              
              <div class="space-y-2">
                <div class="flex items-center space-x-2 text-neutral-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-1.414.586l-4.243-4.242a1 1 0 00-.707.293l-1.414 1.414a1 1 0 00-.293.707L5.586 16.414A1.998 1.998 0 014 14.586l4.242 4.242A1 1 0 006.343 21l4.93 4.93a1 1 0 001.414-1.414l1.414-1.414a1 1 0 00.293-.707l4.242-4.242A1 1 0 0017.657 16.657z"></path>
                  </svg>
                  <span>{{ personalInfo.location }}</span>
                </div>
                <div class="flex items-center space-x-2 text-neutral-300">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>{{ personalInfo.email }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-8">
            <div class="bg-neutral-700 p-8 rounded-lg text-center">
              <div class="text-3xl font-bold text-soft-amber mb-2">3+</div>
              <div class="text-neutral-300">Years Experience</div>
            </div>
            <div class="bg-neutral-700 p-8 rounded-lg text-center">
              <div class="text-3xl font-bold text-soft-amber mb-2">50+</div>
              <div class="text-neutral-300">Projects Completed</div>
            </div>
            <div class="bg-neutral-700 p-8 rounded-lg text-center">
              <div class="text-3xl font-bold text-soft-amber mb-2">10+</div>
              <div class="text-neutral-300">Technologies</div>
            </div>
            <div class="bg-neutral-700 p-8 rounded-lg text-center">
              <div class="text-3xl font-bold text-soft-amber mb-2">100+</div>
              <div class="text-neutral-300">GitHub Commits</div>
            </div>
          </div>
        </div>

        <!-- Experience Timeline -->
        <div class="mb-16">
          <h3 class="text-2xl font-semibold text-soft-amber mb-8 text-center">Professional Experience</h3>
          
          <div class="space-y-8">
            <div 
              v-for="(exp, index) in experiences" 
              :key="index"
              class="bg-neutral-700 p-8 rounded-lg hover:bg-neutral-600 transition-colors"
            >
              <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 class="text-xl font-semibold text-soft-amber mb-2">{{ exp.position }}</h4>
                  <p class="text-lg text-neutral-300 mb-2">{{ exp.company }}</p>
                  <p class="text-sm text-neutral-400">{{ exp.duration }}</p>
                </div>
              </div>
              
              <p class="text-neutral-300 mb-4">{{ exp.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in exp.technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-neutral-600 rounded-full text-sm text-neutral-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Achievements -->
        <div>
          <h3 class="text-2xl font-semibold text-soft-amber mb-8 text-center">Achievements & Certifications</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(achievement, index) in achievements" 
              :key="index"
              class="bg-neutral-700 p-8 rounded-lg hover:bg-neutral-600 transition-colors"
            >
              <div class="flex items-center justify-between mb-4">
                <h4 class="text-lg font-semibold text-soft-amber">{{ achievement.title }}</h4>
                <span class="text-sm text-neutral-400">{{ achievement.date }}</span>
              </div>
              <p class="text-neutral-300">{{ achievement.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '~/components/hero/HeroSection.vue'
import { useAboutData } from '~/composables/useAboutData'

// Use composables
const { experiences, achievements, personalInfo } = useAboutData()
</script>