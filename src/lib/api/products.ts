import { Product } from "@/types";

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Produit Premium 1",
    price: 99.99,
    description: "Description du produit premium",
    image: "/images/product1.jpg",
    category: "premium",
    inStock: true,
  },
  {
    id: "2",
    name: "Produit Premium 2",
    price: 149.99,
    description: "Description du produit premium 2",
    image: "/images/product2.jpg",
    category: "premium",
    inStock: true,
  },
];

export async function getProducts(): Promise<Product[]> {
  // Simule un délai d'API
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts;
}

export async function getProduct(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockProducts.find((product) => product.id === id) || null;
}
