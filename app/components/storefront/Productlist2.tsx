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
}

// Props Interface for the Component
interface ProductListProps {
  subcategory?: Subcategory;
  category?: Category;
}

export default function ProductList({ subcategory, category }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Build query parameters dynamically
        const params = new URLSearchParams({
          ...(subcategory && { subcategory }),
          ...(category && { category }),
   
        });

        const response = await fetch(`/api/products?${params.toString()}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const res: Product[] = await response.json();

        // Convert Decimal fields to numbers if necessary
        const formattedProducts: Product[] = res.map((product) => ({
          ...product,
          stars: (product.stars as any)?.toNumber ? (product.stars as any).toNumber() : product.stars, 
          discountprice: (product.discountprice as any)?.toNumber ? (product.discountprice as any).toNumber() : product.discountprice,
        }));
        const lastFourProducts = formattedProducts.slice(-4);

        setProducts(lastFourProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [subcategory, category]);

  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-x-4">
      
      {loading ? (
        <div className="flex justify-center items-center ml-36">
          <div className="flex flex-row gap-10 lg:gap-32 ml-10">
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
              status: product.status,
        
            }}
          />
        ))
      ) : (
        <p>No products found.</p>
      )}
      
    
       
    </div>
   
  );
}
