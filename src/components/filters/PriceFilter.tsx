'use client';

import React, { useState } from 'react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ 
  minPrice, 
  maxPrice, 
  onPriceChange 
}) => {
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalMin(value);
    if (value <= localMax) {
      onPriceChange(value, localMax);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setLocalMax(value);
    if (value >= localMin) {
      onPriceChange(localMin, value);
    }
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setLocalMin(value);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1000;
    setLocalMax(value);
  };

  const handleInputBlur = () => {
    if (localMin <= localMax) {
      onPriceChange(localMin, localMax);
    } else {
      // Reset to current filter values if invalid
      setLocalMin(minPrice);
      setLocalMax(maxPrice);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Price</h3>
      
      {/* Price Range Sliders */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Min: ${localMin}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={localMin}
            onChange={handleMinChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Max: ${localMax}
          </label>
          <input
            type="range"
            min="0"
            max="1000" 
            step="10"
            value={localMax}
            onChange={handleMaxChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Price Input Fields */}
      <div className="flex space-x-2">
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="1000"
            value={localMin}
            onChange={handleMinInputChange}
            onBlur={handleInputBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Min"
          />
        </div>
        <span className="flex items-center text-white">-</span>
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="1000"
            value={localMax}
            onChange={handleMaxInputChange}
            onBlur={handleInputBlur}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Max"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
