import type { CSSProperties } from "react";

// Letter-by-letter blur-in, driven by the `animate-enter-letter` keyframes so it runs
// before hydration. `delay` and `stagger` are in milliseconds.
export function SplitText({ text, delay = 0, stagger = 30 }: { text: string; delay?: number; stagger?: number }) {
  let index = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      {text.split(" ").map((word, w, words) => (
        <span key={w} aria-hidden>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, i) => (
              <span
                key={i}
                className="animate-enter-letter inline-block"
                style={{ "--delay": delay + index++ * stagger } as CSSProperties}
              >
                {char}
              </span>
            ))}
          </span>
          {w < words.length - 1 && " "}
        </span>
      ))}
    </>
  );
}
