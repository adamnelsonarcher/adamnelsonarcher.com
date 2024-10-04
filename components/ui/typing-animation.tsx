"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [showUnderscore, setShowUnderscore] = useState<boolean>(true);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  useEffect(() => {
    const blinkEffect = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 600); // Blink every 500ms

    return () => {
      clearInterval(blinkEffect);
    };
  }, []);

  return (
    <h1
      className={cn(
        "font-display text-left text-xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
      <span className={showUnderscore ? "opacity-100" : "opacity-0"}>_</span>
    </h1>
  );
}
