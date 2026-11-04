// Fuente única de productos: usada tanto por el catálogo (index.html)
// como por la ficha de producto (producto.html).
//
// Orden: cartuchos primero, luego NEO·GEO CD, luego el resto (consolas,
// placas y accesorios) — dentro de accesorios, adhesivos y pines antes
// que el mando. Los productos agotados (sold: true) van al final y no
// se muestran en el listado del catálogo (ver js/main.js).
const PRODUCTS = [
  {
    id: "puzzled-aes",
    category: "cartuchos",
    categoryLabel: "Cartucho AES",
    badge: "AES CART",
    name: "Puzzled (NGH-021) · completo con caja y manual",
    shortDesc: "Ejemplar completo con caja, cartucho y manual, de nuestro stock de importación original. Pegatina LASP de la época en el lomo.",
    longDesc: "Puzzled para NEO·GEO AES (referencia NGH-021 / NEO-AEP), completo con caja, cartucho y manual de instrucciones. Procede directamente de nuestro lote de importación original de los años 90 — conserva la pegatina LASP de la época en el lomo, como el resto del material distribuido entonces. La caja presenta un desgaste leve propio de su antigüedad, visible en las fotos.",
    stock: "1 unidad",
    price: "1.800 – 2.000 € orientativo",
    images: ["img/productos/puzzled-1.jpg", "img/productos/puzzled-2.jpg"],
    specs: [
      ["Categoría", "Cartucho AES"],
      ["Referencia", "NGH-021 / NEO-AEP"],
      ["Estado", "Completo (caja, cartucho y manual)"],
      ["Procedencia", "Importación original LASP, con pegatina de época"],
      ["Valoración", "Orientativa según mercado de coleccionismo; precio final a confirmar según estado exacto"]
    ]
  },
  {
    id: "cartucho-aes-original",
    category: "cartuchos",
    categoryLabel: "Cartucho AES",
    badge: "AES CART",
    name: "Cartucho AES · edición original",
    shortDesc: "Cartuchos de importación original. Siete títulos disponibles — ver lista completa.",
    longDesc: "Cartuchos AES de nuestro stock de importación original de los años 90. Títulos disponibles actualmente: Super Baseball 2020, Burning Fight, Fatal Fury, Ninja Combat, Baseball Stars Professional, World Heroes y The Super Spy. Estado real de cada unidad a confirmar por título. Fotos de cada cartucho, próximamente.",
    stock: "5 unidades",
    price: "Consultar precio",
    specs: [
      ["Categoría", "Cartucho AES"],
      ["Estado", "A confirmar por título"],
      ["Procedencia", "Importación original LASP"],
      ["Referencia", "A confirmar por unidad"],
      ["Títulos disponibles", "Super Baseball 2020, Burning Fight, Fatal Fury, Ninja Combat, Baseball Stars Professional, World Heroes, The Super Spy"]
    ]
  },
  {
    id: "cartucho-mvs-profesional",
    category: "cartuchos",
    categoryLabel: "Cartucho MVS",
    badge: "MVS CART",
    name: "Cartucho MVS · uso profesional",
    shortDesc: "Cartucho arcade de la distribución original a salas recreativas españolas.",
    longDesc: "Cartucho MVS de uso profesional, procedente de la misma distribución original a salones recreativos que el resto de nuestro lote de importación. Estado y referencia exacta confirmados por unidad.",
    stock: "2 unidades",
    price: "Consultar precio",
    specs: [
      ["Categoría", "Cartucho MVS"],
      ["Estado", "Uso profesional, revisado"],
      ["Procedencia", "Distribución original a salas arcade en España"],
      ["Referencia", "A confirmar por unidad"]
    ]
  },
  {
    id: "titulos-neogeo-cd",
    category: "cd",
    categoryLabel: "Título NEO·GEO CD",
    badge: "CD GAMES",
    name: "Títulos NEO·GEO CD · edición original",
    shortDesc: "Amplia selección de juegos originales en formato CD, de nuestro stock de importación.",
    longDesc: "Buena disponibilidad de títulos originales para NEO·GEO CD, procedentes de nuestro lote de importación de los años 90. Referencias y estado exacto de cada título se confirman por unidad al hacer la consulta.",
    stock: "Amplia disponibilidad",
    price: "Consultar precio",
    specs: [
      ["Categoría", "Título NEO·GEO CD"],
      ["Estado", "Original, se confirma por unidad"],
      ["Procedencia", "Importación original LASP, años 90"],
      ["Referencia", "A confirmar por título"]
    ]
  },
  {
    id: "placa-arcade-mvs-2slot",
    category: "mvs",
    categoryLabel: "Placa MVS",
    badge: "MVS",
    name: "Placa arcade MVS 2-Slot",
    shortDesc: "Placa profesional de salón recreativo, procedente de distribución original a sala arcade.",
    longDesc: "Placa arcade MVS de 2 ranuras, de uso profesional, distribuida originalmente a salas recreativas españolas durante nuestra etapa como importador. Pieza de gran valor para coleccionistas por su rareza y su historial de uso comercial documentado.",
    stock: "1 unidad",
    price: "Consultar precio",
    specs: [
      ["Categoría", "Placa arcade MVS"],
      ["Formato", "2-Slot"],
      ["Estado", "Uso profesional, revisada"],
      ["Procedencia", "Distribución original a salas arcade en España"]
    ]
  },
  {
    id: "adhesivos-neogeo",
    category: "accesorios",
    categoryLabel: "Merchandising",
    badge: "STICKERS",
    name: "Adhesivo NEO·GEO · logo redondo",
    shortDesc: "Adhesivo circular con el logo NEO·GEO, en tres tamaños: 30, 10 y 8 cm de diámetro.",
    longDesc: "Adhesivo circular original con el logotipo NEO·GEO, de nuestro stock de importación. Disponible en tres tamaños — 30 cm, 10 cm y 8 cm de diámetro — para pegar donde quieras. Con cada cartucho o consola que compres, incluimos gratis un adhesivo pequeño.",
    stock: "Últimas unidades",
    price: "Desde 8 € según tamaño",
    images: ["img/productos/adhesivo-neogeo.jpg"],
    specs: [
      ["Categoría", "Merchandising / Adhesivo"],
      ["30 cm de diámetro", "30 €"],
      ["10 cm de diámetro", "15 €"],
      ["8 cm de diámetro", "8 €"],
      ["Estado", "Original, sin usar"],
      ["Procedencia", "Importación original LASP, años 90"]
    ]
  },
  {
    id: "pin-neogeo",
    category: "accesorios",
    categoryLabel: "Merchandising",
    badge: "PIN",
    name: "Pin NEO·GEO esmaltado",
    shortDesc: "Pin metálico esmaltado con el logo NEO·GEO, embolsado individualmente.",
    longDesc: "Pin metálico esmaltado con el logotipo NEO·GEO, de nuestro stock de importación original. Se entrega embolsado individualmente. Con cada cartucho o consola que compres, incluimos gratis uno de estos pines.",
    stock: "Últimas unidades",
    price: "60 €",
    images: ["img/productos/pin-neogeo-closeup.jpg", "img/productos/pines-neogeo-set.jpg"],
    specs: [
      ["Categoría", "Merchandising / Pin esmaltado"],
      ["Precio", "60 €"],
      ["Presentación", "Embolsado individualmente"],
      ["Estado", "Original, sin usar"],
      ["Procedencia", "Importación original LASP, años 90"]
    ]
  },
  {
    id: "mando-aes-original",
    category: "accesorios",
    categoryLabel: "Accesorio AES",
    badge: "CTRL",
    name: "Mando AES original",
    shortDesc: "Mando de control precintado, mismo lote de importación que las consolas AES.",
    longDesc: "Mando de control original para NEO·GEO AES, del mismo lote de importación que nuestras consolas. Se conserva precintado, ideal para completar o respaldar un set de coleccionista.",
    stock: "0 unidades",
    price: "No disponible",
    sold: true,
    specs: [
      ["Categoría", "Accesorio AES"],
      ["Estado", "Precintado"],
      ["Procedencia", "Importación original LASP, años 90"],
      ["Compatibilidad", "NEO·GEO AES"]
    ]
  },
  {
    id: "consola-neogeo-aes",
    category: "aes",
    categoryLabel: "Consola AES",
    badge: "AES",
    name: "Consola NEO·GEO AES",
    shortDesc: "Unidad de importación original, precintada de fábrica. Incluye mando y cableado de época.",
    longDesc: "Consola NEO·GEO AES procedente directamente de nuestro lote de importación original de los años 90. Se conservaba precintada de fábrica, sin abrir ni usar, junto con su mando y cableado de época correspondientes.",
    stock: "0 unidades",
    price: "No disponible",
    sold: true,
    specs: [
      ["Categoría", "Consola AES"],
      ["Estado", "Precintada de fábrica"],
      ["Procedencia", "Importación original LASP, años 90"],
      ["Incluye", "Mando y cableado de época"]
    ]
  },
  {
    id: "consola-neogeo-cd",
    category: "cd",
    categoryLabel: "Consola NEO·GEO CD",
    badge: "CD",
    name: "Consola NEO·GEO CD",
    shortDesc: "Unidad de importación original del sistema NEO·GEO CD, de nuestro lote de los años 90.",
    longDesc: "Consola NEO·GEO CD procedente de nuestro lote de importación original. Al igual que el resto de consolas de aquella etapa, ya no quedan unidades disponibles: fue de los sistemas más demandados por los coleccionistas.",
    stock: "0 unidades",
    price: "No disponible",
    sold: true,
    specs: [
      ["Categoría", "Consola NEO·GEO CD"],
      ["Estado", "Importación original, revisada"],
      ["Procedencia", "Importación original LASP, años 90"],
      ["Incluye", "Mando y cableado de época"]
    ]
  }
];
