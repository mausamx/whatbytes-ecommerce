'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-blue-500 text-white shadow-lg">
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
                <Search className="h-5 w-5 text-blue-200" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="block w-full pl-10 pr-3 py-2 border border-blue-400 rounded-md leading-5 bg-blue-600 text-white placeholder-blue-200 focus:outline-none focus:placeholder-blue-100 focus:ring-1 focus:ring-blue-300 focus:border-blue-300"
              />
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative p-2 rounded-md hover:bg-blue-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                0
              </span>
              <span className="sr-only">Cart</span>
            </Link>

            {/* Profile/Avatar */}
            <button className="p-2 rounded-md hover:bg-blue-600 transition-colors">
              <User className="h-6 w-6" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
