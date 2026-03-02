import Link from "next/link";
import Image from "next/image";
import type { WooProduct } from "@/lib/woocommerce";

interface ProductCardProps {
  product: WooProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images[0]?.src || "/placeholder-product.jpg";
  const price = parseFloat(product.price);
  const regularPrice = parseFloat(product.regular_price);
  const onSale = product.on_sale && regularPrice > price;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border-2 border-white/10 hover:border-gold transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,45,85,0.3)] no-underline"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-white/10">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {onSale && (
          <div className="absolute top-2 right-2 bg-gold text-white px-3 py-1 rounded-full font-barlow-condensed font-bold text-sm uppercase">
            Sale
          </div>
        )}
        {product.stock_status === "outofstock" && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-barlow-condensed font-bold text-xl uppercase">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-white font-barlow-condensed font-semibold text-lg mb-2 line-clamp-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          {onSale && (
            <span className="text-steel line-through text-sm">
              ${regularPrice.toFixed(2)}
            </span>
          )}
          <span className="text-gold font-bold text-xl">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* SKU */}
        {product.sku && (
          <p className="text-steel-light text-xs font-barlow-condensed uppercase tracking-wide">
            SKU: {product.sku}
          </p>
        )}

        {/* Stock Status */}
        {product.stock_status === "instock" && (
          <div className="mt-3 flex items-center gap-1 text-green-500 text-sm">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span className="font-barlow-condensed font-medium">In Stock</span>
          </div>
        )}
        {product.stock_status === "onbackorder" && (
          <div className="mt-3 flex items-center gap-1 text-yellow-500 text-sm">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8" />
            </svg>
            <span className="font-barlow-condensed font-medium">Backorder</span>
          </div>
        )}
      </div>
    </Link>
  );
}
