import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, getProductBySlug, getCategoryBySlug } from "@/lib/data";
import Stars from "@/components/Stars";
import BuyButton from "@/components/BuyButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <nav className="mb-8 flex items-center gap-2 font-mono text-xs text-[var(--text-faint)]">
        <Link href="/" className="hover:text-[var(--text)]">Inicio</Link>
        <span>/</span>
        {category && (
          <Link href={`/${category.slug}`} className="hover:text-[var(--text)]">
            {category.name}
          </Link>
        )}
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Imagen + compra */}
        <div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-card)]">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-[#0e0f11]">
                {product.badge}
              </span>
            )}
          </div>
          <div className="mt-6 hidden md:block">
            <BuyButton href={product.affiliateUrl} />
          </div>
        </div>

        {/* Info */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
            {product.brand}
          </span>
          <h1 className="font-display mt-2 text-3xl font-extrabold leading-tight">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <Stars rating={product.rating} />
            <span className="text-sm text-[var(--text-muted)]">
              {product.rating.toFixed(1)} · {product.reviewCount} valoraciones
            </span>
          </div>

          <div className="mt-5">
            <span className="font-display text-lg font-bold uppercase tracking-wide text-[var(--accent)]">
              Ver precio actual en Amazon
            </span>
            <p className="mt-1 text-xs text-[var(--text-faint)]">
              El precio puede variar y se confirma en la página de Amazon antes de comprar.
            </p>
          </div>

          <p className="mt-5 leading-relaxed text-[var(--text-muted)]">{product.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-5">
            {product.specs.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-faint)]">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 md:hidden">
            <BuyButton href={product.affiliateUrl} />
          </div>
        </div>
      </div>

      {/* Pros y contras */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--accent)]">
            Lo bueno
          </h2>
          <ul className="mt-4 space-y-3">
            {product.pros.map((pro, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[var(--text-muted)]">
                <span className="mt-0.5 text-[var(--accent)]">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] p-6">
          <h2 className="font-display text-sm font-bold uppercase tracking-wide text-[var(--text-faint)]">
            A tener en cuenta
          </h2>
          <ul className="mt-4 space-y-3">
            {product.cons.map((con, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-[var(--text-muted)]">
                <span className="mt-0.5 text-[var(--text-faint)]">–</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 max-w-sm">
        <BuyButton href={product.affiliateUrl} />
      </div>
    </div>
  );
}
