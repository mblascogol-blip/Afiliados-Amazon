import Link from "next/link";
import { categories, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Comparativas 2026
              </span>
              <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                Antes de comprar,
                <br />
                mira los números.
              </h1>
              <p className="mt-5 max-w-md text-[var(--text-muted)]">
                Analizamos bicis eléctricas, bicis convencionales y patinetes por
                autonomía, peso y relación calidad-precio real. Sin relleno, sin
                marketing — solo lo que necesitas para decidir.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${c.slug}`}
                    className="rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {c.shortLabel}
                  </Link>
                ))}
              </div>
            </div>

            {/* Signature: speed/range gauge */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl border border-[var(--line)] bg-[var(--bg-card)] p-7">
                <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-faint)]">
                  Autonomía media analizada
                </p>
                <div className="mt-5 space-y-4">
                  {categories.map((c) => (
                    <div key={c.slug}>
                      <div className="mb-1.5 flex items-baseline justify-between">
                        <span className="text-sm text-[var(--text-muted)]">{c.shortLabel}</span>
                        <span className="font-display text-sm font-bold text-[var(--accent)]">
                          {c.heroStat.value}
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--line)]">
                        <div
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{
                            width:
                              c.slug === "bicicletas-electricas"
                                ? "92%"
                                : c.slug === "patinetes-electricos"
                                ? "55%"
                                : "38%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-[var(--text-faint)]">
                  Basado en datos de fabricante de los modelos analizados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-7 transition-colors hover:border-[var(--accent)]/40"
            >
              <div>
                <h2 className="font-display text-xl font-bold">{c.name}</h2>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{c.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                Ver comparativa
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-display text-2xl font-bold">Más vendidos esta semana</h2>
          <Link href="/mejores" className="text-sm font-semibold text-[var(--accent)]">
            Ver todos los rankings →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((p) => p.badge)
            .map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
        </div>
      </section>
    </div>
  );
}
