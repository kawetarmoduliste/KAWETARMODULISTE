const WHATSAPP_NUMBER = "212690753800";

const products = [
  {
    id: 1,
    name: "Abaya Élégance",
    category: "Abayas",
    price: 350,
    icon: "✦",
    badge: "NOUVEAU",
    desc: "Abaya moderne et élégante, idéale pour une sortie ou une occasion spéciale.",
    colors: ["Noir", "Beige", "Marron"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Abaya Perle",
    category: "Abayas",
    price: 420,
    icon: "◇",
    badge: "BEST-SELLER",
    desc: "Coupe fluide avec une finition raffinée pour un look chic.",
    colors: ["Noir", "Crème"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 3,
    name: "Pyjama Douceur",
    category: "Pyjamas",
    price: 220,
    icon: "☾",
    badge: "NOUVEAU",
    desc: "Pyjama confortable et doux, parfait pour la maison.",
    colors: ["Rose", "Beige", "Bleu"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: 4,
    name: "Pyjama Satin",
    category: "Pyjamas",
    price: 280,
    icon: "✧",
    badge: "",
    desc: "Ensemble satiné avec une coupe moderne et féminine.",
    colors: ["Noir", "Rose", "Champagne"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 5,
    name: "Caftan Royal",
    category: "Caftans",
    price: 850,
    icon: "♢",
    badge: "ÉDITION",
    desc: "Caftan marocain élégant pour vos événements et cérémonies.",
    colors: ["Vert", "Bordeaux", "Bleu"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 6,
    name: "Caftan Moderne",
    category: "Caftans",
    price: 690,
    icon: "✺",
    badge: "NOUVEAU",
    desc: "Une interprétation moderne du caftan marocain.",
    colors: ["Rose", "Noir", "Doré"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Jellaba Chic",
    category: "Jellabas",
    price: 480,
    icon: "❋",
    badge: "",
    desc: "Jellaba moderne avec une silhouette élégante et confortable.",
    colors: ["Beige", "Noir", "Bleu"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 8,
    name: "Jellaba Brodée",
    category: "Jellabas",
    price: 550,
    icon: "✿",
    badge: "BEST-SELLER",
    desc: "Jellaba inspirée du savoir-faire marocain avec détails raffinés.",
    colors: ["Crème", "Marron", "Vert"],
    sizes: ["S", "M", "L", "XL"]
  }
];

let currentFilter = "Tous";
let selectedProduct = null;
let selectedSize = "";
let selectedColor = "";

function renderProducts() {
  const box = document.getElementById("products");

  const list =
    currentFilter === "Tous"
      ? products
      : products.filter(p => p.category === currentFilter);
