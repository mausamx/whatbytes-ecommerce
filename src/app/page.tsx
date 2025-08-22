'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import ProductGrid from '@/components/product/ProductGrid';
import { products, getProductsByCategory, searchProducts, filterProductsByPrice } from '@/data/products';
import { useDebounce } from '@/hooks/useDebounce';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState('name');
  const [searchQuery, setSearchQuery] = useState('');
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== 'All') {
      filtered = getProductsByCategory(selectedCategory);
    }

    // Apply search filter
    if (debouncedSearchQuery.trim()) {
      filtered = searchProducts(debouncedSearchQuery);
    }

    // Apply price filter
    filtered = filterProductsByPrice(filtered, minPrice, maxPrice);

    return filtered;
  }, [selectedCategory, debouncedSearchQuery, minPrice, maxPrice]);

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
    setSearchQuery('');
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">
            WhatBytes E-commerce
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Your one-stop shop for everything you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  Products ({filteredProducts.length})
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
              
              <ProductGrid products={filteredProducts} sortBy={sortBy} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
