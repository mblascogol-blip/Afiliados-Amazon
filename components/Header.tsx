import Link from "next/link";
import { categories } from "@/lib/data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight">
          RODAR<span className="text-[var(--accent)]">.</span>
        </Link>
        <nav className="hidden gap-7 text-sm font-medium text-[var(--text-muted)] md:flex">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="transition-colors hover:text-[var(--text)]"
            >
              {c.shortLabel}
            </Link>
          ))}
          <Link href="/mejores" className="transition-colors hover:text-[var(--text)]">
            Rankings
          </Link>
        </nav>
      </div>
    </header>
  );
}
