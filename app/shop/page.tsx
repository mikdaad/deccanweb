'use client';
import React, { useState, useEffect } from 'react';
import { FilterCard } from '@/app/components/newcomponents/filtercard';
import HeaderNavigation from "@/app/components/newcomponents/homeheader";
import ProductList from '../components/storefront/Productlist2';
import Footer from "@/app/components/newcomponents/footer";
import { Subcategory } from '@prisma/client';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiFilter, FiX } from 'react-icons/fi'; // Using icons for buttons

export default function Shop() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // --- State for Mobile Filter Sidebar ---
    const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
    // --- End State ---

    const subcategory = searchParams.get("subcategory") || "";
    const categoryParam = searchParams.get("category") || "";
    const ispremium = searchParams.get("ispremium") || "";
    const minPriceParam = searchParams.get("minPrice") || "999";
    const maxPriceParam = searchParams.get("maxPrice") || "9999";

    // Keep existing priceRange state logic
    const [priceRange, setPriceRange] = useState({ min: parseInt(minPriceParam), max: parseInt(maxPriceParam) });

    // Keep existing filters state logic
    const [filters, setFilters] = useState({
        price: { min: parseInt(minPriceParam), max: parseInt(maxPriceParam) }, // Initialize with params
        category: subcategory,
    });

    // Effect to scroll top on load (no change)
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Effect to update URL when filters change (no change to core logic)
    useEffect(() => {
        // Update priceRange state only if it differs from filters state
        // This prevents potential loops if priceRange itself was a dependency
        if (priceRange.min !== filters.price.min || priceRange.max !== filters.price.max) {
           setPriceRange(filters.price);
        }

        const params = new URLSearchParams(window.location.search);
        params.set("minPrice", filters.price.min.toString());
        params.set("maxPrice", filters.price.max.toString());
        params.set("subcategory", filters.category);

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.replaceState({}, '', newUrl);

        // --- Close sidebar on mobile after applying filter (optional UX improvement) ---
        // We check isFilterSidebarOpen to only close if it was explicitly opened
        if (isFilterSidebarOpen) {
            // Find the element that triggered the filter change (e.g., Apply button in FilterCard)
            // If that element exists, blur it to remove focus state after sidebar closes.
             if (document.activeElement instanceof HTMLElement) {
                 document.activeElement.blur();
             }
             // Note: Closing sidebar here assumes setFilters is ONLY called on 'Apply'
             // If setFilters is called elsewhere, this might close the sidebar unexpectedly.
             //setIsFilterSidebarOpen(false); // --> Moved filter application logic below to handle this better
        }
        // --- End optional UX improvement ---

    }, [filters, priceRange.min, priceRange.max, isFilterSidebarOpen]); // Added isFilterSidebarOpen dependency only for the close logic


    // Effect to update internal state when URL params change (e.g., browser back/forward)
    useEffect(() => {
        const newMin = parseInt(searchParams.get("minPrice") || "999");
        const newMax = parseInt(searchParams.get("maxPrice") || "9999");
        const newSubcategory = searchParams.get("subcategory") || "";

        setPriceRange({ min: newMin, max: newMax });
        setFilters({ price: { min: newMin, max: newMax }, category: newSubcategory });
        // Close sidebar if URL changes externally while it's open
        // if (isFilterSidebarOpen) setIsFilterSidebarOpen(false); // Consider if this UX is desired

    }, [searchParams]); // Re-run when searchParams object changes


    // --- Function to handle filter application AND sidebar closing ---
    const applyFiltersAndCloseSidebar = (newFilters: typeof filters) => {
        setFilters(newFilters); // Update the filters state (triggers the useEffect above)
        setIsFilterSidebarOpen(false); // Close the sidebar
    };


    return (
        <>
            {/* --- Header (No Change) --- */}
            <header className="w-full shadow-md bg-transparent mb-0">
        <HeaderNavigation />
      </header>

            {/* --- Filter Trigger Button (Mobile Only) --- */}
            <div className="lg:hidden px-4 pt-4 flex justify-end sticky top-[calc(var(--header-height,60px)+1rem)] z-10"> {/* Adjust top based on actual header height */}
                 <button
                    onClick={() => setIsFilterSidebarOpen(true)}
                    className="p-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                    aria-label="Open filters"
                    aria-controls="filter-sidebar"
                    aria-expanded={isFilterSidebarOpen}
                 >
                     <FiFilter size={20} />
                 </button>
            </div>

            {/* --- Main Content Area --- */}
            <main className="flex flex-col lg:flex-row gap-x-8 mt-4 min-h-screen px-4 lg:px-8 relative"> {/* Added relative positioning context */}

                {/* --- Overlay (Mobile Only) --- */}
                {isFilterSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                        onClick={() => setIsFilterSidebarOpen(false)}
                        aria-hidden="true"
                    />
                )}

                {/* --- Filter Container (Conditionally Styled) --- */}
                {/*
                    Mobile: Fixed position, slides in/out, covers part of screen, has background
                    Desktop: Static position, specific width, normal flow
                */}
                <div
                    id="filter-sidebar" // For aria-controls
                    className={`
                        /* --- Mobile Styles (Default) --- */
                        fixed inset-y-0 left-0 z-40
                        w-72 sm:w-80 /* Mobile Width */
                        h-screen /* Full height */
                        bg-black /* Dark background for the sidebar itself */
                        shadow-xl
                        transform transition-transform duration-300 ease-in-out
                        ${isFilterSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                        overflow-y-auto /* Allow scrolling within sidebar */

                        /* --- Desktop Styles (lg:) --- */
                        lg:static lg:translate-x-0 /* Reset positioning */
                        lg:w-[305px] /* Original requested width area - adjust if needed */
                        lg:h-auto /* Auto height */
                        lg:bg-transparent /* No background needed */
                        lg:shadow-none /* No shadow */
                        lg:overflow-y-visible /* Reset overflow */
                        lg:ml-4 /* Desktop margin */
                        lg:z-auto /* Reset z-index */
                        lg:block /* Ensure it's visible */
                        flex-shrink-0 /* Prevent shrinking on desktop */
                    `}
                     aria-label="Filter options"
                 >
                    {/* --- Close Button (Mobile Only, inside sidebar) --- */}
                     <button
                        onClick={() => setIsFilterSidebarOpen(false)}
                        className="absolute top-2 right-2 p-1 text-white lg:hidden hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Close filters"
                     >
                         <FiX size={24} />
                     </button>

                     {/* --- FilterCard Component --- */}
                     {/* Pass the new handler to FilterCard IF you modify FilterCard to accept it */}
                     {/* Otherwise, FilterCard's apply button will just call setFilters, and the sidebar won't auto-close */}
                     <div className='sticky mt-4 inset-0'>
                        <FilterCard
                         // Use the original setFilters prop if you CANNOT change FilterCard:
                         setFilters={setFilters}
                         // OR use the new handler IF you CAN change FilterCard slightly:
                         // setFilters={applyFiltersAndCloseSidebar}
                         initialCategory={filters.category} // Pass current filter state
                         priceRange={priceRange} // Pass current price range state
                     />
                     </div>
                 </div>

                {/* --- Product List Section (Adjust margin potentially) --- */}
                {/* Added margin-top for mobile when filter button is present */}
                <section className="flex-1 mt-8 lg:mt-10 space-y-12">
                    <ProductList
                        subcategory={filters.category as Subcategory} // Use filters state
                        category={categoryParam}
                        ispremium={ispremium}
                        priceRange={filters.price} // Use filters state
                    />
                </section>
            </main>

            {/* --- Footer (No Change) --- */}
            <Footer />
        </>
    );
}