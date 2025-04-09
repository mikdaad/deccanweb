"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Banner = {
  id: string;
  title: string;
  imageString: string;
  link: string; // Store the query string here
  subtext: string;
};

export function Banner() {
  const [banners, setBanners] = useState<Banner[]>([
    {
      id: "1",
      title: "Premium Sofa",
      imageString: "/banner/b1.png",
      link: "?category=Sofa&ispremium=true", // Example query
      subtext: "50+ Colors available",
    },
    {
      id: "2",
      title: "Home decor items",
      imageString: "/banner/b2.png",
      link: "?category=Homedecor", // Example query
      subtext: "100+ variety available",
    },
    {
      id: "3",
      title: "Premium Carpet",
      imageString: "/banner/b3.png",
      link: "?category=Carpet&ispremium=true", // Example query
      subtext: "100+ new designs available",
    },
    {
      id: "4",
      title: "Premium collection",
      imageString: "/banner/b4.png",
      link: "?ispremium=true", // Example query
      subtext: "50+ items available",
    },
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 p-4 ml-[7%] my-5">
      {banners.map((banner) => (
        <Link key={banner.id} href={`/shop${banner.link}`} className="relative">
          <div className="relative bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[0.9px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-[24px]  max-w-[589px] min-h-[282px]  text-base font-light space-y-10">
            <div
              style={{
                backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 99.15%), url('${banner.imageString}')`,
              }}
              className="  bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l inset-3 p-[2px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-[24px]  m-0  max-w-[587px] min-h-[280px] text-base font-light "
            >
              <div className="absolute bottom-4 m-8">
                <div className="space-y-2">
                  <div className="flex flex-row space-x-2 ">
                    <h2 className="text-xl font-['Blauer_Nue'] font-semibold">{banner.title}</h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_172_28)">
                        <path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_172_28">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-sm opacity-90 font-thin font-['Blauer_Nue']">{banner.subtext}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}