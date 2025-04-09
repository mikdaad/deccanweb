import React, { useState, useEffect } from "react";
import { newcart } from "@/app/lib/interfaces";
import { delItem, moveToWishlist, Incdeccart } from "@/app/actions";
import { set } from "zod";

interface ProductCardprops {
  cartItems: newcart[];
}

export default function ProductCard({ cartItems }: ProductCardprops) {
  const [quantity, setQuantity] = useState(2);
  // Remove these state variables as they are causing the issue
  // const [totaldiscountprice, setTotaldiscountprice] = useState(0);
  // const [totaloriginalprice, setTotaloriginalprice] = useState(0);

  // Calculate total discount price
  const totaldiscountprice = cartItems.reduce(
    (prev, item) => prev + item.discountprice * Number(item.quantity),
    0
  );

  // Calculate total original price
  const totaloriginalprice = cartItems.reduce(
    (prev, item) => prev + item.originalprice * Number(item.quantity),
    0
  );

  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item.id} // Add a key prop for proper rendering of lists in React
          className="justify-center items-stretch border border-[color:var(--Button-color,#E8AF52)] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] bg-[rgba(255,255,255,0.02)] flex w-full flex-col overflow-hidden mx-auto pt-[17px] pb-[41px] px-px rounded-2xl border-solid max-md:max-w-full max-md:mt-[22px]"
        >
          <div className="w-[436px] max-w-full ml-4">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[38%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch text-lg text-white font-medium underline tracking-[0.54px] leading-none max-md:mt-6">
                  <div>Product details</div>
                  <img
                    src={item.imageString}
                    alt={item.name}
                    className="aspect-[1.08] object-contain w-[156px] mt-4 rounded-lg"
                  />
                </div>
              </div>
              <div className="w-[62%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex w-full flex-col text-2xl mt-[59px] max-md:mt-10">
                  <h3 className="text-white font-semibold leading-none tracking-[0.72px] self-stretch">
                    {item.name}
                  </h3>
                  <div className="text-white text-base font-normal tracking-[0.48px] mt-4">
                    <span className="font-light">Deliver by</span>{" "}
                    <span className="font-semibold">{""}</span>
                  </div>
                  <div className="flex items-stretch gap-2.5 whitespace-nowrap leading-[1.4] mt-2.5">
                    <div className="text-white font-semibold grow">
                      {item.discountprice}
                    </div>
                    <div className="text-[#778082] font-light line-through">
                      {item.originalprice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      ))}

<div className="border shrink-0 h-px mt-[23px] border-[rgba(232,175,82,1)] border-dashed max-md:max-w-full" />
          <div className="self-center w-[460px] max-w-full mt-6">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[42%] ml-5 max-md:w-full max-md:ml-0">
        <div className="grow text-white whitespace-nowrap text-right mt-10">
          <div className="flex flex-col text-base font-normal tracking-[0.48px] pl-[18px]">
            <div>{totaloriginalprice}</div>
            <div className="mt-4">
              Discount{" "}
              {totaloriginalprice > 0
                ? `${100 - Math.round((totaldiscountprice / totaloriginalprice) * 100)}%`
                : "0%"}
            </div>
          </div>
          <div className="text-2xl font-semibold leading-none tracking-[0.72px] mt-4">
            Total: {totaldiscountprice}
          </div>
        </div>
      </div>
            </div>
            
          </div>
          <div className="border shrink-0 h-px mt-[23px] border-[rgba(232,175,82,1)] border-dashed max-md:max-w-full" />

    </div>
  );
}