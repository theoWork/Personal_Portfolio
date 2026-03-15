import { ref } from 'vue'

interface TechSkill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

interface TechCategory {
  title: string
  skills: TechSkill[]
}

export function useTechStack() {
  const techStack = ref<TechCategory[]>([
    {
      title: 'Frontend',
      skills: [
        { name: 'Vue.js', category: 'frontend' },
        { name: 'React', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'Tailwind CSS', category: 'frontend' },
        { name: 'JavaScript', category: 'frontend' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', category: 'backend' },
        { name: 'Python', category: 'backend' },
        { name: 'SQLite3', category: 'backend' },
        { name: 'Django', category: 'backend' },
        { name: 'Express.js', category: 'backend' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', category: 'tools' },
        { name: 'Figma', category: 'tools' }
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'UI/UX Design', category: 'other' },
        { name: 'REST APIs', category: 'other' },
        { name: 'Video Editing', category: 'other' }, 
        { name: 'Photography', category: 'other' }
      ]
    }
  ])

  return {
    techStack
  }
}
