import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

if (!process.env.WOOCOMMERCE_CONSUMER_KEY || !process.env.WOOCOMMERCE_CONSUMER_SECRET) {
  throw new Error("WooCommerce API keys are not configured");
}

export const woocommerce = new WooCommerceRestApi({
  url: "https://firearmsdirectclubcom.kinsta.cloud",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET,
  version: "wc/v3",
});

// Types for WooCommerce API responses
export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: string;
  status: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  stock_status: string;
  stock_quantity: number | null;
  manage_stock: boolean;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  attributes: Array<{
    id: number;
    name: string;
    options: string[];
  }>;
  meta_data: Array<{
    key: string;
    value: any;
  }>;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  image: {
    id: number;
    src: string;
  } | null;
  count: number;
}

// Helper functions
export async function getProducts(params = {}) {
  try {
    const response = await woocommerce.get("products", params);
    return response.data as WooProduct[];
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProduct(id: number) {
  try {
    const response = await woocommerce.get(`products/${id}`);
    return response.data as WooProduct;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

export async function getProductBySlug(slug: string): Promise<WooProduct | null> {
  try {
    const response = await woocommerce.get("products", { slug });
    const products = response.data as WooProduct[];
    return products.length > 0 ? products[0] : null;
  } catch (error) {
    console.error(`Error fetching product by slug ${slug}:`, error);
    return null;
  }
}

export async function getCategories(params = {}) {
  try {
    const response = await woocommerce.get("products/categories", params);
    return response.data as WooCategory[];
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
