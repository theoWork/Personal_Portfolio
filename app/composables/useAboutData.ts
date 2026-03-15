import { ref } from 'vue'

interface Experience {
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

interface Achievement {
  title: string
  description: string
  date: string
}

export function useAboutData() {
  const experiences = ref<Experience[]>([
    {
      company: 'Tech Company',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
      description: 'Led development of scalable web applications using modern JavaScript frameworks and cloud technologies.',
      technologies: ['Vue.js', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      company: 'Digital Agency',
      position: 'Frontend Developer',
      duration: '2021 - 2022',
      description: 'Developed responsive and accessible user interfaces for various client projects.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma']
    }
  ])

  const achievements = ref<Achievement[]>([
    {
      title: 'AWS Certified Developer',
      description: 'Successfully completed AWS Developer Associate certification',
      date: '2023'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects with 100+ GitHub contributions',
      date: '2022 - Present'
    }
  ])

  const personalInfo = ref({
    fullName: 'Theo Pacs',
    nickname: 'Yong',
    location: 'Your City, Country',
    email: 'theo@example.com',
    bio: `I'm a passionate full-stack developer with a love for creating beautiful, functional web experiences. 
    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
    or working on personal side projects. I believe in writing clean, maintainable code and 
    creating user experiences that make a difference.`
  })

  return {
    experiences,
    achievements,
    personalInfo
  }
}
