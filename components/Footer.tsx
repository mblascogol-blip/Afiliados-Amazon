export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[var(--text-faint)]">
        <p className="max-w-2xl leading-relaxed">
          Como Afiliado de Amazon, esta web obtiene ingresos por las compras adscritas
          que cumplen los requisitos aplicables. Los precios mostrados pueden no estar
          actualizados; verifica el precio final en Amazon antes de comprar.
        </p>
        <p className="mt-4 font-mono text-xs text-[var(--text-faint)]">
          © {new Date().getFullYear()} RODAR — comparativas independientes de movilidad.
        </p>
      </div>
    </footer>
  );
}
