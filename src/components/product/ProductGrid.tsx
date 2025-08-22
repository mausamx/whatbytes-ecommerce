'use client';

import React from 'react';
import ProductCard from './ProductCard';
import FeaturedProductCard from './FeaturedProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  sortBy: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, sortBy }) => {
  const sortedProducts = React.useMemo(() => {
    const sorted = [...products];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name':
      default:
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
  }, [products, sortBy]);

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Regular Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
