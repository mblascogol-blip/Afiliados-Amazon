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
  rating: number; // 1-5
  reviewCount: number;
  image: string;
  badge?: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  summary: string;
  affiliateUrl: string; // sustituye por tu enlace real de Amazon Afiliados
};

export const categories: Category[] = [
  {
    slug: "bicicletas-electricas",
    name: "Bicicletas eléctricas",
    shortLabel: "E-Bikes",
    description:
      "Montaña, carretera y ciudad. Motor, batería y autonomía explicados sin tecnicismos.",
    heroStat: { value: "120km", label: "autonomía máx." },
  },
  {
    slug: "bicicletas-convencionales",
    name: "Bicicletas convencionales",
    shortLabel: "Sin motor",
    description:
      "Ligereza, componentes y relación calidad-precio para cada terreno.",
    heroStat: { value: "9.8kg", label: "peso mínimo" },
  },
  {
    slug: "patinetes-electricos",
    name: "Patinetes eléctricos",
    shortLabel: "E-Scooters",
    description:
      "La opción más compacta para moverte por ciudad sin depender del coche.",
    heroStat: { value: "25km/h", label: "vel. homologada" },
  },
];

export const terrains = ["Montaña", "Carretera", "Ciudad"] as const;

export const products: Product[] = [
  // ---- BICICLETAS ELÉCTRICAS ----
  {
    slug: "ebike-montana-rockrider-e340",
    categorySlug: "bicicletas-electricas",
    name: "E-MTB 340 Trail",
    brand: "Rockrider",
    price: "1.499€",
    oldPrice: "1.699€",
    rating: 4.5,
    reviewCount: 312,
    image: "/products/ebike-mtb.svg",
    badge: "Más vendida",
    specs: [
      { label: "Motor", value: "250W central" },
      { label: "Batería", value: "504Wh" },
      { label: "Autonomía", value: "Hasta 90km" },
      { label: "Suspensión", value: "Delantera 120mm" },
    ],
    pros: [
      "Motor central con buena respuesta en subidas técnicas",
      "Batería extraíble, fácil de cargar sin mover la bici",
      "Frenos de disco hidráulicos de serie",
    ],
    cons: ["El display es básico, sin GPS integrado", "Peso elevado (24kg) para cargarla en escaleras"],
    summary:
      "La opción más equilibrada para quien empieza en montaña eléctrica: motor central fiable y autonomía real para rutas de medio día.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO1?tag=tuid-21",
  },
  {
    slug: "ebike-carretera-cube-attain",
    categorySlug: "bicicletas-electricas",
    name: "Attain Hybrid Race",
    brand: "Cube",
    price: "3.299€",
    rating: 4.7,
    reviewCount: 158,
    image: "/products/ebike-road.svg",
    specs: [
      { label: "Motor", value: "Bosch Performance Line" },
      { label: "Batería", value: "625Wh" },
      { label: "Autonomía", value: "Hasta 120km" },
      { label: "Cambio", value: "Shimano 105, 22v" },
    ],
    pros: [
      "Asistencia muy natural, apenas se nota el motor pedaleando fuerte",
      "Geometría de carretera real, no es una híbrida disfrazada",
      "Integración de batería en el cuadro, estética limpia",
    ],
    cons: ["Precio elevado para la categoría", "Mantenimiento más caro al ser componentes Bosch"],
    summary:
      "Para quien quiere rodar largas distancias en carretera sin sacrificar la sensación de bici de carreras clásica.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO2?tag=tuid-21",
  },
  {
    slug: "ebike-ciudad-vanmoof-s5",
    categorySlug: "bicicletas-electricas",
    name: "Urban S5",
    brand: "VanMoof",
    price: "2.198€",
    rating: 4.3,
    reviewCount: 421,
    image: "/products/ebike-city.svg",
    badge: "Diseño",
    specs: [
      { label: "Motor", value: "250W trasero" },
      { label: "Batería", value: "487Wh integrada" },
      { label: "Autonomía", value: "Hasta 60km" },
      { label: "Extra", value: "Antirrobo con GPS integrado" },
    ],
    pros: [
      "Diseño integrado, sin cables visibles",
      "App con localización antirrobo incluida",
      "Arranque automático muy cómodo en ciudad",
    ],
    cons: ["Reparaciones dependen de talleres específicos", "Autonomía algo corta para trayectos largos"],
    summary:
      "La bici eléctrica urbana más 'plug and play': la sacas de la caja y en 10 minutos estás rodando por la ciudad.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO3?tag=tuid-21",
  },

  // ---- BICICLETAS CONVENCIONALES ----
  {
    slug: "mtb-canyon-grand-canyon",
    categorySlug: "bicicletas-convencionales",
    name: "Grand Canyon 6",
    brand: "Canyon",
    price: "999€",
    rating: 4.6,
    reviewCount: 267,
    image: "/products/mtb-classic.svg",
    badge: "Mejor relación calidad-precio",
    specs: [
      { label: "Cuadro", value: "Aluminio 6061" },
      { label: "Peso", value: "12.8kg" },
      { label: "Cambio", value: "Shimano Deore, 12v" },
      { label: "Suspensión", value: "100mm recorrido" },
    ],
    pros: [
      "Componentes Shimano Deore muy por encima de su precio",
      "Geometría versátil, sirve para trail suave y XC",
      "Frenos de disco hidráulicos",
    ],
    cons: ["Solo venta online directa, sin punto físico cercano siempre", "Llantas básicas, mejorable a medio plazo"],
    summary:
      "El punto de entrada perfecto a montaña sin gastar de más: componentes serios en una bici que no te decepciona al año.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO4?tag=tuid-21",
  },
  {
    slug: "carretera-btwin-triban-rc520",
    categorySlug: "bicicletas-convencionales",
    name: "Triban RC520",
    brand: "Btwin",
    price: "899€",
    rating: 4.4,
    reviewCount: 189,
    image: "/products/road-classic.svg",
    specs: [
      { label: "Cuadro", value: "Carbono" },
      { label: "Peso", value: "9.8kg" },
      { label: "Cambio", value: "Shimano 105, 22v" },
      { label: "Ruedas", value: "700x28" },
    ],
    pros: ["Cuadro de carbono a un precio inusualmente bajo", "Muy ágil, ideal para primeras carreras o cicloturismo rápido"],
    cons: ["Componentes de freno mejorables (no son de disco)", "Talla limitada en algunas tiendas"],
    summary:
      "La carbono más asequible del mercado para quien quiere dar el salto de la híbrida a la carretera en serio.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO5?tag=tuid-21",
  },
  {
    slug: "ciudad-orbea-vector",
    categorySlug: "bicicletas-convencionales",
    name: "Vector 20",
    brand: "Orbea",
    price: "549€",
    rating: 4.5,
    reviewCount: 134,
    image: "/products/city-classic.svg",
    specs: [
      { label: "Cuadro", value: "Aluminio" },
      { label: "Peso", value: "11.5kg" },
      { label: "Cambio", value: "Shimano, 8v" },
      { label: "Extra", value: "Guardabarros y portabultos incluidos" },
    ],
    pros: ["Lista para usar desde el día uno (guardabarros, luces)", "Posición muy cómoda para trayectos diarios"],
    cons: ["No apta para terreno técnico", "Cambio de gama de entrada"],
    summary:
      "Si tu bici va a vivir entre el portal de casa y la oficina, esta es la que menos cosas tendrás que añadirle después.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO6?tag=tuid-21",
  },

  // ---- PATINETES ELÉCTRICOS ----
  {
    slug: "patinete-xiaomi-4-pro",
    categorySlug: "patinetes-electricos",
    name: "Electric Scooter 4 Pro",
    brand: "Xiaomi",
    price: "549€",
    oldPrice: "599€",
    rating: 4.5,
    reviewCount: 892,
    image: "/products/scooter-1.svg",
    badge: "Más vendido",
    specs: [
      { label: "Motor", value: "350W" },
      { label: "Autonomía", value: "Hasta 55km" },
      { label: "Vel. máx", value: "25km/h homologada" },
      { label: "Peso", value: "17.6kg" },
    ],
    pros: ["Plegado en un solo paso, muy práctico", "Suspensión delantera y trasera, cómodo en adoquines"],
    cons: ["Sin homologación para circular en algunos países sin matrícula", "Pantalla pequeña, difícil de leer con sol directo"],
    summary:
      "El equilibrio perfecto entre autonomía y peso para quien combina patinete con transporte público a diario.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO7?tag=tuid-21",
  },
  {
    slug: "patinete-segway-ninebot-max",
    categorySlug: "patinetes-electricos",
    name: "Ninebot Max G3",
    brand: "Segway",
    price: "699€",
    rating: 4.6,
    reviewCount: 543,
    image: "/products/scooter-2.svg",
    specs: [
      { label: "Motor", value: "450W" },
      { label: "Autonomía", value: "Hasta 65km" },
      { label: "Vel. máx", value: "25km/h homologada" },
      { label: "IP", value: "IP66 resistente a lluvia" },
    ],
    pros: ["Ruedas grandes, muy estable en baches", "Resistencia al agua real, no solo en el papel"],
    cons: ["Más pesado que la media (23kg)", "Carga lenta, más de 9 horas"],
    summary:
      "Si tu ciudad tiene calles en mal estado, este patinete absorbe los baches mejor que casi cualquier otro de su precio.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO8?tag=tuid-21",
  },
  {
    slug: "patinete-cecotec-bongo",
    categorySlug: "patinetes-electricos",
    name: "Bongo Serie A Connected",
    brand: "Cecotec",
    price: "349€",
    rating: 4.2,
    reviewCount: 276,
    image: "/products/scooter-3.svg",
    badge: "Mejor precio",
    specs: [
      { label: "Motor", value: "300W" },
      { label: "Autonomía", value: "Hasta 25km" },
      { label: "Vel. máx", value: "25km/h homologada" },
      { label: "Extra", value: "App con bloqueo remoto" },
    ],
    pros: ["El más económico que cumple homologación", "App útil para ver velocidad y batería en tiempo real"],
    cons: ["Autonomía ajustada para trayectos largos", "Plástico de los acabados algo justo"],
    summary:
      "La entrada más barata al mundo del patinete eléctrico sin renunciar a estar dentro de la legalidad vigente.",
    affiliateUrl: "https://www.amazon.es/dp/EJEMPLO9?tag=tuid-21",
  },
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
