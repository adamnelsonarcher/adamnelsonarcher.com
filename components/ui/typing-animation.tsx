"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  showUnderscore?: boolean;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
  showUnderscore = true,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);
  const [showUnderscoreState, setShowUnderscoreState] = useState<boolean>(true);

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
    if (showUnderscore) {
      const blinkEffect = setInterval(() => {
        setShowUnderscoreState((prev) => !prev);
      }, 600);

      return () => {
        clearInterval(blinkEffect);
      };
    }
  }, [showUnderscore]);

  return (
    <h1
      className={cn(
        "font-display text-left text-xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText}
      {showUnderscore && (
        <span className={showUnderscoreState ? "opacity-100" : "opacity-0"}>_</span>
      )}
    </h1>
  );
}
