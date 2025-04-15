'use client';
import React, { useState } from "react";
import { FilterCategory } from "./filtercategory";
import { CustomButton } from "./custombutton";
import SliderComponent from "./moneyslider";

interface FilterCardProps {
  setFilters: React.Dispatch<React.SetStateAction<{
    price: { min: number; max: number };
    category: string;
  }>>;
  initialCategory: string; 
  priceRange?: { min: number; max: number };
}

export const FilterCard: React.FC<FilterCardProps> = ({ setFilters , initialCategory , priceRange }) => {
  const [childData, setChildData] = useState<number>(9999);
  const [selectedCategory, setSelectedCategory] =  useState<string>(initialCategory);

  const handleChildData = (dataFromChild: number) => {
    setChildData(dataFromChild);
  };

  const handleToggleCategory = (category: string) => {
    setSelectedCategory(category);
  };

 

  // In filtercard.tsx
    const handleApply = () => {
        setFilters({
          price: { min: priceRange?.min ?? 999, max: childData },
          category: selectedCategory,
        });
      };

  return (
    <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30 rounded-xl m-0 max-w-[305px] text-base font-light font-['Blauer_Nue']">
      <div className="shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] inset-1 bg-black w-full overflow-hidden pt-[50px] pb-[29px] px-4 rounded-lg border-solid" aria-label="Price filter card">
        <div className="absolute w-[512px] h-[512px] left-[-6px] top-[128px] opacity-15 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#F9BF00_0%,_rgba(252,_232,_3,_0)_100%)] blur-3xl -z-10"></div>

        <div className="flex items-stretch gap-5 justify-between">
          <div className="flex flex-col items-stretch">
            <h2 className="text-xl font-semibold m-2">Filter by Price</h2>
            <SliderComponent valb={childData} onDataUpdate={handleChildData} minm={999} />
          </div>
        </div>

        <div className="whitespace-nowrap my-4">
          <CustomButton onClick={handleApply}>Apply</CustomButton>
        </div>

        <FilterCategory
          name="Premium Sofa"
          subcategories={["leathersofa", "lshapesofa", "roundshapesofa"]}
          onToggle={handleToggleCategory}
          selectedCategory={selectedCategory}
        />
        <FilterCategory
          name="Premium Chairs"
          subcategories={["diningchairs", "officechairs", "loungechairs"]}
          onToggle={handleToggleCategory}
          selectedCategory={selectedCategory}
        />
        <FilterCategory
          name="Home Decor Items"
          subcategories={["wallart", "vases", "lighting", "mirrors"]}
          onToggle={handleToggleCategory}
          selectedCategory={selectedCategory}
        />
        <FilterCategory
          name="Designed Carpet"
          subcategories={["persiancarpet", "moderncarpet", "shagcarpet"]}
          onToggle={handleToggleCategory}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};
