import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.enum(["Sofa", "Chairs", "Homedecor","Carpet"]),
  originalprice: z.number().min(1),
  discountprice: z.number().min(1),
  images: z.array(z.string()).min(1, "At least one image is required"),
  subcategory: z.enum(["leathersofa", "lshapesofa","roundshapesofa","diningchairs", "officechairs", "loungechairs","wallart", "vases", "lighting", "mirrors","persiancarpet", "moderncarpet", "shagcarpet"]),
  ispremium: z.boolean().optional(),
  stars:  z.number().min(1),
  colors:z.array(z.string()).min(1, "At least one color is required"),
  dimensions: z.string(),
  weight: z.string(),
  material: z.string(),
  warranty: z.string(),
  longdescription: z.string(),
  isstock: z.boolean(),
  reviews: z.array(z.object({
    name: z.string(),star: z.number().min(1),review: z.string()
  })),

});


// Separate Schema for adding a Review later (e.g., by a customer)
export const reviewSchema = z.object({
  productId: z.string().uuid("Invalid Product ID"),
  name: z.string().min(1, "Reviewer name is required"),
  star: z.number().int().min(1).max(5),
  review: z.string().min(10, "Review must be at least 10 characters"),
});
