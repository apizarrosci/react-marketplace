import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Mechanical Keyboard Pro RGB",
    price: 320000,
    description: "Mechanical gaming keyboard with customizable RGB lighting.",
    category: "Technology",
    images: ["/src/assets/images/products/keyboard.jpg"],
    stock: 18,
    rating: 4.8,
    reviews: 214,
    specifications: {
      color: "Black",
      weight: "950 g",
      material: "Aluminum + ABS",
      warranty: "24 months"
    }
  },
  {
    id: 2,
    name: "Gaming Mouse X7",
    price: 180000,
    description: "High precision wireless gaming mouse.",
    category: "Technology",
    images: ["/src/assets/images/products/mouse.jpg"],
    stock: 26,
    rating: 4.7,
    reviews: 187,
    specifications: {
      color: "Black",
      weight: "85 g",
      material: "ABS",
      warranty: "24 months"
    }
  },
  {
    id: 3,
    name: "UltraWide Monitor 27\"",
    price: 1250000,
    description: "27-inch IPS monitor with 144 Hz refresh rate.",
    category: "Technology",
    images: ["/src/assets/images/products/monitor.jpg"],
    stock: 9,
    rating: 4.9,
    reviews: 96,
    specifications: {
      color: "Black",
      weight: "5.8 kg",
      material: "Aluminum + Plastic",
      warranty: "36 months"
    }
  },
  {
    id: 4,
    name: "Wireless Headphones Elite",
    price: 420000,
    description: "Noise cancelling wireless headphones.",
    category: "Audio",
    images: ["/src/assets/images/products/headphones.jpg"],
    stock: 14,
    rating: 4.8,
    reviews: 321,
    specifications: {
      color: "White",
      weight: "260 g",
      material: "Plastic + Leather",
      warranty: "24 months"
    }
  },
  {
    id: 5,
    name: "Bluetooth Speaker Mini",
    price: 280000,
    description: "Portable Bluetooth speaker with deep bass.",
    category: "Audio",
    images: ["/src/assets/images/products/speaker.jpg"],
    stock: 32,
    rating: 4.6,
    reviews: 151,
    specifications: {
      color: "Blue",
      weight: "700 g",
      material: "Plastic",
      warranty: "12 months"
    }
  },
  {
    id: 6,
    name: "USB-C Hub 7 in 1",
    price: 210000,
    description: "Multiport USB-C hub with HDMI and Ethernet.",
    category: "Accessories",
    images: ["/src/assets/images/products/hub.jpg"],
    stock: 24,
    rating: 4.5,
    reviews: 98,
    specifications: {
      color: "Gray",
      weight: "120 g",
      material: "Aluminum",
      warranty: "12 months"
    }
  },
  {
    id: 7,
    name: "Aluminum Laptop Stand",
    price: 150000,
    description: "Ergonomic laptop stand made of aluminum.",
    category: "Accessories",
    images: ["/src/assets/images/products/stand.jpg"],
    stock: 30,
    rating: 4.7,
    reviews: 112,
    specifications: {
      color: "Silver",
      weight: "780 g",
      material: "Aluminum",
      warranty: "12 months"
    }
  },
  {
    id: 8,
    name: "Smart LED Lamp",
    price: 195000,
    description: "Smart Wi-Fi lamp compatible with voice assistants.",
    category: "Home",
    images: ["/src/assets/images/products/lamp.jpg"],
    stock: 16,
    rating: 4.6,
    reviews: 75,
    specifications: {
      color: "White",
      weight: "600 g",
      material: "Plastic",
      warranty: "24 months"
    }
  },
  {
    id: 9,
    name: "Coffee Maker Deluxe",
    price: 390000,
    description: "Programmable coffee maker with thermal carafe.",
    category: "Home",
    images: ["/src/assets/images/products/coffee-maker.jpg"],
    stock: 11,
    rating: 4.5,
    reviews: 67,
    specifications: {
      color: "Black",
      weight: "3.2 kg",
      material: "Stainless Steel",
      warranty: "24 months"
    }
  },
  {
    id: 10,
    name: "Premium Hoodie",
    price: 170000,
    description: "Premium cotton hoodie with modern fit.",
    category: "Clothing",
    images: ["/src/assets/images/products/hoodie.jpg"],
    stock: 42,
    rating: 4.7,
    reviews: 134,
    specifications: {
      color: "Gray",
      weight: "650 g",
      material: "100% Cotton",
      warranty: "30 days"
    }
  },
  {
    id: 11,
    name: "Urban Sneakers",
    price: 420000,
    description: "Comfortable sneakers for everyday use.",
    category: "Clothing",
    images: ["/src/assets/images/products/sneakers.jpg"],
    stock: 21,
    rating: 4.8,
    reviews: 243,
    specifications: {
      color: "White",
      weight: "900 g",
      material: "Leather",
      warranty: "6 months"
    }
  },
  {
    id: 12,
    name: "Smart Watch Fit Pro",
    price: 850000,
    description: "Smartwatch with GPS and health monitoring.",
    category: "Wearables",
    images: ["/src/assets/images/products/watch.jpg"],
    stock: 13,
    rating: 4.9,
    reviews: 289,
    specifications: {
      color: "Black",
      weight: "48 g",
      material: "Aluminum",
      warranty: "24 months"
    }
  }
];