"use client";

export type HeroTitleLine = {
  text: string;
  className: string;
};

type Props = {
  lines: readonly HeroTitleLine[];
};

export default function HeroTitle({ lines }: Props) {
  return (
    <h1 className="break-words text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
      {lines.map((line, i) => (
        <span
          key={`${line.text}-${i}`}
          className={`hero-title-line block overflow-hidden whitespace-nowrap ${line.className}`}
          style={{
            animation:
              "hero-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            animationDelay: `${0.2 + i * 0.2}s`,
            opacity: 0,
          }}
        >
          {line.text}
        </span>
      ))}
    </h1>
  );
}
