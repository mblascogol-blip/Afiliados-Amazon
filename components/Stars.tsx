export default function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fillType = i < full ? "full" : i === full && hasHalf ? "half" : "empty";
        return (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="var(--accent)" />
                <stop offset="50%" stopColor="var(--line)" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"
              fill={fillType === "full" ? "var(--accent)" : fillType === "half" ? `url(#half-${i})` : "var(--line)"}
            />
          </svg>
        );
      })}
    </span>
  );
}
