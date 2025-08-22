'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface FeaturedProductCardProps {
  product: Product;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
  const { addToCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4" style={{ fill: '#12005b', color: '#12005b' }} />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4" style={{ fill: '#12005b', color: '#12005b' }} />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 h-full">
      <div className="flex h-full">
        {/* Product Image - Left side taking up about 60% */}
        <div className="relative w-3/5 bg-gray-100 rounded-l-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>

        {/* Product Info - Right side taking up about 40% */}
        <div className="w-2/5 p-6 flex flex-col justify-between">
          <div>
            <Link href={`/product/${product.id}`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
                {product.title}
              </h3>
            </Link>
            
            <div className="text-2xl font-bold text-gray-900 mb-4">
              ${product.price}
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {product.description}
            </p>

            <div className="mb-4">
              <span className="text-sm text-gray-500">Category</span>
              <br />
              <span className="text-base font-medium text-gray-900">{product.category}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
              product.inStock
                ? 'text-white focus:outline-none focus:ring-2 focus:ring-offset-2'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={product.inStock ? { backgroundColor: '#12005b' } : {}}
          >
            {quantity > 0 ? `Add to Cart (${quantity})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
