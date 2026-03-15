<template>
  <div>
    <HeroSection />
    
    <!-- Contact Section -->
    <section class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-20">
      <div class="max-w-4xl w-full">
        <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-16 text-center">
          Get In Touch
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <!-- Contact Methods -->
          <div class="space-y-8">
            <h3 class="text-2xl font-semibold text-soft-amber mb-8">Contact Methods</h3>
            
            <a 
              v-for="method in contactMethods" 
              :key="method.name"
              :href="method.href" 
              :target="method.href.startsWith('http') ? '_blank' : '_self'"
              class="flex items-center space-x-4 text-neutral-300 hover:text-soft-amber transition-colors group"
            >
              <div class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center group-hover:bg-soft-amber group-hover:text-neutral-900 transition-colors">
                <!-- Email Icon -->
                <svg v-if="method.icon === 'email'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <!-- Phone Icon -->
                <svg v-else-if="method.icon === 'phone'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <!-- LinkedIn Icon -->
                <svg v-else-if="method.icon === 'linkedin'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <!-- GitHub Icon -->
                <svg v-else-if="method.icon === 'github'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <!-- Twitter Icon -->
                <svg v-else-if="method.icon === 'twitter'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div>
                <p class="font-medium">{{ method.name }}</p>
                <p class="text-sm opacity-75">{{ method.value }}</p>
              </div>
            </a>
          </div>

          <!-- Contact Form -->
          <div class="space-y-8">
            <h3 class="text-2xl font-semibold text-soft-amber mb-8">Send a Message</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-soft-amber focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-soft-amber focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-soft-amber focus:border-transparent resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full bg-soft-amber text-neutral-900 px-8 py-4 rounded-lg hover:bg-warm-terra transition font-medium"
              >
                Send Message
              </button>
            </form>

            <div v-if="showSuccess" class="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
              Message sent successfully! I'll get back to you soon.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '~/components/hero/HeroSection.vue'
import { useContactForm } from '~/composables/useContactForm'
import { useContactMethods } from '~/composables/useContactMethods'

// Use composables
const { form, showSuccess, handleSubmit } = useContactForm()
const { contactMethods } = useContactMethods()
</script>