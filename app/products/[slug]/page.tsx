import Navigation from "@/components/Navigation";
import Link from "next/link";
import { getProductBySlug, getProducts } from "@/lib/woocommerce";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts({ per_page: 100 });
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  // Fetch the actual product by slug
  const product = await getProductBySlug(params.slug);

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
      
      <main className="pt-20 bg-white min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-gray-100 py-3 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600 font-semibold uppercase">Home</Link>
              <span>/</span>
              {product.categories && product.categories[0] && (
                <>
                  <Link href={`/products?category=${product.categories[0].slug}`} className="hover:text-blue-600 uppercase">
                    {product.categories[0].name}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN - Product Images */}
            <div>
              {/* Stock Status Badge */}
              <div className="mb-4">
                {product.stock_status === 'instock' && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold text-sm rounded uppercase">
                    In stock online
                  </div>
                )}
                {product.stock_status === 'outofstock' && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-400 text-white font-bold text-sm rounded uppercase">
                    Out of stock
                  </div>
                )}
                {product.stock_status === 'onbackorder' && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white font-bold text-sm rounded uppercase">
                    Available on backorder
                  </div>
                )}
              </div>

              {/* Main Product Image */}
              <div className="relative aspect-square bg-white border-2 border-gray-200 rounded-lg overflow-hidden mb-4">
                {product.images && product.images[0] ? (
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt || product.name}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-lg">
                    No image available
                  </div>
                )}
              </div>

              {/* Image Gallery Thumbnails */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {product.images.slice(0, 6).map((image, index) => (
                    <button
                      key={index}
                      className="relative aspect-square bg-white border-2 border-gray-200 hover:border-blue-600 rounded-lg overflow-hidden transition-colors"
                    >
                      <img
                        src={image.src}
                        alt={image.alt || `${product.name} - Image ${index + 1}`}
                        className="w-full h-full object-contain p-2"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Report incorrect images link */}
              <div className="mt-4 text-center">
                <button className="text-sm text-blue-600 hover:underline">
                  📷 Report incorrect images
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN - Product Info */}
            <div>
              {/* Product Title */}
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {product.name}
              </h1>

              {/* Price Section */}
              <div className="mb-6">
                {onSale ? (
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-600 text-sm font-bold">Regular Price</span>
                      <span className="text-gray-500 text-xl line-through">
                        ${regularPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-900 text-sm font-bold">Special Price</span>
                      <span className="text-5xl font-black text-slate-900">
                        ${salePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-5xl font-black text-slate-900">
                    ${salePrice.toFixed(2)}
                  </div>
                )}
              </div>

              {/* Badges */}
              {(onSale || savingsPercent >= 20) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {onSale && (
                    <div className="px-4 py-2 bg-slate-800 text-white text-sm font-bold uppercase rounded flex items-center gap-2">
                      🔥 Daily Deal
                    </div>
                  )}
                  {savingsPercent >= 20 && (
                    <div className="px-4 py-2 bg-green-600 text-white text-sm font-bold uppercase rounded flex items-center gap-2">
                      💰 Clearance
                    </div>
                  )}
                </div>
              )}

              {/* Product Details Table */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden mb-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {product.sku && (
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-bold text-sm text-gray-700 w-32">SKU</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{product.sku}</td>
                      </tr>
                    )}
                    {product.categories && product.categories[0] && (
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-bold text-sm text-gray-700">Category</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{product.categories[0].name}</td>
                      </tr>
                    )}
                    {product.attributes && product.attributes.length > 0 && (
                      product.attributes.slice(0, 3).map((attr, index) => (
                        <tr key={index}>
                          <td className="px-4 py-3 bg-gray-50 font-bold text-sm text-gray-700">{attr.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{attr.options.join(', ')}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <label className="font-bold text-sm text-gray-700">Qty</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-24 px-3 py-2 text-center border-2 border-gray-300 rounded focus:border-blue-600 focus:outline-none"
                  />
                </div>
                
                {product.stock_status === 'instock' ? (
                  <button className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wide rounded-lg transition-all text-lg">
                    Add to Cart
                  </button>
                ) : (
                  <button disabled className="w-full px-8 py-4 bg-gray-400 text-white font-bold uppercase tracking-wide rounded-lg text-lg cursor-not-allowed">
                    Out of Stock
                  </button>
                )}
              </div>

              {/* Wish List and Share */}
              <div className="flex gap-4 mb-6">
                <button className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-blue-600 text-blue-600 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2">
                  ❤️ Add to Wish List
                </button>
                <button className="flex-1 px-6 py-3 border-2 border-gray-300 hover:border-blue-600 text-gray-700 font-bold text-sm rounded-lg transition-all flex items-center justify-center gap-2">
                  Share:  ✉️  📘
                </button>
              </div>

              {/* FFL Compliance Warning */}
              <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                <p className="text-sm font-bold text-yellow-900 mb-2">
                  ⚠️ FFL Compliance Required
                </p>
                <p className="text-sm text-yellow-800">
                  This firearm must be shipped to a valid FFL dealer. You will be able to select your FFL during checkout.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-12 border-t-2 border-gray-200">
            <div className="flex gap-0 border-b-2 border-gray-200">
              <button className="px-8 py-4 font-bold uppercase text-sm border-b-4 border-blue-600 text-blue-600 -mb-0.5">
                Product Details
              </button>
              <button className="px-8 py-4 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Reviews
              </button>
              <button className="px-8 py-4 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Q & A
              </button>
              <button className="px-8 py-4 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Retail Stock
              </button>
              <button className="px-8 py-4 font-bold uppercase text-sm text-gray-600 hover:text-slate-900">
                Compliance
              </button>
            </div>

            {/* Product Details Tab Content */}
            <div className="py-8">
              <h2 className="text-2xl font-black text-slate-900 uppercase mb-6">Product Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Details Section */}
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase mb-4">Details:</h3>
                  {product.short_description && (
                    <div 
                      className="text-gray-700 leading-relaxed prose prose-sm max-w-none mb-6"
                      dangerouslySetInnerHTML={{ __html: product.short_description }}
                    />
                  )}

                  {product.attributes && product.attributes.length > 0 && (
                    <div className="space-y-2 text-sm">
                      {product.attributes.map((attr, index) => (
                        <div key={index}>
                          <span className="font-bold text-gray-900">{attr.name}:</span>{' '}
                          <span className="text-gray-700">{attr.options.join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Features Section */}
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase mb-4">Features:</h3>
                  {product.description && (
                    <div 
                      className="text-gray-700 leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
