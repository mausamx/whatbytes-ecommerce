'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface SimpleHeaderProps {
  title?: string;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title = "WhatBytes Store" }) => {
  const { state: cartState } = useCart();

  return (
    <header className="text-white shadow-lg" style={{ backgroundColor: '#1c00a7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Logo</span>
          </Link>

          {/* Title */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="text-center">
              <span className="text-lg font-medium">{title}</span>
            </div>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon with Badge */}
            <Link href="/cart" className="relative p-2 rounded-md hover:bg-gray-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartState.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartState.itemCount > 99 ? '99+' : cartState.itemCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>

            {/* Profile/Avatar */}
            <button className="p-2 rounded-md hover:bg-gray-600 transition-colors">
              <User className="h-6 w-6" />
              <span className="sr-only">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;
