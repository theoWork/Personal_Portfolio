import { ref, onMounted, type Ref } from 'vue'

interface Ripple {
  id: number
  x: number
  y: number
  radius: number
  opacity: number
  duration: number
  maxRadius: number
}

export function useRippleEffect(element: Ref<HTMLElement | null>) {
  const ripples = ref<Ripple[]>([])
  let idCounter = 0

  const easeOutQuad = (t: number): number => {
    return t * (2 - t)
  }

  const spawnRipple = (e: MouseEvent) => {
    if (!element.value) return

    const rect = element.value.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple: Ripple = {
      id: idCounter++,
      x,
      y,
      radius: 0,
      opacity: 0.4,
      duration: 1200 + Math.random() * 800,
      maxRadius: 80 + Math.random() * 60
    }

    ripples.value.push(ripple)
    const start = performance.now()

    const animate = (time: number) => {
      const elapsed = time - start
      let progress = Math.min(elapsed / ripple.duration, 1)
      progress = easeOutQuad(progress)

      ripple.radius = ripple.maxRadius * progress
      ripple.opacity = 0.4 * (1 - progress)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        const index = ripples.value.findIndex((r) => r.id === ripple.id)
        if (index > -1) ripples.value.splice(index, 1)
      }
    }

    requestAnimationFrame(animate)
  }

  onMounted(() => {
    if (!element.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry && !entry.isIntersecting) ripples.value = []
      },
      { threshold: 0 }
    )
    
    observer.observe(element.value)
  })

  return {
    ripples,
    spawnRipple
  }
}
