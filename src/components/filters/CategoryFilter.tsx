'use client';

import React from 'react';
import { categories } from '@/data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-white">Category</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === category}
              onChange={() => onCategoryChange(category)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-sm text-white">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
