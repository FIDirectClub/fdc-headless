import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/woocommerce";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const perPage = searchParams.get("per_page") || "24";
    const orderby = searchParams.get("orderby") || "date";
    const order = searchParams.get("order") || "desc";
    const category = searchParams.get("category");

    const params: any = {
      per_page: parseInt(perPage),
      orderby,
      order,
    };

    if (category && category !== "all") {
      params.category = category;
    }

    const products = await getProducts(params);

    return NextResponse.json(products);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
