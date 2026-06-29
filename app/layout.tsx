import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RODAR — Comparativas de bicicletas eléctricas, convencionales y patinetes",
  description:
    "Comparativas independientes de bicicletas eléctricas, bicicletas convencionales y patinetes eléctricos. Te decimos cuál comprar según tu uso real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
