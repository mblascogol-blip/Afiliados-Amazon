import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import Stars from "./Stars";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-card)] transition-colors hover:border-[var(--accent)]/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-[#0e0f11]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
          {product.brand}
        </span>
        <h3 className="font-display text-base font-bold leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-[var(--text-faint)]">({product.reviewCount})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2 pt-3">
          <span className="font-display text-xl font-extrabold text-[var(--accent)]">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-[var(--text-faint)] line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
