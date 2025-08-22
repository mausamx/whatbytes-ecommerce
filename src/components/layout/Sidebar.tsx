'use client';

import React from 'react';
import CategoryFilter from '@/components/filters/CategoryFilter';
import PriceFilter from '@/components/filters/PriceFilter';

interface SidebarProps {
  className?: string;
  selectedCategory: string;
  minPrice: number;
  maxPrice: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (min: number, max: number) => void;
  onClearFilters: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  selectedCategory,
  minPrice,
  maxPrice,
  onCategoryChange,
  onPriceChange,
  onClearFilters
}) => {
  return (
    <aside className={`p-4 sm:p-6 rounded-lg shadow-sm ${className}`} style={{ backgroundColor: '#1c00a7' }}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-white">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-xs sm:text-sm text-gray-300 hover:text-white font-medium px-2 py-1 rounded hover:bg-white hover:bg-opacity-10 transition-colors"
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-6 sm:space-y-8">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <PriceFilter 
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={onPriceChange}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
