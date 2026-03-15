<template>
  <section id="skills" class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-16">
    <div class="max-w-7xl w-full">
      <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
        Skills
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Frontend Skills -->
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-soft-amber mb-4">Frontend</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Vue.js</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">React</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">TypeScript</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Tailwind CSS</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">JavaScript</span>
            </div>
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-soft-amber mb-4">Backend</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Node.js</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Python</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">SQLite3</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Django</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Express.js</span>
            </div>
          </div>
        </div>

        <!-- Tools & DevOps -->
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-soft-amber mb-4">Tools & DevOps</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Git</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Figma</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Skills -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-soft-amber mb-4">Other Skills</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">UI/UX Design</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">REST APIs</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Video Editing</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Testing</span>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-soft-amber mb-4">Soft Skills</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Problem Solving</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Team Collaboration</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Communication</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-soft-amber rounded-full"></span>
              <span class="text-neutral-300">Time Management</span>
            </div>
          </div>
        </div>

        <!-- Currently Learning -->
        <div class="bg-neutral-700 rounded-lg p-6 hover:bg-neutral-600 transition-colors">
          <h3 class="text-xl font-semibold text-warm-terra mb-4">Currently Learning</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-warm-terra rounded-full animate-pulse"></span>
              <span class="text-neutral-300">Advanced TypeScript</span>
            </div>
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-warm-terra rounded-full animate-pulse"></span>
              <span class="text-neutral-300">GraphQL</span>
            </div>
           
            <div class="flex items-center space-x-3">
              <span class="w-3 h-3 bg-warm-terra rounded-full animate-pulse"></span>
              <span class="text-neutral-300">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTechStack } from '~/composables/useTechStack'

const techStack = useTechStack()

// Debug: Check what we actually have
console.log('TechStack raw:', techStack)
console.log('TechStack value:', techStack.value)
console.log('TechStack frontend:', techStack.value?.frontend)
</script>
