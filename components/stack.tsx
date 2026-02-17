const TOOLS = [
  "C++",
  "Java",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bun",
  "Docker",
  "Git",
  "Supabase",
  "Vercel",
  "Mapbox",
  ""
];

function MarqueeTrack() {
  return (
    <div className="flex shrink-0 gap-6 md:gap-10 items-center">
      {TOOLS.map((name) => (
        <span
          key={name}
          className="text-3xl md:text-4xl font-medium text-muted-foreground whitespace-nowrap"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function Stack() {
  return (
    <div className="flex flex-col items-center justify-center w-dvw min-h-dvh py-32 px-8">
      <div className="max-w-6xl w-full mx-auto space-y-12 tracking-wide">
        <h2 className="text-6xl md:text-7xl font-bold">
          My AI uses these.{" "}
          <br className="md:hidden" />
          I use my AI 🤖
        </h2>

        {/* Looping marquee strip with gradient fade */}
        <div className="relative w-dvw overflow-hidden opacity-90 -mx-[calc((100dvw-100%)/2)]">
          <div
            className="absolute inset-0 z-10 w-full pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--background) 0%, transparent 12%, transparent 88%, var(--background) 100%)",
            }}
          />
          <div className="flex flex-nowrap w-fit animate-marquee will-change-transform motion-reduce:animate-none">
            <MarqueeTrack />
            <MarqueeTrack />
          </div>
        </div>
      </div>
    </div>
  );
}
