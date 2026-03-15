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
      value: 'theopaxwork@gmail.com',
      href: 'mailto:theopaxwork@gmail.com',
      icon: 'email'
    },
    {
      name: 'Phone',
      value: '0966 382 9460',
      href: '63+ 966 382 9460',
      icon: 'phone'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/theopacs',
      href: 'www.linkedin.com/in/theopax',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      value: 'github.com/theopacs',
      href: 'https://github.com/theoWork',
      icon: 'github'
    }   
  ])

  return {
    contactMethods
  }
}
