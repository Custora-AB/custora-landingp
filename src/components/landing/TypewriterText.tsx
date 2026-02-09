import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({
  text,
  delay = 0,
  speed = 30,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length >= text.length) {
      onComplete?.();
      return;
    }
    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [started, displayedText, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-foreground ml-0.5 animate-pulse align-text-bottom" />
      )}
    </span>
  );
}
