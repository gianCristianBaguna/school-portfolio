import { useEffect, useState } from 'react'
export default function useTypewriter(words = [], speed = 120){
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSubIndex(v => v+1)
      if (subIndex === words[index].length){
        setTimeout(() => setSubIndex(0), 800)
        setIndex(v => (v+1) % words.length)
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [subIndex, index, words, speed])
  return [words[index].substring(0, subIndex)]
}
