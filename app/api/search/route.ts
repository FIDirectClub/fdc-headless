import { NextRequest, NextResponse } from "next/server";
import { searchProducts } from "@/lib/typesense";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json(
        { error: "Query parameter 'q' is required" },
        { status: 400 }
      );
    }

    const perPage = parseInt(searchParams.get("per_page") || "24");
    const page = parseInt(searchParams.get("page") || "1");

    const results = await searchProducts(query, {
      per_page: perPage,
      page: page,
    });

    // Transform Typesense results to WooCommerce format
    // This is a simplified transformation - adjust based on your Typesense schema
    const products = results.hits?.map((hit: any) => ({
      id: hit.document.post_id || hit.document.id,
      name: hit.document.post_title,
      slug: hit.document.post_name || "",
      price: hit.document.price || "0",
      regular_price: hit.document.regular_price || hit.document.price || "0",
      sale_price: hit.document.sale_price || "",
      on_sale: hit.document.on_sale || false,
      stock_status: hit.document.stock_status || "instock",
      images: hit.document.images || [],
      sku: hit.document.sku || "",
      short_description: hit.document.post_excerpt || "",
      categories: hit.document.taxonomies_product_cat || [],
    })) || [];

    return NextResponse.json(products);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
