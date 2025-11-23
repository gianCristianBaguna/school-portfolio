import { useEffect, useRef, RefObject } from 'react'

export default function useParallax(strength: number = 0.1): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const y = (rect.top - window.innerHeight / 2) * strength
      ref.current.style.transform = `translateY(${y}px)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [strength])

  return ref
}
