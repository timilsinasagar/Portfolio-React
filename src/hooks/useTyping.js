import { useState, useEffect, useRef } from 'react'

export function useTyping(words, typingSpeed = 90, deletingSpeed = 45, pauseMs = 2200) {
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const wordIndex = useRef(0)
  const charIndex = useRef(0)

  useEffect(() => {
    const tick = () => {
      const word = words[wordIndex.current]
      if (!deleting) {
        charIndex.current++
        setText(word.slice(0, charIndex.current))
        if (charIndex.current === word.length) {
          setTimeout(() => setDeleting(true), pauseMs)
          return
        }
      } else {
        charIndex.current--
        setText(word.slice(0, charIndex.current))
        if (charIndex.current === 0) {
          setDeleting(false)
          wordIndex.current = (wordIndex.current + 1) % words.length
        }
      }
    }
    const timer = setTimeout(tick, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timer)
  }, [text, deleting, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}