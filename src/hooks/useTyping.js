import { useState, useEffect, useRef } from "react";

export function useTyping(words, typingSpeed = 90, deletingSpeed = 45, pauseMs = 2200) {
  const [text, setText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timer;

    const tick = () => {
      const word = words[wordIndex.current % words.length];

      if (!deletingRef.current) {
        charIndex.current++;
        setText(word.slice(0, charIndex.current));

        if (charIndex.current === word.length) {
          deletingRef.current = true;
          timer = setTimeout(tick, pauseMs);
          return;
        }
      } else {
        charIndex.current--;
        setText(word.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          deletingRef.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      timer = setTimeout(tick, deletingRef.current ? deletingSpeed : typingSpeed);
    };

    timer = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}