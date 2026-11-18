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
    shortDesc: "Ejemplar completo con caja, cartucho y manual, de nuestro stock de importación original. Incluye certificado de autenticidad LASP.",
    longDesc: "Puzzled para NEO·GEO AES (referencia NGH-021 / NEO-AEP), completo con caja, cartucho y manual de instrucciones. Procede directamente de nuestro lote de importación original de los años 90, acompañado de nuestro certificado de autenticidad y originalidad LASP. La caja presenta un desgaste leve propio de su antigüedad, visible en las fotos.",
    stock: "1 unidad",
    price: "Consultar precio",
    images: ["img/productos/puzzled-1.jpg", "img/productos/puzzled-2.jpg"],
    specs: [
      ["Categoría", "Cartucho AES"],
      ["Referencia", "NGH-021 / NEO-AEP"],
      ["Estado", "Completo (caja, cartucho y manual)"],
      ["Procedencia", "Importación original LASP, años 90, con certificado de autenticidad"],
      ["Referencia de precio", "<a href=\"https://www.pricecharting.com/game/37896\" target=\"_blank\" rel=\"noopener\">PriceCharting – Puzzled Neo Geo AES</a>"]
    ]
  },
  {
    id: "burning-fight-aes",
    category: "cartuchos",
    categoryLabel: "Cartucho AES",
    badge: "AES CART",
    name: "Burning Fight (NGH-018) · caja y cartucho, sin manual",
    shortDesc: "Caja y cartucho de nuestro stock de importación original, con certificado de autenticidad LASP. No incluye manual, se compensa con un pin esmaltado y adhesivos NEO·GEO de regalo.",
    longDesc: "Burning Fight para NEO·GEO AES (referencia NGH-018), caja y cartucho de nuestro lote de importación original de los años 90, acompañado de nuestro certificado de autenticidad y originalidad LASP. Esta unidad no incluye el manual de instrucciones; para compensarlo, se entrega con un pin esmaltado NEO·GEO y adhesivos NEO·GEO de regalo.",
    stock: "1 unidad",
    price: "Consultar precio",
    images: ["img/productos/burning-fight-1.jpg", "img/productos/burning-fight-2.jpg"],
    specs: [
      ["Categoría", "Cartucho AES"],
      ["Referencia", "NGH-018"],
      ["Estado", "Caja y cartucho, sin manual"],
      ["Incluye de regalo", "Pin esmaltado NEO·GEO + adhesivos NEO·GEO"],
      ["Procedencia", "Importación original LASP, años 90, con certificado de autenticidad"]
    ]
  },
  {
    id: "cartucho-aes-original",
    category: "cartuchos",
    categoryLabel: "Cartucho AES",
    badge: "AES CART",
    name: "Cartucho AES · edición original",
    shortDesc: "Cartuchos de importación original. Siete títulos disponibles — ver lista completa.",
    longDesc: "Cartuchos AES de nuestro stock de importación original de los años 90. Títulos disponibles actualmente: Super Baseball 2020, Fatal Fury, Ninja Combat, Baseball Stars Professional, World Heroes y The Super Spy. Estado real de cada unidad a confirmar por título. Fotos de cada cartucho, próximamente.",
    stock: "4 unidades",
    price: "Consultar precio",
    specs: [
      ["Categoría", "Cartucho AES"],
      ["Estado", "A confirmar por título"],
      ["Procedencia", "Importación original LASP"],
      ["Referencia", "A confirmar por unidad"],
      ["Títulos disponibles", "Super Baseball 2020, Fatal Fury, Ninja Combat, Baseball Stars Professional, World Heroes, The Super Spy"]
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
    shortDesc: "Adhesivo circular con el logo NEO·GEO, en tres tamaños: 30, 10 y 6 cm de diámetro.",
    longDesc: "Adhesivo circular original con el logotipo NEO·GEO, de nuestro stock de importación. Disponible en tres tamaños — 30 cm, 10 cm y 6 cm de diámetro — para pegar donde quieras. Con cada cartucho o consola que compres, incluimos gratis un adhesivo pequeño.",
    stock: "Últimas unidades",
    price: "Desde 8 € según tamaño",
    noCert: true,
    images: ["img/productos/adhesivo-neogeo.jpg"],
    specs: [
      ["Categoría", "Merchandising / Adhesivo"],
      ["30 cm de diámetro", "30 €"],
      ["10 cm de diámetro", "15 €"],
      ["6 cm de diámetro", "8 €"],
      ["Estado", "Original, sin usar"],
      ["Procedencia", "Importación original LASP, años 90"]
    ]
  },
  {
    id: "adhesivo-neogeo-zaragoza",
    category: "accesorios",
    categoryLabel: "Merchandising",
    badge: "STICKERS",
    name: "Adhesivo NEO·GEO Video Juegos · Zaragoza",
    shortDesc: "Adhesivo circular de 10 cm de la tienda histórica NEO·GEO Video Juegos (Zaragoza), distinto del logo redondo genérico.",
    longDesc: "Adhesivo circular original de 10 cm de diámetro, de la tienda NEO·GEO Video Juegos · Advanced Entertainment Center (C/ Latassa 28, Zaragoza), de nuestro stock de importación de los años 90. Es un diseño distinto al adhesivo del logo redondo genérico que también tenemos a la venta.",
    stock: "Últimas unidades",
    price: "20 €",
    noCert: true,
    images: ["img/productos/adhesivo-neogeo-zaragoza.jpg"],
    specs: [
      ["Categoría", "Merchandising / Adhesivo"],
      ["Diámetro", "10 cm"],
      ["Precio", "20 €"],
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
    noCert: true,
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
    shortDesc: "Última unidad disponible, totalmente nueva y sin usar, del mismo lote de importación que las consolas AES.",
    longDesc: "Mando de control original para NEO·GEO AES, del mismo lote de importación que nuestras consolas. Es la última unidad que nos queda: totalmente nueva, sin usar, ideal para completar o respaldar un set de coleccionista.",
    stock: "1 unidad",
    price: "220 €",
    images: ["img/productos/mando-aes-original.jpg"],
    specs: [
      ["Categoría", "Accesorio AES"],
      ["Estado", "Nuevo, sin usar"],
      ["Precio", "220 €"],
      ["Procedencia", "Importación original LASP, años 90"],
      ["Compatibilidad", "NEO·GEO AES"],
      ["Referencia de precio", "<a href=\"https://www.pricecharting.com/game/jp-neo-geo-aes/neo-geo-aes-joystick\" target=\"_blank\" rel=\"noopener\">PriceCharting – Neo Geo AES Joystick</a>"]
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
