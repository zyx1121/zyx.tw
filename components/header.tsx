import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-4 left-4 z-50">
      <Link href="https://zyx.tw" className="text-sm text-muted-foreground">
        ZYX
      </Link>
    </header>
  );
}
