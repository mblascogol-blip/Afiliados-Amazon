export default function BuyButton({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <a
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-[#0e0f11] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:scale-[0.98]"
      >
        Comprar ya
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#0e0f11" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      <p className="mt-2 text-center font-mono text-[11px] text-[var(--text-faint)]">
        Serás redirigido a Amazon
      </p>
    </div>
  );
}
