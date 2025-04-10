import React, { useState } from "react";
import { newcart } from "@/app/lib/interfaces";
import { delItem , moveToWishlist , Incdeccart} from "@/app/actions";
import Link from "next/link";

interface ProductCardprops {
  cartItems: newcart[];

}


export default function ProductCard({ cartItems }: ProductCardprops) {
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  

  return (
    <div>
      {cartItems.map((item) => (
 <div key={item.id} >
<div  className="justify-center border border-[color:var(--Button-color,#E8AF52)] shadow-[0px_1px_0px_0px_rgba(255,255,255,0.08)_inset] bg-[rgba(255,255,255,0.02)] grow overflow-hidden w-full p-[25px] rounded-2xl border-solid max-md:max-w-full max-md:mt-[22px] max-md:px-5">
<div className="gap-5 flex max-md:flex-col max-md:items-stretch">
  <div className="w-[24%] max-md:w-full max-md:ml-0">
    <div className="flex flex-col items-stretch text-xs text-white font-normal uppercase leading-[26px] mt-[43px] max-md:mt-10">
      <img
        src={item.imageString}
        alt="Aspen Recliner Sofa"
        className="aspect-[1.08] object-contain w-[156px] rounded-lg"
      />
      <div className="bg-[rgba(219,0,0,1)] self-center w-[114px] max-w-full mt-4 px-2 rounded-lg">
        only Few left
      </div>
    </div>
  </div>
  <div className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
    <div className="flex w-full flex-col items-stretch max-md:max-w-full max-md:mt-10">
      <div className="flex items-stretch gap-[17px] text-base text-[rgba(186,186,186,1)] font-normal">

        

        <form action={moveToWishlist} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <input type="hidden" name="color" value={item.color} />
                    <input type="hidden" name="quantity" value={item.quantity} />
                    <button className="flex items-stretch gap-[5px] hover:text-white transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/ebe2f6019a34d657e3a87a406be12b508939378e?placeholderIfAbsent=true"
            alt="Wishlist"
            className="aspect-[1.11] object-contain w-5 shrink-0"
          />
          <span className="basis-auto">Add to wishlist</span>
        </button></form>

        
        <form action={delItem} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <button className="flex items-stretch gap-[5px] hover:text-white transition-colors">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/4adf7c0fd6291357792bc6739ce5cdc353ace1e5?placeholderIfAbsent=true"
            alt="Remove"
            className="aspect-[0.89] object-contain w-4 shrink-0"
          />
          <span className="basis-auto">Remove from cart</span>
        </button>
        </form>


      </div>
      <div className="text-white text-2xl font-semibold leading-none tracking-[0.72px] mt-10">
        {item.name}
      </div>
      <div className="text-white text-base font-normal tracking-[0.48px] mt-4">
        <span className="font-light">Deliver by</span>{" "}
        <span className="font-semibold">30 march 2025</span>
      </div>
      <div className="mt-4 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[32%] max-md:w-full max-md:ml-0">
            <div className="w-full text-base font-light tracking-[0.48px] max-md:mt-10">
              <div className="flex w-full items-stretch gap-4 whitespace-nowrap">
                <div className="text-white">Qty</div>
                <div className="bg-[rgba(217,217,217,1)] flex items-center justify-between text-black flex-1 px-2 py-1 rounded-lg">

                 

                  <form action={Incdeccart} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <input type="hidden" name="color" value={item.color} />
                    <input type="hidden" name="quantity" value={item.quantity} />
                    <input type="hidden" name="number" value={-1} />

                    <button
                    onClick={decreaseQuantity}
                    className="text-gray-600 px-1"
                  >
                    -
                  </button>
        </form>
                  <div>{item.quantity}</div>
                  <form action={Incdeccart} className="text-end">
                    <input type="hidden" name="productId" value={item.id} />
                    <input type="hidden" name="color" value={item.color} />
                    <input type="hidden" name="quantity" value={item.quantity} />
                    <input type="hidden" name="number" value={1} />

                    <button
                    onClick={increaseQuantity}
                    className="text-gray-600 px-1"
                  >
                    +
                  </button>
        </form>
                 
                </div>
              </div>
              <div className="text-white mt-4">
                <span className="font-medium">{item.discountpercent}%</span> Discount
              </div>
              <div className="text-white font-medium mt-4 max-md:mr-1">
                Color {item.color}
              </div>
            </div>
          </div>
          <div className="w-[68%] ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full mt-10">
              <div className="flex w-full flex-col pl-[46px] max-md:pl-5">
                <div className="flex items-stretch gap-2.5 text-2xl whitespace-nowrap leading-[1.4]">
                  <div className="text-white font-semibold grow">
                    ₹{item.discountprice}
                  </div>
                  <div className="text-[#778082] font-light line-through">
                    ₹{item.originalprice}
                  </div>
                </div>
                <button className="flex items-stretch gap-[13px] text-base text-white font-medium tracking-[0.48px] mr-[30px] mt-[18px] max-md:mr-2.5 hover:opacity-80">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/9e14ec760a13409cba0be5c570ba1763/56b5a19af21c56de0731e04b300b35fe5df1ee40?placeholderIfAbsent=true"
                    alt="Share"
                    className="aspect-[0.9] object-contain w-[18px] shrink-0 my-auto"
                  />
                  <div>Share now</div>
                </button>
              </div>
              <button className="self-stretch rounded border border-[color:var(--text-grd,#FFF)] bg-[rgba(255,255,255,0.02)] gap-2.5 text-base text-white font-normal mt-[41px] px-12 py-4 border-solid max-md:mt-10 max-md:px-5 w-full hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                Add from wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
       
      ))}
      </div>

   
    
  );
};

