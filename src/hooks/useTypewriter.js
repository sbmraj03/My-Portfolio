import { useEffect, useRef, useState } from 'react'

export default function useTypewriter(phrases) {
  const [index, setIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [building, setBuilding] = useState(true)
  const timerRef = useRef(null)
  const currentPhrase = phrases[index]

  useEffect(() => {
    const run = () => {
      if (building) {
        const next = charCount + 1
        if (next > currentPhrase.length) {
          setBuilding(false)
          timerRef.current = setTimeout(run, 800)
          return
        }
        setCharCount(next)
        timerRef.current = setTimeout(run, 120)
      } else {
        const next = charCount - 1
        if (next < 0) {
          setIndex((prev) => (prev + 1) % phrases.length)
          setCharCount(0)
          setBuilding(true)
          timerRef.current = setTimeout(run, 20)
          return
        }
        setCharCount(next)
        timerRef.current = setTimeout(run, 40)
      }
    }

    timerRef.current = setTimeout(run, building ? 120 : 40)
    return () => clearTimeout(timerRef.current)
  }, [building, charCount, currentPhrase.length, phrases.length])

  return currentPhrase.slice(0, charCount)
}
