"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";
import {  productSchema } from "./lib/zodSchemas";
import { redis } from "./lib/redis";
import { Cart,Wishlist } from "./lib/interfaces";
import { revalidatePath } from "next/cache";
import db from "../lib/db";


export async function createProduct(prevState: unknown, formData: FormData) {
    //const user = await db.user.current();

  {/*if (!user || user.email !== "terrificmaile@gmail.com") {
    return redirect("/");
  }
    */}
   

  const submission = parseWithZod(formData, {
    schema: productSchema,
  });
  console.log("hey sooledemone");

  if (submission.status !== "success") {
    return submission.reply();
  }

  console.log("hey randraamone");


  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  const normalizeArray = (value: any) => {
    try {
      if (Array.isArray(value)) {
        return value.map((item) => item.trim());
      } else if (typeof value === "string") {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed.map((item: string) => item.trim()) : [];
      }
    } catch (error) {
      console.error("Invalid JSON:", value);
      return [];
    }
  };
  
  const flattencolors = normalizeArray(submission.value.colors);

  
  


  await db.product.create({
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      originalprice: submission.value.originalprice,
      discountprice: submission.value.discountprice,
      images: flattenUrls,
      subcategory: submission.value.subcategory,
      ispremium: submission.value.ispremium === true ? true : false,
      stars: submission.value.stars,
      dimensions: submission.value.dimensions,
      weight: submission.value.weight,
      material: submission.value.material,
      warranty: submission.value.warranty,

    // ✅ Ensure colors are always stored as an array
    colors:flattencolors,

    },
  });

  redirect("/dashboard/products");
}

export async function editProduct(prevState: any, formData: FormData) {
     const user = await db.user.current();

  if (!user || user.email !== "terrificmaile@gmail.com") {
    return redirect("/");
  }
  
  let sizes: string[] = [];
  const stringifiedGenders = formData.get("sizes") as string;
  try {
    sizes = JSON.parse(stringifiedGenders);
    
    
  } catch (error) {
   
    
    console.error("Invalid JSON for genders:", error);
    return { status: "error", errors: ["Invalid gender format"] };
    
  }

  let colors: string[] = [];
  const stringifiedColors = formData.get("colors") as string;
  try {
    colors = JSON.parse(stringifiedColors);
  } catch (error) {
    console.error("❌ Invalid JSON for colors:", error);
    return { status: "error", errors: ["Invalid color format"] };
  }


  const submission = parseWithZod(formData, {
    schema: productSchema,
  });

  if (submission.status !== "success") {
    console.log("❌ Zod validation failed:", submission.error);
    return submission.reply();
   
  }

  const flattenUrls = submission.value.images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );



  const productId = formData.get("productId") as string;
  await db.product.update({
    where: {
      id: productId,
    },
    data: {
      name: submission.value.name,
      description: submission.value.description,
      category: submission.value.category,
      originalprice: submission.value.originalprice,
      discountprice: submission.value.discountprice,
      subcategory: submission.value.subcategory,
      ispremium: submission.value.ispremium === true ? true : false,
      colors:colors,
      images: flattenUrls,
      
    },
  });

  return redirect("/dashboard/products");

}

export async function deleteProduct(formData: FormData) {
    const user = await db.user.current();

  if (!user || user.email !== "terrificmaile@gmail.com") {
    return redirect("/");
  }

  await db.product.delete({
    where: {
      id: formData.get("productId") as string,
    },
  });

  redirect("/dashboard/products");
}


export async function addItem(productId: string, quantity: number, color: string) {
    const user = await db.user.current();

  if (!user) {
    return redirect("/");
  }

  let cart: Cart | null = await redis.get(`cart-${user.id}`);

  const selectedProduct = await db.product.findUnique({
    select: {
      id: true,
      name: true,
      originalprice: true,
      discountprice:true,
      images: true,
    },
    where: {
      id: productId,
    },
  });

  if (!selectedProduct) {
    throw new Error("No product with this id");
  }

  let myCart = {} as Cart;

  if (!cart || !cart.items) {
    myCart = {
      userId: user.id,
      items: [
        {
          id: selectedProduct.id,
          name: selectedProduct.name,
          originalprice: selectedProduct.originalprice,
          discountprice:selectedProduct.discountprice,
          imageString: selectedProduct.images[0],
          quantity: quantity,
          color: color,
        },
      ],
    };
  } else {
    let itemFound = false;

    myCart.items = cart.items.map((item) => {
      if (item.id === productId && item.color === color) {
        itemFound = true;
        item.quantity += 1;
      }
      return item;
    });

    if (!itemFound) {
      myCart.items.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        originalprice: selectedProduct.originalprice,
        discountprice:selectedProduct.discountprice,
        imageString: selectedProduct.images[0],
        quantity: quantity,
        color: color,
      });
    }
  }

  await redis.set(`cart-${user.id}`, myCart);

  revalidatePath("/", "layout");
}



export async function getData(productId: string) {
  const data = await db.product.findUnique({
    where: { id: productId },
    select: {
      id: true,
      name: true,
      description: true,
      discountprice:true,
      originalprice: true,
      images: true,
      colors: true,
      warranty: true,
      weight: true,
      dimensions: true,
      material: true,
      stars: true,
      

    },
  });

  if (!data) return null;

  return data;
}


export async function addToWishlist(productId: string, quantity:number, color: string) {
    const user = await db.user.current();

  if (!user) {
    return { error: "User not authenticated" };
  }

  let wishlist: Wishlist | null = await redis.get(`wishlist-${user.id}`);

  // Fetch product details
  const selectedProduct = await db.product.findUnique({
    select: {
      id: true,
      name: true,
      originalprice: true,
      images: true,
      discountprice:true,
    },
    where: {
      id: productId,
    },
  });

  if (!selectedProduct) {
    throw new Error("No product found with this ID");
  }

  // Ensure product has an image
  const productImage = selectedProduct.images?.length > 0 ? selectedProduct.images[0] : "";

  let myWishlist: Wishlist = {
    userId: user.id,
    items: [],
  };

  if (!wishlist || !wishlist.items) {
    // Initialize wishlist if empty
    myWishlist.items = [
      {
        id: selectedProduct.id,
        name: selectedProduct.name,
        originalprice: selectedProduct.originalprice,
        imageString: productImage,
        discountprice:selectedProduct.discountprice,
        color: color,
        quantity: quantity,
      },
    ];
  } else {
    let itemExists = false;

    myWishlist.items = wishlist.items.map((item) => {
      if (item.id === productId) {
        // Update size and color if product already exists
        item.color = color;
        itemExists = true;
      }
      return item;
    });

    if (!itemExists) {
      // Add new item if not found
      myWishlist.items.push({
        id: selectedProduct.id,
        name: selectedProduct.name,
        originalprice: selectedProduct.originalprice,
        discountprice:selectedProduct.discountprice,
        imageString: productImage,
        color: color,
        quantity: quantity,
      });
    }
  }

  // Store updated wishlist in Redis
  await redis.set(`wishlist-${user.id}`, myWishlist);

  // Revalidate cache for updates
  revalidatePath("/", "layout");

  return { success: true, message: "Item added to wishlist with updated size and color" };
}


export async function delItem(formData: FormData) {
      const user = await db.user.current();

  if (!user) {
    return redirect("/");
  }

  const productId = formData.get("productId");

  let cart: Cart | null = await redis.get(`cart-${user.id}`);

  if (cart && cart.items) {
    const updateCart: Cart = {
      userId: user.id,
      items: cart.items.filter((item) => item.id !== productId),
    };

    await redis.set(`cart-${user.id}`, updateCart);
  }

  revalidatePath("/bag");
}

export async function moveToCart(formData: FormData) {
  "use server";
  
  const productId = formData.get("productId") as string; // Extract productId
  if (!productId) {
    throw new Error("Product ID is missing from form data.");
  }

  const user = await db.user.current();

  if (!user) {
    return redirect("/");
  }

  console.log("Fetching wishlist for:", `wishlist-${user.id}`);
  
  let wishlist: Wishlist | null = await redis.get(`wishlist-${user.id}`);
  console.log("Fetched wishlist:", wishlist);

  if (!wishlist || !wishlist.items) {
    throw new Error("Wishlist is empty.");
  }

  console.log("Looking for product:", productId);
  
  const selectedProduct = wishlist.items.find((item) => item.id === productId);
  console.log("Found product:", selectedProduct);

  if (!selectedProduct) {
    throw new Error(`Product not found in wishlist: ${productId}`);
  }

  // Remove the product from the wishlist
  wishlist.items = wishlist.items.filter((item) => item.id !== productId);
  await redis.set(`wishlist-${user.id}`, wishlist);

  // Add the product to the cart
  let cart: Cart | null = await redis.get(`cart-${user.id}`);
  let myCart: Cart = cart ?? { userId: user.id, items: [] };
  const existingCartItem = myCart.items.find((item) => item.id === productId);

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    myCart.items.push({
      id: selectedProduct.id,
      name: selectedProduct.name,
      originalprice: selectedProduct.originalprice,
      discountprice:selectedProduct.discountprice,
      imageString: selectedProduct.imageString,
      quantity: 1,
      color: selectedProduct.color,
    });
  }

  await redis.set(`cart-${user.id}`, myCart);
  revalidatePath("/", "layout");
}


export async function delWishlistItem(formData: FormData) {
  "use server";
  
  const productId = formData.get("productId") as string; // Extract productId
  if (!productId) {
    throw new Error("Product ID is missing from form data.");
  }

  const user = await db.user.current();
  if (!user) {
    return redirect("/");
  }

  let wishlist: Wishlist | null = await redis.get(`wishlist-${user.id}`);

  if (!wishlist || !wishlist.items?.length) {
    throw new Error("Your wishlist is empty.");
  }

  const itemIndex = wishlist.items.findIndex((item) => item.id === productId);

  if (itemIndex === -1) {
    throw new Error(`Product not found in wishlist: ${productId}`);
  }

  // Remove the product from the wishlist
  wishlist.items.splice(itemIndex, 1);
  await redis.set(`wishlist-${user.id}`, wishlist);

  // Revalidate the wishlist page
  revalidatePath("/wishlist");
}

export async function checkOut() {
  
  const user1 = await db.user.current();
  if (!user1) {
    return redirect("/");
  }
  let userid=user1.id;

  const user = await db.user.findUnique({
    where: { id: userid }, // Replace with actual user ID
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      profileImage: true,
      address: {
        select: {
          street: true,
          city: true,
          state: true,
          postalCode: true,
          phoneno: true,
        },
      },
    },
  } );
  

  if (!user) {
      return redirect("/");
  }

  const requiredFields = ["firstName", "lastName", "address.street", "address.city", "address.state", "address.postalCode", "address.phoneno"];

const missingFields = requiredFields.filter(field => {
  const [parent, child] = field.split(".");
  const value = parent === "address" && child
  ? user?.address?.[child as keyof typeof user.address]
  : user?.[parent as keyof typeof user];

// Handle nested fields
  console.log(`Checking ${field}:`, value);
  return value === undefined || value === null || value === "";
});

console.log("Missing Fields:", missingFields);

if (missingFields.length > 0) {
  const message = `Please fill in your necessary details: ${missingFields.join(", ")}`;
  return redirect(`/settings?message=${encodeURIComponent(message)}`);
}

return redirect("/payment");
}


