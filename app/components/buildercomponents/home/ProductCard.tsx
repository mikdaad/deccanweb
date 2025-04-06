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
import PriceDisplay from "../../storefront/pricedisplay";
import { Addtocartbtn,Addtowishlistbtn } from "../../SubmitButtons";


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
  const addProductToShoppingCart = () => addItem(item.id, 1, "");
  const addProductToWishlist = () => addToWishlist(item.id, 1, "");

  return (
    <div className="bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] hover:bg-gradient-to-l  p-[1px] text-white duration-300 hover:shadow-2xl hover:shadow-purple-600/30  rounded-xl">
    <article className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-md p-4 bg-[#242424] relative overflow-hidden ${className}   `}>
      <Link href={`/product/${item.id}`} >
        <div className="relative w-full aspect-[1.5] rounded-t-2xl overflow-hidden">
          <CldImage
            src={item.images[0]}
            alt={item.name}
            width={600}
            height={400}
            crop="fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>

      
      
      <div className="w-[512px] h-[512px] left-[-66px] top-[128px] absolute opacity-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#F9BF00_0%,_rgba(252,_232,_3,_0)_100%)] blur-3xl z-0"></div>

      <div className="p-4 text-white ">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
          
        <Addtowishlistbtn onAddToWishlist={addProductToWishlist}/>
        </div>

        <p className="text-sm text-opacity-60">{item.description}</p>

        
        <div className=" mt-2 mb-2">

        <div className="flex flex-row justify-between">

          <div className="flex flex-row justify-between">

        <div>
        <div className=" flex flex-row gap-2 mt-2">
        <div className="w-4 h-4  bg-[#f9bf00] rounded-full"></div>
        <div className="w-4 h-4   bg-[#0a5d5d] rounded-full"></div>
        <div className="w-4 h-4  bg-[#db0000] rounded-full"></div>
        <div className="w-4 h-4   bg-gray-500 rounded-full"></div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-400 line-through">₹{item.originalprice}</span>
          <span className="text-white font-semibold">₹{item.discountprice}</span>
        </div>

        </div>

              {/* Gradient Border */}
  <div className="relative p-[0.8px] rounded-lg bg-gradient-to-r from-[#E8AF52] via-yellow-700 to-[#225043] z-10  ml-4">
    {/* Button Content with Solid Background, Placed Below Border */}
    <div className="relative flex justify-center items-center bg-[#242424] rounded-md px-5 py-1 z-0">
      <span className="text-white text-sm font-medium">Add to Cart </span>
    </div>
   
  </div>

       

   

        </div>


    

        <div className="relative flex justify-center items-center cursor-pointer">
  {/* Glow Effect Behind Everything */}
  <div className="absolute w-[512px] h-[512px] left-[-66px] top-[128px] opacity-10 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_#F9BF00_0%,_rgba(252,_232,_3,_0)_100%)] blur-3xl z-0"></div>

 
</div>

    

        </div>

        </div>



       
      </div>
    </article>
    </div>
  );
}
