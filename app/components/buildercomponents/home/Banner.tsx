"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowEffect } from "../../ui/Gloweffect";
import Image from "next/image";

type Banner = {
  id: string;
  title: string;
  imageString: string;
  description: string;
  subtext: string;
};

export function Banner() {
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: "1",
      title: "Spring Sale",
      imageString:"/banner/b1.png",
      description: "Get up to 50% off on all items this spring!",
      subtext: "Limited time offer, grab your favorite products now!",
    },
    {
      id: "2",
      title: "New Arrivals",
      imageString: "/banner/b2.png",
      description: "Check out our latest collection of fashion wear.",
      subtext: "Stay trendy with our newest additions.",
    },
    {
      id: "3",
      title: "Tech Gadgets",
      imageString: "/banner/b3.png",
      description: "Explore the latest gadgets and innovations.",
      subtext: "Upgrade your lifestyle with cutting-edge technology.",
    },
    {
      id: "4",
      title: "Tech Gadgets",
      imageString: "/banner/b4.png",
      description: "Explore the latest gadgets and innovations.",
      subtext: "Upgrade your lifestyle with cutting-edge technology.",
    },
  ]);

  {/*const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchBanners() {
      try {
        const response =  await fetch("/api/topbannner", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data: Banner[] = await response.json();
        setBanners(data);
      } catch (error) {
        console.error("Failed to fetch banners:", error);
      }
    }

    fetchBanners();
  }, []);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [banners]);

  if (banners.length === 0) {
    return <div className="text-center text-gray-500"></div>;
  }
  */}
    
      

  return (
    <div className="grid grid-cols-2 gap-4 p-4 ml-[7%] my-5">
    {banners.map((banner) => (

<div  key={banner.id} className=" relative bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[0.9px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-[24px]  max-w-[589px] min-h-[282px]  text-base font-light space-y-10">



<div key={banner.id} style={{
          backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 99.15%), url('${banner.imageString}')`,
        }} className="  bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-[24px]  m-0  max-w-[587px] min-h-[280px] text-base font-light ">
    <div className="absolute bottom-4 m-8">
        <div className="space-y-2">

          <div className="flex flex-row space-x-2 "><h2 className="text-xl font-['Blauer_Nue'] font-semibold">{banner.title}</h2> 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_172_28)">
<path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_172_28">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
          <p className="text-lg font-['Blauer_Nue']">{banner.description}</p>
          <p className="text-sm opacity-90 font-['Blauer_Nue']">{banner.subtext}</p>
        </div>
        </div>
      </div>
    </div>))}
  </div>
  );
}
