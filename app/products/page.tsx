"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import type { WooProduct } from "@/lib/woocommerce";

export default function ProductsPage() {
  const [products, setProducts] = useState<WooProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    loadProducts();
  }, [category]);

  async function loadProducts() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        per_page: "24",
        orderby: "date",
        order: "desc",
      });

      if (category !== "all") {
        params.append("category", category);
      }

      const response = await fetch(`/api/products?${params}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) {
      loadProducts();
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navigation />

      <main className="pt-24 px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-barlow-condensed text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
              Shop All Firearms
            </h1>
            <p className="text-steel-light text-lg">
              Browse our complete inventory of wholesale firearms
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search firearms..."
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white placeholder-steel-light focus:border-gold focus:outline-none"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-steel-light"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="9" r="7" />
                  <line x1="14" y1="14" x2="19" y2="19" />
                </svg>
              </div>
            </form>

            {/* Category Filter */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg text-white focus:border-gold focus:outline-none min-w-[200px]"
            >
              <option value="all">All Categories</option>
              <option value="pistols">Pistols</option>
              <option value="rifles">Rifles</option>
              <option value="shotguns">Shotguns</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-steel-light font-barlow-condensed">
                Loading products...
              </p>
            </div>
          )}

          {/* Products Grid */}
          {!loading && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && products.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-barlow-condensed text-2xl font-bold text-white mb-2">
                No products found
              </h3>
              <p className="text-steel-light">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
