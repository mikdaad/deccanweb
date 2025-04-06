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

});
