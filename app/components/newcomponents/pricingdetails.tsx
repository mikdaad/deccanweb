"use client"
import React, { useState } from "react";


interface PricingDetailsProps {
  totalPrice: number;
  originalprice: number;
  setstep: (step: number) => void;
  step: number;


}
export default function PricingDetails({ totalPrice,originalprice,setstep,step }: PricingDetailsProps) {
  const [couponCode, setCouponCode] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const discountAmount = originalprice - totalPrice;
  const discountPercent = Math.round((discountAmount / originalprice) * 100);

  const handleApplyCoupon = () => {
    setShowCouponInput(!showCouponInput);
  };

  return (
    <div className="justify-center items-stretch border border-[color:var(--Button-color,#E8AF52)] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] bg-[rgba(255,255,255,0.02)] flex w-full flex-col overflow-hidden mx-auto px-[25px] py-[23px] rounded-2xl border-solid max-md:max-w-full max-md:mt-[22px] max-md:px-5">
      <div className="max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[77%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col text-base text-white font-normal tracking-[0.48px] max-md:mt-10">
              <div>Sub total</div>
              <div className="mt-4">Discount ({discountPercent}%)</div>
              <div className="text-[rgba(26,255,52,1)] font-semibold mt-4">
                Total Saving
              </div>
              <div className="self-stretch mt-4">
                Shipping and Handling(Free)
              </div>
            </div>
          </div>
          <div className="w-[23%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow text-base whitespace-nowrap text-right tracking-[0.48px] max-md:mt-10">
              <div className="text-white font-medium">₹{originalprice}</div>
              <div className="text-white font-medium mt-4">-₹{discountAmount}</div>
              <div className="flex flex-col mt-4 pl-[13px]">
                <div className="text-[rgba(26,255,52,1)] font-semibold">
                ₹{discountAmount}
                </div>
                <div className="text-white font-medium mt-4">₹0</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(217,217,217,0.09)] flex items-stretch gap-5 text-white justify-between mt-6 px-4 py-[17px] rounded-lg max-md:max-w-full">
        {showCouponInput ? (
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter coupon code"
            className="bg-transparent border-b border-white outline-none text-sm font-light flex-1"
          />
        ) : (
          <div className="text-sm font-light">Have a coupon code ?</div>
        )}
        <button
          onClick={handleApplyCoupon}
          className="text-base font-normal hover:text-[rgba(232,175,82,1)] transition-colors"
        >
          {showCouponInput ? "Submit" : "Apply now"}
        </button>
      </div>

      <div className="border shrink-0 h-px mt-[23px] border-white border-solid max-md:max-w-full" />

      <div className="flex items-stretch gap-5 justify-between mt-4 max-md:max-w-full">
        <div className="text-white text-2xl font-medium leading-none tracking-[0.72px]">
          Sub-Total
        </div>
        <div className="flex flex-col items-stretch">
          <div className="text-white text-2xl font-medium leading-none tracking-[0.72px]">
            {totalPrice}
          </div>
          <button className="self-stretch bg-[rgba(218,175,80,1)] min-h-[51px] gap-2.5 text-base text-black font-semibold text-center leading-loose mt-4 px-12 py-[13px] rounded-lg max-md:px-5 hover:bg-[rgba(232,185,92,1)] transition-colors" onClick={() => setstep(step+1)}>
            Check Out Now
          </button>
        </div>
      </div>
    </div>
  );
};


