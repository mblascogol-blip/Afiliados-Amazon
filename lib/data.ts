export type Category = {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  heroStat: { value: string; label: string };
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  summary: string;
  affiliateUrl: string;
};

export const categories: Category[] = [
  { slug: "bicicletas-electricas", name: "Bicicletas eléctricas", shortLabel: "E-Bikes", description: "Montaña, carretera y ciudad. Motor, batería y autonomía explicados sin tecnicismos.", heroStat: { value: "120km", label: "autonomía máx." } },
  { slug: "bicicletas-convencionales", name: "Bicicletas convencionales", shortLabel: "Sin motor", description: "Ligereza, componentes y relación calidad-precio para cada terreno.", heroStat: { value: "9.8kg", label: "peso mínimo" } },
  { slug: "patinetes-electricos", name: "Patinetes eléctricos", shortLabel: "E-Scooters", description: "La opción más compacta para moverte por ciudad sin depender del coche.", heroStat: { value: "25km/h", label: "vel. homologada" } },
];

export const terrains = ["Montaña", "Carretera", "Ciudad"] as const;

export const products: Product[] = [
  { slug: "ebike-montana-engwe-engine-pro", categorySlug: "bicicletas-electricas", name: "Engine Pro 2.0", brand: "Engwe", price: "1.299€", oldPrice: "1.499€", rating: 4.5, reviewCount: 0, image: "https://m.media-amazon.com/images/I/61XvggH9COL._AC_SL1500_.jpg", badge: "Más vendida", specs: [{ label: "Motor", value: "250W con sensor de par" }, { label: "Batería", value: "768Wh, 16Ah" }, { label: "Autonomía", value: "Hasta 110km" }, { label: "Suspensión", value: "Completa, Fat Tire 4.0" }], pros: ["Sensor de par: asistencia natural, no a tirones", "Batería extraíble de gran capacidad", "Neumáticos anchos, muy estable en pistas forestales"], cons: ["Peso elevado por la batería grande", "Display algo básico en diseño"], summary: "La eléctrica de montaña con mejor relación autonomía-precio de Amazon: sensor de par real, no solo un acelerador con ayuda.", affiliateUrl: "https://amzn.to/4vKAemg" },
  { slug: "ebike-carretera-touroll-u1", categorySlug: "bicicletas-electricas", name: "U1", brand: "Touroll", price: "1.099€", rating: 4.4, reviewCount: 0, image: "https://m.media-amazon.com/images/I/71GTReBf6%2BL._AC_SL1500_.jpg", specs: [{ label: "Motor", value: "250W, 45Nm" }, { label: "Batería", value: "13Ah extraíble" }, { label: "Autonomía", value: "Hasta 65km" }, { label: "Ruedas", value: "26\" / 29\" según versión" }], pros: ["Geometría ágil para asfalto y carriles bici", "Batería extraíble fácil de cargar", "Precio competitivo para la autonomía que ofrece"], cons: ["No lleva componentes Shimano de gama alta", "Sin suspensión trasera"], summary: "Para quien quiere rodar carretera y carril bici sin pagar el sobrecoste de las marcas tradicionales.", affiliateUrl: "https://amzn.to/4oVwknD" },
  { slug: "ebike-ciudad-fllischiano-eride", categorySlug: "bicicletas-electricas", name: "E-Ride Trekking", brand: "F.lli Schiano", price: "899€", rating: 4.3, reviewCount: 0, image: "https://m.media-amazon.com/images/I/713Bb6oWeiL._AC_SL1500_.jpg", badge: "Diseño", specs: [{ label: "Motor", value: "250W, 40Nm" }, { label: "Batería", value: "36V 10.4Ah extraíble" }, { label: "Ruedas", value: "28 pulgadas" }, { label: "Uso", value: "Trekking / urbano" }], pros: ["Postura cómoda para trayectos diarios", "Marca europea con buena disponibilidad de recambios", "Precio accesible para una primera e-bike"], cons: ["Componentes de gama de entrada", "Autonomía corta para trayectos largos"], summary: "La eléctrica urbana más sensata si quieres dejar el coche para los trayectos diarios sin gastar de más.", affiliateUrl: "https://amzn.to/4y0KNDe" },
  { slug: "mtb-moma-aluminio-suspension", categorySlug: "bicicletas-convencionales", name: "GTT Pro 26\"", brand: "Moma Bikes", price: "399€", rating: 4.5, reviewCount: 0, image: "https://m.media-amazon.com/images/I/81dXCLyFziL._AC_SL1500_.jpg", badge: "Mejor relación calidad-precio", specs: [{ label: "Cuadro", value: "Aluminio" }, { label: "Suspensión", value: "Completa" }, { label: "Cambio", value: "Shimano, 21v" }, { label: "Frenos", value: "Disco mecánico" }], pros: ["La marca más vendida en Amazon España en MTB", "Cambio Shimano fiable a precio bajo", "Suspensión completa, cómoda en pistas"], cons: ["Componentes de gama entrada, no para competición", "Llantas mejorables a medio plazo"], summary: "La bici más vendida de Amazon en esta categoría: componentes Shimano fiables a precio de entrada.", affiliateUrl: "https://amzn.to/3QMGxX6" },
  { slug: "carretera-kabon-carbon-105", categorySlug: "bicicletas-convencionales", name: "Carbon Road Bike 105", brand: "KABON", price: "1.099€", rating: 4.4, reviewCount: 0, image: "https://m.media-amazon.com/images/I/71C8JhO5f4L._AC_UL320_.jpg", specs: [{ label: "Cuadro", value: "Carbono T800 completo" }, { label: "Cambio", value: "Shimano 105, 22v" }, { label: "Frenos", value: "Disco hidráulico" }, { label: "Ruedas", value: "700C carbono" }], pros: ["Carbono completo a precio competitivo", "Shimano 105 + disco hidráulico"], cons: ["Precio más elevado que aluminio", "Puede requerir taller especializado"], summary: "La bici de carretera de carbono más equilibrada de Amazon España: Shimano 105, frenos hidráulicos y menos de 8.5kg.", affiliateUrl: "https://amzn.to/4eXbSyn" },
  { slug: "ciudad-fabricbike-weekday", categorySlug: "bicicletas-convencionales", name: "Weekday", brand: "FabricBike", price: "269€", rating: 4.5, reviewCount: 0, image: "https://m.media-amazon.com/images/I/81siQiLE2YL._AC_SL1500_.jpg", specs: [{ label: "Cuadro", value: "Aluminio ligero" }, { label: "Velocidades", value: "Single speed o 3v" }, { label: "Frenos", value: "V-brake doble" }, { label: "Peso", value: "Aprox. 9.5kg" }], pros: ["Marca española muy popular en Amazon", "Ligera y ágil para ciudad"], cons: ["Sin marchas múltiples", "Sin guardabarros de serie"], summary: "La bici urbana española más valorada en Amazon: ligera, sin complicaciones y lista para la ciudad.", affiliateUrl: "https://amzn.to/4wcIsTM" },
  { slug: "patinete-xiaomi-4-pro", categorySlug: "patinetes-electricos", name: "Electric Scooter Serie 6", brand: "Xiaomi", price: "549€", rating: 4.5, reviewCount: 0, image: "https://m.media-amazon.com/images/I/61xqoBTyP2L._AC_SL1500_.jpg", badge: "Homologado DGT", specs: [{ label: "Motor", value: "350W" }, { label: "Autonomía", value: "25-75km según versión" }, { label: "Vel. máx", value: "25km/h homologada" }, { label: "Neumáticos", value: "10-12\" sin cámara" }], pros: ["Plegado en un solo paso", "Suspensión y doble freno, cómodo en adoquines"], cons: ["Varias versiones, fijarse en autonomía real", "Pantalla pequeña con sol directo"], summary: "El equilibrio perfecto entre autonomía y peso para quien combina patinete con transporte público.", affiliateUrl: "https://amzn.to/3SAY0Cr" },
  { slug: "patinete-segway-ninebot-max", categorySlug: "patinetes-electricos", name: "Ninebot MAX G3", brand: "Segway-Ninebot", price: "699€", rating: 4.6, reviewCount: 0, image: "https://m.media-amazon.com/images/I/613w7xVwWmL._AC_SL1500_.jpg", specs: [{ label: "Motor", value: "25km/h homologado" }, { label: "Autonomía", value: "Hasta 80km" }, { label: "Suspensión", value: "Hidráulica delantera y trasera" }, { label: "Extra", value: "Muelle de resorte adicional" }], pros: ["Suspensión hidráulica, muy estable en baches", "Mayor autonomía de la gama Segway homologada"], cons: ["Más pesado que la media", "Precio elevado"], summary: "Si tu ciudad tiene calles en mal estado, este patinete absorbe los baches mejor que cualquier otro de su precio.", affiliateUrl: "https://amzn.to/4bfk5wA" },
  { slug: "patinete-cecotec-bongo", categorySlug: "patinetes-electricos", name: "Bongo Serie A Connected", brand: "Cecotec", price: "299€", rating: 4.4, reviewCount: 0, image: "https://m.media-amazon.com/images/I/515zA6Qt83L._AC_SL1500_.jpg", badge: "Más vendido en Amazon", specs: [{ label: "Motor", value: "700W máx / 300W nominal" }, { label: "Autonomía", value: "Hasta 35km" }, { label: "Vel. máx", value: "25km/h homologada" }, { label: "Extra", value: "Batería extraíble, app Bluetooth" }], pros: ["El patinete más vendido de Amazon España", "Batería extraíble: lleva una de repuesto y dobla autonomía"], cons: ["Peso algo elevado (14kg)", "App algo limitada"], summary: "El patinete eléctrico más vendido de Amazon España: motor 700W, batería extraíble y precio imbatible.", affiliateUrl: "https://amzn.to/4v8m3WO" },
];

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
