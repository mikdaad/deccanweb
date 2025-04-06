import { NextResponse } from "next/server";
import { PrismaClient, Subcategory, Category, Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const search = searchParams.get("search") || "";
        const gender = searchParams.get("subcategory");
        const category = searchParams.get("category");
        const status = searchParams.get("status");
        const sortFilter = searchParams.get("sort");

        let products: Product[] = [];

        if (search) {
            products = await prisma.$queryRaw`
              SELECT *
              FROM "Product"
              WHERE to_tsvector('english', name) @@ plainto_tsquery(${search})
              ORDER BY ts_rank(to_tsvector('english', name), plainto_tsquery(${search})) DESC
              LIMIT 10;
            `;
        } else {
            products = await prisma.product.findMany({
                where: {
                    subcategory: gender ? (gender as Subcategory) : undefined,
                    category: category ? (category as Category) : undefined,
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
        }

        const formattedProducts = products.map((product) => ({
            ...product,
            stars: Decimal.isDecimal(product.stars) ? product.stars.toNumber() : product.stars,
            discountprice: Decimal.isDecimal(product.discountprice) ? product.discountprice.toNumber() : product.discountprice,
        }));

        return NextResponse.json(formattedProducts, { status: 200 });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
