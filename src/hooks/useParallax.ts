import { useEffect, useRef } from 'react'
export default function useParallax(strength = 0.1){
  const ref = useRef(null)
  useEffect(() => {
    function onScroll(){
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const offset = window.scrollY || window.pageYOffset
      const y = (rect.top - window.innerHeight/2) * strength
      ref.current.style.transform = `translateY(${y}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [strength])
  return ref
}