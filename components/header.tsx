import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-4 left-4 z-50">
      <Link href="/" className="text-md text-muted-foreground p-2 animate-pulse">
        ZYX
      </Link>
      <Link href="/map" className="text-md text-muted-foreground p-2 animate-pulse">
        MAP
      </Link>
    </header>
  );
}
