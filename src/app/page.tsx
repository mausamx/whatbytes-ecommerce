'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import ProductGrid from '@/components/product/ProductGrid';
import { products, getProductsByCategory, filterProductsByPrice } from '@/data/products';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('name');
  
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Apply price filter
    filtered = filterProductsByPrice(filtered, minPrice, maxPrice);

    return filtered;
  }, [selectedCategory, minPrice, maxPrice]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setMinPrice(0);
    setMaxPrice(1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Sidebar
                selectedCategory={selectedCategory}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-6" style={{ color: '#12005b' }}>
                  Product Listing
                </h1>
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    Products ({filteredProducts.length})
                  </h2>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c00a7] focus:border-[#1c00a7]"
                  >
                    <option value="name">Sort by Name</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
              
              <ProductGrid products={filteredProducts} sortBy={sortBy} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
