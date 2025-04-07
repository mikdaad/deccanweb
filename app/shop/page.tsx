'use client';
import React, { useState } from 'react';
import { FilterCard } from '@/app/components/newcomponents/filtercard';
import HeaderNavigation from "@/app/components/newcomponents/homeheader";
import ProductList from '../components/storefront/Productlist2';
import Footer from "@/app/components/newcomponents/footer";
import { Subcategory } from '@prisma/client';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>("leathersofa");

  const [filters, setFilters] = useState({
    price: { min: 999, max: 9999 },
    category: selectedCategory,
  });

  return (
    <>
      {/* Header */}
      <header className="w-full shadow-md bg-transparent mb-0">
        <HeaderNavigation />
      </header>

      {/* Main Layout */}
      <main className="flex flex-col lg:flex-row gap-8    min-h-screen">
        {/* Filter Sidebar */}
        <div className="w-[412px] ml-4">
          <FilterCard setFilters={setFilters} />
        </div>
        {/* Product List */}
        <section className="flex-1 mt-10 lg:mt-0 space-y-12">
          <ProductList subcategory={filters.category as Subcategory} priceRange={filters.price}   />
          <ProductList subcategory={filters.category as Subcategory} priceRange={filters.price}   />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
