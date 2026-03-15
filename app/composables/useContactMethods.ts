import { ref } from 'vue'

interface ContactMethod {
  name: string
  value: string
  href: string
  icon: string
}

export function useContactMethods() {
  const contactMethods = ref<ContactMethod[]>([
    {
      name: 'Email',
      value: 'theo@example.com',
      href: 'mailto:theo@example.com',
      icon: 'email'
    },
    {
      name: 'Phone',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
      icon: 'phone'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/theopacs',
      href: 'https://linkedin.com/in/theopacs',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      value: 'github.com/theopacs',
      href: 'https://github.com/theopacs',
      icon: 'github'
    },
    {
      name: 'Twitter',
      value: '@theopacs',
      href: 'https://twitter.com/theopacs',
      icon: 'twitter'
    }
  ])

  return {
    contactMethods
  }
}
