import { notFound } from "next/navigation";
import { categories, getProductsByCategory, getCategoryBySlug } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const items = getProductsByCategory(category);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        {items.length} modelos analizados
      </span>
      <h1 className="font-display mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
        {cat.name}
      </h1>
      <p className="mt-3 max-w-xl text-[var(--text-muted)]">{cat.description}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
