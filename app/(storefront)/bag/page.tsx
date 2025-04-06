import { checkOut, delItem } from "@/app/actions";
import { ChceckoutButton, DeleteItem } from "@/app/components/SubmitButtons";
import { Cart,newcart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import db from "../../../lib/db";
import PaymentPage from "../../components/paymentpage";
import Footer from "@/app/components/newcomponents/footer";

import { redirect } from "next/navigation";




export default async function BagRoute() {
  noStore();
  const user = await db.user.current(); 

  if (!user) {
    redirect("/auth/signin");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  let totalPrice = 0;

cart?.items.forEach((item) => {
  totalPrice += item.discountprice * Number(item.quantity);
});

const cartItems: Array<newcart> = cart?.items?.map((item) => ({
  id: item.id ,
  imageString: item.imageString ,
  name: item.name,
  color: item.color,
  discountprice: item.discountprice,
  quantity: item.quantity,
})) || [];

  return (
    <div className="p-4 h-full font-glancyr">
    
             <PaymentPage totalPrice={totalPrice} cartItems={cartItems} />
             <Footer/>

            </div>
          
  );
}
