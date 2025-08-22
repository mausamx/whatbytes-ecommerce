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
  const [showFilters, setShowFilters] = useState(true);
  
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

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          {/* Mobile Filter Toggle - Always visible on mobile */}
          <div className="lg:hidden mb-4">
            <button
              onClick={toggleFilters}
              className="w-full px-4 py-3 bg-[#12005b] text-white rounded-lg hover:bg-[#1c00a7] transition-colors duration-200 flex items-center justify-center gap-2 text-base font-medium shadow-md"
            >
              {showFilters ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Hide Filters
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                  </svg>
                  Show Filters
                </>
              )}
            </button>
          </div>

          {/* Mobile Filters - Show right below the toggle button */}
          {showFilters && (
            <div className="lg:hidden mb-6">
              <Sidebar
                selectedCategory={selectedCategory}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                onClearFilters={handleClearFilters}
              />
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            {/* Desktop Sidebar - Hidden on mobile */}
            {showFilters && (
              <div className="hidden lg:block lg:w-1/4">
                <Sidebar
                  selectedCategory={selectedCategory}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onCategoryChange={handleCategoryChange}
                  onPriceChange={handlePriceChange}
                  onClearFilters={handleClearFilters}
                />
              </div>
            )}

            {/* Product Grid - Full width on mobile, responsive on larger screens */}
            <div className={`${showFilters ? 'w-full lg:w-3/4' : 'w-full'}`}>
              <div className="mb-4 sm:mb-6">
                {/* Desktop Filter Toggle - Hidden on mobile */}
                <div className="hidden lg:flex justify-between items-center mb-6">
                  <h1 className="text-4xl font-bold" style={{ color: '#12005b' }}>
                    Product Listing
                  </h1>
                  <button
                    onClick={toggleFilters}
                    className="px-4 py-2 bg-[#12005b] text-white rounded-md hover:bg-[#1c00a7] transition-colors duration-200 flex items-center gap-2 text-sm"
                  >
                    {showFilters ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Hide Filters
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                        </svg>
                        Show Filters
                      </>
                    )}
                  </button>
                </div>

                {/* Mobile Title and Product Count */}
                <div className="lg:hidden mb-4">
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#12005b' }}>
                    Product Listing
                  </h1>
                  <h2 className="text-lg font-semibold text-gray-700">
                    {filteredProducts.length} Products
                  </h2>
                </div>
                
                {/* Filter Status Indicator */}
                {!showFilters && (selectedCategory !== 'All' || minPrice > 0 || maxPrice < 1000) && (
                  <div className="mb-4 p-3 bg-gray-50 border border-gray-200 rounded-md">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                      </svg>
                      <span className="font-medium">Active Filters:</span>
                      {selectedCategory !== 'All' && (
                        <span className="px-2 py-1 bg-[#12005b] text-white text-xs rounded-full">
                          {selectedCategory}
                        </span>
                      )}
                      {(minPrice > 0 || maxPrice < 1000) && (
                        <span className="px-2 py-1 bg-[#12005b] text-white text-xs rounded-full">
                          ${minPrice} - ${maxPrice}
                        </span>
                      )}
                      <button
                        onClick={() => {
                          handleClearFilters();
                          setShowFilters(true);
                        }}
                        className="ml-2 text-[#12005b] hover:text-[#1c00a7] underline text-xs"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                )}

                {/* Desktop Product Count and Sort */}
                <div className="hidden lg:flex justify-between items-center">
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

                {/* Mobile Sort - Full width on mobile */}
                <div className="lg:hidden mb-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c00a7] focus:border-[#1c00a7] text-base"
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
