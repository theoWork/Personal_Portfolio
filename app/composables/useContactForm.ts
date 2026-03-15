import { ref } from 'vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

export function useContactForm() {
  const form = ref<ContactForm>({
    name: '',
    email: '',
    message: ''
  })

  const showSuccess = ref(false)

  const handleSubmit = () => {
    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    console.log('Form submitted:', form.value)
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: ''
    }
    
    // Show success message
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  }

  return {
    form,
    showSuccess,
    handleSubmit
  }
}
