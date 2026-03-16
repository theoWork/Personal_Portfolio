<template>
  <section id="contact" class="min-h-screen bg-neutral-800 flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 py-20">
    <div class="max-w-4xl w-full">
      <h2 class="text-4xl md:text-6xl font-bold text-neutral-100 mb-12 text-center">
        Get In Touch
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Methods -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-soft-amber mb-6">Contact Methods</h3>
          
          <button 
            v-for="method in contactMethods" 
            :key="method.name"
            @click="copyToClipboard(method.value, method.name)"
            class="flex items-center space-x-4 text-neutral-300 hover:text-soft-amber transition-colors group w-full text-left"
          >
            <div class="w-12 h-12 bg-neutral-700 rounded-lg flex items-center justify-center group-hover:bg-soft-amber group-hover:text-neutral-900 transition-colors">
              <!-- Email Icon -->
              <img v-if="method.icon === 'email'" src="/images/mail.png" alt="Email" class="w-6 h-6" />
              <!-- Phone Icon -->
              <img v-else-if="method.icon === 'phone'" src="/images/phone-call.png" alt="Phone" class="w-6 h-6" />
              <!-- LinkedIn Icon -->
              <img v-else-if="method.icon === 'linkedin'" src="/images/linkedin.png" alt="LinkedIn" class="w-6 h-6" />
              <!-- GitHub Icon -->
              <img v-else-if="method.icon === 'github'" src="/images/github.png" alt="GitHub" class="w-6 h-6" />
            </div>
            <div>
              <p class="font-medium">{{ method.name }}</p>
              <p class="text-sm opacity-75">{{ method.value }}</p>
            </div>
          </button>
        </div>

        <!-- Copy Notification -->
        <div 
          v-if="showNotification" 
          class="fixed top-20 right-4 bg-soft-amber text-neutral-900 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300"
        >
          {{ copyNotification }}
        </div>

        <!-- Contact Form -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-soft-amber mb-6">Send a Message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-4">
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
              class="w-full bg-soft-amber text-neutral-900 px-6 py-3 rounded-lg hover:bg-warm-terra transition font-medium"
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
</template>

<script setup>
import { ref } from 'vue'
import { useContactForm } from '~/composables/useContactForm'
import { useContactMethods } from '~/composables/useContactMethods'

// Use composables
const { form, showSuccess, handleSubmit } = useContactForm()
const { contactMethods } = useContactMethods()

// Copy functionality
const copyNotification = ref('')
const showNotification = ref(false)

const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    
    // Show notification
    copyNotification.value = `${type} copied!`
    showNotification.value = true
    
    // Hide notification after 2 seconds
    setTimeout(() => {
      showNotification.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copyNotification.value = `${type} copied!`
    showNotification.value = true
    setTimeout(() => {
      showNotification.value = false
    }, 2000)
  }
}
</script>
