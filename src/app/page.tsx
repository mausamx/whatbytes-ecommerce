import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center mb-4">
            WhatBytes E-commerce
          </h1>
          <p className="text-center text-gray-600">
            Coming soon - Your one-stop shop for everything you need
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
