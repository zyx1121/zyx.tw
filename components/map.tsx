import Link from "next/link";

export function Map() {
  return (
    <div className="flex flex-col items-center justify-center w-dvw min-h-dvh py-32 px-8">
      <div className="max-w-6xl w-full mx-auto space-y-16 tracking-wide">
        <Link href="/map" className="block">
          <h2 className="text-6xl md:text-7xl font-bold underline hover:scale-105 transition-all">
            Places I’ve Shot 📌
          </h2>
        </Link>
      </div>
    </div>
  );
}
