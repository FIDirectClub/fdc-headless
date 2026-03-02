import Typesense from "typesense";

if (!process.env.TYPESENSE_HOST || !process.env.TYPESENSE_SEARCH_API_KEY) {
  throw new Error("Typesense configuration is missing");
}

// Server-side client (uses admin key for indexing)
export const typesenseAdmin = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: parseInt(process.env.TYPESENSE_PORT || "443"),
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
    // High availability nodes
    {
      host: process.env.TYPESENSE_NODE_1 || "",
      port: parseInt(process.env.TYPESENSE_PORT || "443"),
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
    {
      host: process.env.TYPESENSE_NODE_2 || "",
      port: parseInt(process.env.TYPESENSE_PORT || "443"),
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
    {
      host: process.env.TYPESENSE_NODE_3 || "",
      port: parseInt(process.env.TYPESENSE_PORT || "443"),
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
  ].filter((node) => node.host), // Only include nodes with valid hosts
  apiKey: process.env.TYPESENSE_ADMIN_API_KEY || process.env.TYPESENSE_SEARCH_API_KEY,
  connectionTimeoutSeconds: 2,
});

// Client-side search client (uses search-only key)
export const typesenseSearch = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: parseInt(process.env.TYPESENSE_PORT || "443"),
      protocol: process.env.TYPESENSE_PROTOCOL || "https",
    },
  ],
  apiKey: process.env.TYPESENSE_SEARCH_API_KEY,
  connectionTimeoutSeconds: 2,
});

// Search helper
export async function searchProducts(query: string, options = {}) {
  const searchParameters = {
    q: query,
    query_by: "post_title,post_content,taxonomies_product_cat",
    per_page: 24,
    page: 1,
    ...options,
  };

  try {
    const results = await typesenseSearch
      .collections("wp_posts_product")
      .documents()
      .search(searchParameters);
    
    return results;
  } catch (error) {
    console.error("Typesense search error:", error);
    throw error;
  }
}

// Get collection schema
export async function getCollectionSchema() {
  try {
    const collection = await typesenseAdmin.collections("wp_posts_product").retrieve();
    return collection;
  } catch (error) {
    console.error("Error retrieving collection schema:", error);
    throw error;
  }
}
