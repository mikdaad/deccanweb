'use client';
import React, { useState, useEffect } from 'react';
import { FilterCard } from '@/app/components/newcomponents/filtercard';
import HeaderNavigation from "@/app/components/newcomponents/homeheader";
import ProductList from '../components/storefront/Productlist2';
import Footer from "@/app/components/newcomponents/footer";
import { Subcategory } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Shop() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const subcategory = searchParams.get("subcategory") || "";
  const categoryParam = searchParams.get("category") || "";
  const ispremium = searchParams.get("ispremium") || "";
  const minPriceParam = searchParams.get("minPrice") || "999";
  const maxPriceParam = searchParams.get("maxPrice") || "9999";

  const [priceRange, setPriceRange] = useState({ min: parseInt(minPriceParam), max: parseInt(maxPriceParam) });

  const [filters, setFilters] = useState({
    price: priceRange,
    category: subcategory,
  });
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  

  // 🔁 Whenever filters change, update priceRange and URL
  useEffect(() => {
    setPriceRange(filters.price);

    const params = new URLSearchParams(window.location.search);

    // Update URL parameters
    params.set("minPrice", filters.price.min.toString());
    params.set("maxPrice", filters.price.max.toString());
    params.set("subcategory", filters.category);

    // Push new URL (without reloading the page)
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [filters]);

  return (
    <>
      <header className="w-full shadow-md bg-transparent mb-0">
        <HeaderNavigation />
      </header>

      <main className="flex flex-col lg:flex-row gap-8 mt-4 min-h-screen">
        <div className="w-[412px] ml-4">
          <FilterCard setFilters={setFilters} initialCategory={subcategory} priceRange={priceRange}/>
        </div>
        <section className="flex-1 mt-10 lg:mt-0 space-y-12">
          <ProductList
            subcategory={subcategory as Subcategory}
            category={categoryParam}
            ispremium={ispremium}
            priceRange={priceRange}
            
          />
        </section>
      </main>

      <Footer />
    </>
  );
}
