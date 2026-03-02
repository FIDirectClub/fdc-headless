import Link from "next/link";
import Image from "next/image";
import type { WooProduct } from "@/lib/woocommerce";

interface ProductCardProps {
  product: WooProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.src || "/placeholder-product.jpg";
  const price = parseFloat(product.price);
  const regularPrice = parseFloat(product.regular_price || product.price);
  const onSale = product.on_sale && regularPrice > price;
  const savings = onSale ? regularPrice - price : 0;
  const savingsPercent = onSale ? Math.round((savings / regularPrice) * 100) : 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white border-2 border-gray-200 hover:border-slate-800 rounded-lg overflow-hidden transition-all"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        
        {/* Multi-Badge System */}
        <div className="absolute top-2 left-2 right-2 flex flex-wrap gap-1">
          {onSale && (
            <span className="px-2 py-1 bg-slate-800 text-white text-xs font-bold uppercase rounded shadow-sm">
              Daily Deal
            </span>
          )}
          {onSale && savingsPercent >= 20 && (
            <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold uppercase rounded shadow-sm">
              Clearance
            </span>
          )}
          {product.meta_data?.some((meta) => meta.key === 'free_shipping' && meta.value === 'yes') && (
            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold uppercase rounded shadow-sm">
              Free Ship
            </span>
          )}
        </div>

        {product.stock_status === "outofstock" && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-bold text-lg uppercase">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-3">
        {/* Brand (from categories or first category) */}
        {product.categories && product.categories[0] && (
          <div className="text-xs text-gray-500 uppercase font-bold mb-1">
            {product.categories[0].name}
          </div>
        )}

        {/* Product Title */}
        <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Price Display */}
        <div className="mb-2">
          {onSale ? (
            <div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl font-black text-red-600">${price.toFixed(2)}</span>
                <span className="text-xs text-gray-400 line-through">${regularPrice.toFixed(2)}</span>
              </div>
              <div className="text-xs text-emerald-600 font-semibold">
                Save ${savings.toFixed(2)} ({savingsPercent}%)
              </div>
            </div>
          ) : (
            <span className="text-xl font-black text-slate-900">${price.toFixed(2)}</span>
          )}
        </div>

        {/* SKU */}
        {product.sku && (
          <div className="text-xs text-gray-500 mb-2">
            SKU: {product.sku}
          </div>
        )}
        
        {/* Stock Status */}
        {product.stock_status === "instock" && (
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span>In Stock</span>
          </div>
        )}
        {product.stock_status === "onbackorder" && (
          <div className="flex items-center gap-1 text-yellow-600 text-xs font-bold">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span>Backorder</span>
          </div>
        )}
      </div>
    </Link>
  );
}
