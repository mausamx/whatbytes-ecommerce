export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  brand: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  "All",
  "Electronics",
  "Clothing", 
  "Home",
  "Sports",
  "Books",
  "Beauty"
];

export const brands = [
  "Apple",
  "Samsung", 
  "Nike",
  "Adidas",
  "Sony",
  "LG",
  "Canon",
  "Dell",
  "HP",
  "Levi's",
  "H&M",
  "IKEA"
];

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    description: "Comfortable running shoes with excellent cushioning and support for daily training and long runs.",
    category: "Sports",
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 128,
    inStock: true,
    tags: ["sports", "running", "footwear"]
  },
  {
    id: "2", 
    title: "Wireless Headphones",
    price: 149,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    tags: ["electronics", "audio", "wireless"]
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    description: "Durable and spacious backpack perfect for travel, work, and outdoor adventures.",
    category: "Sports",
    brand: "Adidas",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    rating: 4.3,
    reviews: 67,
    inStock: true,
    tags: ["sports", "travel", "bag"]
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    description: "Advanced smartwatch with fitness tracking, heart rate monitor, and GPS functionality.",
    category: "Electronics",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    tags: ["electronics", "wearable", "fitness"]
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    description: "Stylish polarized sunglasses with UV protection and durable frame construction.",
    category: "Clothing",
    brand: "Ray-Ban",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    rating: 4.4,
    reviews: 92,
    inStock: true,
    tags: ["clothing", "accessories", "eyewear"]
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    description: "Professional digital camera with 24MP sensor and 4K video recording capabilities.",
    category: "Electronics",
    brand: "Canon",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop",
    rating: 4.6,
    reviews: 78,
    inStock: true,
    tags: ["electronics", "photography", "camera"]
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    description: "Comfortable cotton t-shirt with classic fit and premium fabric quality.",
    category: "Clothing", 
    brand: "H&M",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    rating: 4.2,
    reviews: 234,
    inStock: true,
    tags: ["clothing", "casual", "cotton"]
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    description: "Latest smartphone with advanced camera system, fast processor, and all-day battery life.",
    category: "Electronics",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    rating: 4.5,
    reviews: 445,
    inStock: true,
    tags: ["electronics", "mobile", "communication"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterProductsByPrice = (products: Product[], minPrice: number, maxPrice: number): Product[] => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};
