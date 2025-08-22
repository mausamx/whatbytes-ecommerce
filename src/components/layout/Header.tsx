'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Header: React.FC = () => {
  const { state: cartState } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="text-white shadow-lg" style={{ backgroundColor: '#1c00a7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Logo</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-200" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 text-white placeholder-gray-200 focus:outline-none focus:placeholder-gray-100 focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                style={{ backgroundColor: '#12005b' }}
              />
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            {/* Cart Button - Updated to match target design */}
            <Link href="/cart" className="relative px-4 py-2 rounded-md transition-colors border flex items-center space-x-2" style={{ backgroundColor: '#12005b', borderColor: '#1c00a7' }}>
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="font-medium text-white">Cart</span>
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartState.itemCount > 99 ? '99+' : cartState.itemCount}
                </span>
              )}
            </Link>

            {/* Profile/Avatar */}
            <button className="p-2 rounded-md hover:bg-gray-600 transition-colors" style={{ backgroundColor: '#12005b' }}>
              <User className="h-6 w-6 text-white" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
