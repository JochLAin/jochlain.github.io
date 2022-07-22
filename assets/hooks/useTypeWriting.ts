import { useEffect, useRef, useState } from "react";

export default function useTypeWriting(words: string[]) {
  const idx = useRef(0);
  const length = useRef(words[0].length);
  const [content, setContent] = useState(words[0]);

  useEffect(() => {
    let timeout: any;

    const nextWord = () => {
      idx.current = (idx.current + 1) % words.length;
      length.current = 0;
      nextLetter();
    };
    const nextLetter = () => {
      if (length.current < words[idx.current].length) {
        length.current += 1;
        setContent(words[idx.current].slice(0, length.current));
        timeout = setTimeout(nextLetter, 100);
      } else {
        timeout = setTimeout(eraseLetter, 2000);
      }
    }
    const eraseLetter = () => {
      if (length.current > 0) {
        length.current -= 1;
        setContent(words[idx.current].slice(0, length.current));
        timeout = setTimeout(eraseLetter, 50);
      } else {
        timeout = setTimeout(nextWord, 30);
      }
    };

    nextWord();
    return () => {
      timeout && window.clearTimeout(timeout);
    }
  }, []);

  return content;
}
