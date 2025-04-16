import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CldImage } from "next-cloudinary";
import { Heart } from "lucide-react";
import { addItem, addToWishlist } from "../../../actions";
import { Newaddtocartbtn,Addtowishlistbtn ,Largeaddtocartbtn} from "../../SubmitButtons";


interface ProductCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    originalprice: number;
    discountprice: number;
    images: string[];
    stars: number;
  };
  className?: string;
}








export function ProductCard({ item, className }: ProductCardProps) {
  const addProductToShoppingCart = async () => {
    try {
      await addItem(item.id, 1, ""); // make sure this works
      return {
        success: true,
        message: "Item added to cart",
      };
    } catch (err: any) {
      return {
        error: err?.message || "Error adding to cart",
      };
    }
  };
  
  const addProductToWishlist = () => addToWishlist(item.id, 1, "");

  return (
    <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l p-[1px] rounded-2xl">
     <article
  className={cn(
    "w-full h-[400px] lg:max-w-[470px] md:h-[433px]  bg-[#242424] relative rounded-2xl overflow-hidden shadow-md p-2",
    className
  )}
>
  {/* Glow */}
  <div className="absolute w-[300px] md:w-[512px] h-[300px] md:h-[512px] left-[-40px] md:left-[-66px] top-[100px] md:top-[128px] opacity-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#F9BF00_0%,_rgba(252,_232,_3,_0)_100%)] blur-2xl md:blur-3xl z-0" />

  {/* Image */}
  <Link href={`/product/${item.id}`}>
    <CldImage
      src={item.images[0]}
      alt={item.name}
      width={380}
      height={330}
      crop="fill"
      gravity="center"
      className="w-full h-[230px] md:h-[330px] object-contain pb-20 md:pb-32 rounded-xl"
      loading="lazy"
    />
  </Link>

  {/* Details */}
  <div className="absolute left-4 top-[180px] md:top-[220px] right-4 text-white z-10">
    {/* Name and Wishlist */}
    <div className="flex justify-between items-center mb-1">
      <div className="text-sm md:text-md font-extrabold leading-snug font-['Blauer_Nue']">
      {item.name.length > 40
        ? `${item.name.slice(0, 40)}...`
        : item.name}
      </div>
      <Addtowishlistbtn onAddToWishlist={addProductToWishlist} />
    </div>

    {/* Description */}
    <p className="hidden lg:block text-xs text-white/60 mt-2 font-['Blauer_Nue']">
      {item.description.length > 90
        ? `${item.description.slice(0, 90)}...`
        : item.description}
    </p>
    <p className="block lg:hidden text-xs text-white/60 mt-2 font-['Blauer_Nue']">
      {item.description.length > 20
        ? `${item.description.slice(0, 20)}...`
        : item.description}
    </p>

    {/* Color, Price, and Add to Cart */}
    <div className="flex flex-row md:flex-row justify-between md:items-start mt-4 gap-4">
      <div>
        {/* Colors */}
        <div className="flex gap-1">
          <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#f9bf00] rounded-full" />
          <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#0a5d5d] rounded-full" />
          <div className="w-3 h-3 lg:w-4 lg:h-4 bg-[#db0000] rounded-full" />
          <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-500 rounded-full" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-1 mt-2 font-['Blauer_Nue']">
          <span className="text-[#778082]/60 line-through text-xs font-light">
            ₹{item.originalprice}
          </span>
          <span className="text-white text-sm font-semibold">
            ₹{item.discountprice}
          </span>
        </div>
         {/* Cart Button */}
     
     <Newaddtocartbtn onAddToCart={addProductToShoppingCart}/>


      </div>

      {/* Cart Button */}
      <Largeaddtocartbtn onAddToCart={addProductToShoppingCart}/>

    </div>
  </div>
</article>

    </div>
  );
}
