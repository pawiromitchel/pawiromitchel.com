"use client";

import { useState, useEffect } from "react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
  interval?: number; // milliseconds between text changes
}

export function AnimatedText({
  texts,
  className = "",
  interval = 3000,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, interval - 500); // Start fade out 500ms before switching

    const switchTimer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setIsVisible(true);
    }, interval);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, [currentIndex, texts.length, interval]);

  return (
    <span
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  );
}
