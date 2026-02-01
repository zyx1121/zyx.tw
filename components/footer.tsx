export function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} ZYX.
      </span>
    </footer>
  );
}
