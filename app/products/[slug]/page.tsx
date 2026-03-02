import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { getProduct, getProducts } from "@/lib/woocommerce";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts({ per_page: 100 });
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // In real implementation, we'd fetch by slug
  // For now, fetch a sample product
  const products = await getProducts({ per_page: 1 });
  const product = products[0];

  if (!product) {
    notFound();
  }

  const regularPrice = parseFloat(product.regular_price || product.price);
  const salePrice = parseFloat(product.price);
  const onSale = product.on_sale && regularPrice > salePrice;
  const savings = onSale ? regularPrice - salePrice : 0;
  const savingsPercent = onSale ? Math.round((savings / regularPrice) * 100) : 0;

  return (
    <>
      <Navigation />
      
      <main className="pt-20 bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-3 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-slate-900">Products</Link>
              <span>/</span>
              {product.categories && product.categories[0] && (
                <>
                  <Link href={`/products?category=${product.categories[0].slug}`} className="hover:text-slate-900">
                    {product.categories[0].name}
                  </Link>
                  <span>/</span>
                </>
              )}
              <span className="text-slate-900 font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div>
              {/* Stock Status Badge */}
              <div className="mb-4">
                {product.stock_status === 'instock' && (
                  <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 font-bold text-sm rounded">
                    ✓ In stock online
                  </span>
                )}
                {product.stock_status === 'outofstock' && (
                  <span className="inline-block px-4 py-2 bg-red-100 text-red-700 font-bold text-sm rounded">
                    Out of stock
                  </span>
                )}
                {product.stock_status === 'onbackorder' && (
                  <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 font-bold text-sm rounded">
                    Available on backorder
                  </span>
                )}
              </div>

              {/* Main Product Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {product.images && product.images[0] ? (
                  <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt || product.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    No image available
                  </div>
                )}
              </div>

              {/* Image Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 8).map((image, index) => (
                    <button
                      key={index}
                      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-slate-800 transition-colors"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt || `${product.name} - Image ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Title */}
              <h1 className="text-3xl font-black text-slate-900 mb-4">
                {product.name}
              </h1>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {onSale && (
                  <span className="px-3 py-1 bg-slate-800 text-white text-sm font-bold uppercase rounded">
                    Daily Deal
                  </span>
                )}
                {onSale && savingsPercent >= 20 && (
                  <span className="px-3 py-1 bg-green-600 text-white text-sm font-bold uppercase rounded">
                    Clearance
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                {onSale ? (
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-gray-500 text-lg">Regular Price</span>
                      <span className="text-gray-500 text-xl line-through">
                        ${regularPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-700 text-lg font-bold">Special Price</span>
                      <span className="text-4xl font-black text-red-600">
                        ${salePrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-2 text-emerald-600 font-bold">
                      Save ${savings.toFixed(2)} ({savingsPercent}%)
                    </div>
                  </div>
                ) : (
                  <div className="text-4xl font-black text-slate-900">
                    ${salePrice.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Product Details Table */}
              <div className="mb-6 bg-gray-50 rounded-lg p-4">
                <table className="w-full text-sm">
                  <tbody>
                    {product.sku && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold text-gray-700">SKU</td>
                        <td className="py-2 text-gray-900">{product.sku}</td>
                      </tr>
                    )}
                    {product.categories && product.categories[0] && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-bold text-gray-700">Category</td>
                        <td className="py-2 text-gray-900">{product.categories[0].name}</td>
                      </tr>
                    )}
                    {product.attributes && product.attributes.length > 0 && (
                      product.attributes.map((attr, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2 font-bold text-gray-700">{attr.name}</td>
                          <td className="py-2 text-gray-900">{attr.options.join(', ')}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Add to Cart Section */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="font-bold text-gray-700">Qty</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-20 px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                
                {product.stock_status === 'instock' ? (
                  <button className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wide rounded-lg transition-all shadow-lg text-lg">
                    Add to Cart
                  </button>
                ) : (
                  <button disabled className="w-full px-8 py-4 bg-gray-400 text-white font-bold uppercase tracking-wide rounded-lg text-lg cursor-not-allowed">
                    Out of Stock
                  </button>
                )}
              </div>

              {/* Compliance Warning */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800 font-semibold mb-2">
                  ⚠️ FFL Compliance Required
                </p>
                <p className="text-xs text-yellow-700">
                  This firearm must be shipped to a valid FFL dealer. You will be able to select your FFL during checkout.
                </p>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-slate-800 text-slate-900 font-bold uppercase rounded-lg transition-all text-sm">
                  Add to Wish List
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-slate-800 text-slate-900 font-bold uppercase rounded-lg transition-all text-sm">
                  Share
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12 border-t-2 border-gray-200 pt-8">
            <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
              <button className="px-6 py-3 font-bold uppercase text-sm border-b-4 border-blue-600 text-blue-600">
                Product Details
              </button>
              <button className="px-6 py-3 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Reviews
              </button>
              <button className="px-6 py-3 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Q & A
              </button>
            </div>

            {/* Product Details Tab */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-black text-slate-900 uppercase mb-4">Details</h2>
              
              {product.description && (
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              {product.short_description && (
                <div 
                  className="mt-4 text-gray-700"
                  dangerouslySetInnerHTML={{ __html: product.short_description }}
                />
              )}

              {product.attributes && product.attributes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Specifications</h3>
                  <table className="w-full border-collapse">
                    <tbody>
                      {product.attributes.map((attr, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-3 font-bold text-gray-700 w-1/3">{attr.name}</td>
                          <td className="py-3 text-gray-900">{attr.options.join(', ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16 border-t-2 border-gray-200 pt-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Placeholder for related products - will be populated later */}
              <div className="text-center text-gray-500 py-8 col-span-full">
                Related products will appear here
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
