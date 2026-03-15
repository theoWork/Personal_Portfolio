import { ref } from 'vue'

export function useAboutData() {
  const personalInfo = ref({
    fullName: 'Theo Paculanang',
    nickname: 'Yong',
    location: 'Poblacion, Tubod, Lanao Del Norte, Mindanao, 9209',
    email: 'theopaxwork@gmail.com',
    bio: `I'm a passionate full-stack dev Intern and this is a work in progress portfolio, to showcase my skills and projects.`
  })

  return {
    personalInfo
  }
}
