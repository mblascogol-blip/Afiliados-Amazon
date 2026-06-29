import Link from "next/link";
import Image from "next/image";
import { categories, getProductsByCategory } from "@/lib/data";
import Stars from "@/components/Stars";
import BuyButton from "@/components/BuyButton";

export default function MejoresPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        Rankings 2026
      </span>
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
        Los mejores de cada categoría
      </h1>
      <p className="mt-3 max-w-xl text-[var(--text-muted)]">
        Ordenados por valoración real de compradores, no por precio.
      </p>

      <div className="mt-12 space-y-16">
        {categories.map((cat) => {
          const ranked = [...getProductsByCategory(cat.slug)].sort(
            (a, b) => b.rating - a.rating
          );
          return (
            <section key={cat.slug}>
              <h2 className="font-display text-xl font-bold">
                Mejores {cat.name.toLowerCase()}
              </h2>
              <div className="mt-6 space-y-4">
                {ranked.map((p, i) => (
                  <div
                    key={p.slug}
                    className="flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-5 sm:flex-row sm:items-center"
                  >
                    <span className="font-display text-2xl font-extrabold text-[var(--text-faint)] sm:w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-[var(--bg-elevated)]">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <Link href={`/producto/${p.slug}`} className="font-display font-bold hover:text-[var(--accent)]">
                        {p.name}
                      </Link>
                      <div className="mt-1 flex items-center gap-2">
                        <Stars rating={p.rating} />
                        <span className="text-xs text-[var(--text-faint)]">
                          {p.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="mt-1 block font-display text-sm font-bold text-[var(--accent)]">
                        {p.price}
                      </span>
                    </div>
                    <div className="w-full sm:w-48">
                      <BuyButton href={p.affiliateUrl} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
