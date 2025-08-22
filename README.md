# WhatBytes E-commerce

A modern, full-featured e-commerce application built with Next.js, React, and TypeScript, showcasing best practices in React development and state management.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse products with detailed information, ratings, and reviews
- **Advanced Filtering**: Filter by category, price range, and search functionality
- **Shopping Cart**: Add, remove, and manage items with persistent localStorage
- **Product Details**: Individual product pages with image galleries and specifications
- **Responsive Design**: Fully responsive UI that works on all devices

### Technical Features
- **React Context API**: Global state management for cart functionality
- **Debounced Search**: Optimized search performance with useDebounce hook
- **Dynamic Routing**: Next.js 13+ app router with dynamic product pages
- **Image Optimization**: Next.js Image component for optimized loading
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional design with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State Management**: React Context API + useReducer
- **Data Persistence**: localStorage
- **Image Handling**: Next.js Image optimization

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/whatbytes-ecommerce.git
   cd whatbytes-ecommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── cart/              # Shopping cart page
│   ├── product/[id]/      # Dynamic product detail pages
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page with product listing
├── components/            # Reusable React components
│   ├── filters/           # Filter components (Category, Price)
│   ├── layout/            # Layout components (Header, Footer, Sidebar)
│   └── product/           # Product-related components
├── context/               # React Context providers
│   └── CartContext.tsx    # Shopping cart state management
├── data/                  # Static data and type definitions
│   └── products.ts        # Product data and utility functions
└── hooks/                 # Custom React hooks
    └── useDebounce.ts     # Debounced search hook
```

## 🎯 Key Features Implemented

### 1. Product Management
- **Product Grid**: Responsive grid layout with product cards
- **Product Details**: Individual product pages with full specifications
- **Image Optimization**: Lazy loading and responsive images
- **Rating System**: Star ratings with visual feedback

### 2. Search & Filtering
- **Real-time Search**: Debounced search across product titles, descriptions, and tags
- **Category Filters**: Radio button selection for product categories
- **Price Range**: Dual slider and input controls for price filtering
- **Sort Options**: Sort by name, price (ascending/descending), and rating

### 3. Shopping Cart
- **Add to Cart**: Add products from listing and detail pages
- **Quantity Management**: Increment/decrement quantities in cart
- **Remove Items**: Individual item removal with confirmation
- **Cart Persistence**: localStorage integration for session persistence
- **Order Summary**: Subtotal, tax, and total calculations

### 4. User Experience
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Loading States**: Skeleton screens and loading indicators
- **Empty States**: Thoughtful empty cart and no results states
- **Navigation**: Breadcrumbs and intuitive navigation patterns

## 🔧 Development Commits

This project was built with feature-based commits to demonstrate proper Git workflow:

1. **Initial Setup**: Next.js project setup with TypeScript and Tailwind CSS
2. **Layout Components**: Header, Footer, and navigation components
3. **Product Data**: Product catalog and data structure
4. **Filter System**: Category and price filtering functionality
5. **Product Listing**: Grid layout with integrated filtering
6. **Product Details**: Individual product detail pages
7. **Cart System**: Context-based cart state management
8. **Cart Page**: Complete shopping cart interface

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Debounced Search**: Prevents excessive API calls during typing
- **Memoization**: useMemo and useCallback for expensive operations
- **Component Lazy Loading**: Optimized bundle splitting
- **localStorage Caching**: Persistent cart state across sessions

## 🎨 Design System

- **Color Palette**: Professional blue and gray color scheme
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Components**: Reusable component library with consistent styling
- **Icons**: Lucide React icons for consistent iconography

## 📝 Code Quality

- **TypeScript**: Strict typing for better developer experience
- **Component Architecture**: Modular, reusable component design
- **Custom Hooks**: Extracted business logic into reusable hooks
- **Error Handling**: Proper error boundaries and fallback states
- **Accessibility**: ARIA labels and keyboard navigation support

## 🔮 Future Enhancements

- **User Authentication**: Login/logout and user profiles
- **Payment Integration**: Stripe or PayPal integration
- **Order History**: Purchase history and order tracking
- **Product Reviews**: User-generated reviews and ratings
- **Wishlist**: Save products for later functionality
- **Admin Panel**: Product management and inventory control

## 📄 License

This project is built as a demonstration of modern React/Next.js development practices.

## 🤝 Contributing

This is a demonstration project, but feedback and suggestions are welcome!

---

Built with ❤️ using Next.js, React, and TypeScript
