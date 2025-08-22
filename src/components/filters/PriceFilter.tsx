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

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Price</h3>
      
      {/* Price Range Sliders - Updated to match target design */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Min: ${localMin}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={localMin}
            onChange={handleMinChange}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            Max: ${localMax}
          </label>
          <input
            type="range"
            min="0"
            max="1000" 
            step="10"
            value={localMax}
            onChange={handleMaxChange}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
