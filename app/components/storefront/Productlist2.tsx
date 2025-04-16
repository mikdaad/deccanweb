"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../buildercomponents/home/ProductCard";
import {  Category, Subcategory } from "@prisma/client";

// Define Product Type (Based on Prisma Model)
interface Product {
  id: string;
  name: string;
  description: string;
  originalprice: number;
  discountprice: number;
  images: string[];
  category: Category;
  isFeatured: boolean;
  stars: number;
  reviews: number;
  status: string;
  createdAt: Date;
  ispremium: boolean; // Ensure this is in your Product type
}

// Props Interface for the Component
interface ProductListProps {
  subcategory?: Subcategory;
  category?: String;
  priceRange?: { min: number; max: number };
  ispremium?: String;
}

export default function ProductList({ subcategory, category , priceRange, ispremium }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true); // Set loading true at the start of fetch

      try {
        // Build query parameters dynamically
        const params = new URLSearchParams();
        if (subcategory) {
          params.append('subcategory', subcategory);
        }
        if (category) {
          params.append('category', category as string);
        }
        if (ispremium !== undefined) { // Use the prop directly
          params.append('ispremium', ispremium as string);
        }

        // Add price range parameters if they exist
        if (priceRange) {
          params.append('minPrice', priceRange.min.toString());
          params.append('maxPrice', priceRange.max.toString());
        }
        console.log("ProductList - Props received:", { subcategory, category, priceRange, ispremium });

        // Construct the URL safely
        const apiUrl = `/api/products?${params.toString()}`;

        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          // Log the response status for debugging
          console.error(`Error fetching products: ${response.status} ${response.statusText}`);
          const errorBody = await response.text(); // Read error body if possible
          console.error("Error body:", errorBody);
          throw new Error("Failed to fetch products");
        }

        const res: Product[] = await response.json();

        // Convert Decimal fields to numbers - This seems redundant if API already does it, but safe to keep
        const formattedProducts: Product[] = res.map((product) => ({
          ...product,
          // Ensure the fields exist before trying to convert
          stars: typeof product.stars === 'object' && product.stars !== null && (product.stars as any)?.toNumber ? (product.stars as any).toNumber() : product.stars,
          discountprice: typeof product.discountprice === 'object' && product.discountprice !== null && (product.discountprice as any)?.toNumber ? (product.discountprice as any).toNumber() : product.discountprice,
          // Also format 'price' if it's Decimal and you need it as number
          originalprice: typeof product.originalprice === 'object' && product.originalprice !== null && (product.originalprice as any)?.toNumber ? (product.originalprice as any).toNumber() : product.originalprice,
        }));

        setProducts(formattedProducts); // Set all filtered products

      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Clear products on error
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    // Add priceRange and ispremium to the dependency array
  }, [subcategory, category, priceRange, ispremium]);

  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-4">

      {loading ? (
        <div className="flex justify-center items-center ml-36">
          <div className="flex flex-row gap-10 lg:gap-32 ml-20">
            <div className="animate-spin  rounded-full h-10 w-10 border-t-4 border-white border-solid"></div>
            <div className="animate-spin  rounded-full h-10 w-10 border-t-4 border-yellow-300 border-solid"></div>
            <div className="animate-spin  rounded-full h-10 w-10 border-t-4 border-white border-solid"></div>
            <div className="animate-spin  rounded-full h-10 w-10 border-t-4 border-yellow-300 border-solid"></div>
          </div>
        </div>
      ) : products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            className="w-full"
            item={{
              id: product.id,
              name: product.name,
              description: product.description,
              discountprice: product.discountprice,
              images: product.images,
              originalprice: product.originalprice,
              stars: product.stars,
            }}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}


    </div>

  );
}