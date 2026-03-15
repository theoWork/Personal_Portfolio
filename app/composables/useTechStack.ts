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
        { name: 'PostgreSQL', category: 'backend' },
        { name: 'MongoDB', category: 'backend' },
        { name: 'Express.js', category: 'backend' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', category: 'tools' },
        { name: 'Docker', category: 'tools' },
        { name: 'AWS', category: 'tools' },
        { name: 'Vercel', category: 'tools' },
        { name: 'Figma', category: 'tools' }
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { name: 'UI/UX Design', category: 'other' },
        { name: 'REST APIs', category: 'other' },
        { name: 'GraphQL', category: 'other' },
        { name: 'Testing', category: 'other' }
      ]
    }
  ])

  return {
    techStack
  }
}
