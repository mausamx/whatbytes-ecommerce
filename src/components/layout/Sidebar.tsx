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
    <aside className={`bg-blue-500 p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Filters</h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-blue-200 hover:text-white font-medium"
        >
          Clear All
        </button>
      </div>
      
      <div className="space-y-8">
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
