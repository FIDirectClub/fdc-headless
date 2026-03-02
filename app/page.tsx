import Navigation from "@/components/Navigation";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20 bg-white">
        {/* Hero Banner - Large lifestyle image with CTA */}
        <section className="relative h-[600px] bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500 overflow-hidden">
          {/* Placeholder for hero image - will add real image later */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=1920')] bg-cover bg-center opacity-40"></div>
          
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full mb-6">
                <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  ✓ Dealer Status: Active
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                Big Savings<br />
                <span className="text-yellow-400">Big Demand</span>
              </h1>
              <p className="text-2xl text-white mb-8 drop-shadow-lg">
                Shop wholesale firearms at true dealer cost
              </p>
              <div className="flex gap-4">
                <Link
                  href="/products"
                  className="px-8 py-4 bg-yellow-400 text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-yellow-300 transition-all shadow-lg text-lg"
                >
                  Shop Trending Now
                </Link>
                <Link
                  href="/join"
                  className="px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wide rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Promotional Grid - PSA Style */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Large Feature - Suppressors */}
              <Link href="/products?category=suppressors" className="group relative md:col-span-2 lg:row-span-2 h-[400px] lg:h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800')] bg-cover bg-center opacity-30"></div>
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <h3 className="text-4xl font-black text-white uppercase mb-2">Suppressors</h3>
                  <p className="text-xl text-gray-300 mb-4">Shipped to Your Door</p>
                  <span className="text-yellow-400 font-bold uppercase tracking-wide group-hover:underline">
                    Shop Now →
                  </span>
                </div>
              </Link>

              {/* AR-15 Deals */}
              <Link href="/products?category=ar-15" className="group relative h-[200px] bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-white uppercase mb-2">AR-15 Parts</h3>
                  <p className="text-white/90 mb-2">Complete Build Kits</p>
                  <span className="text-yellow-200 font-bold uppercase text-sm group-hover:underline">
                    View Deals →
                  </span>
                </div>
              </Link>

              {/* Ammo Deals */}
              <Link href="/products?category=ammunition" className="group relative h-[200px] bg-gradient-to-br from-red-700 to-red-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Ammunition</h3>
                  <p className="text-white/90 mb-2">Bulk Pricing Available</p>
                  <span className="text-yellow-200 font-bold uppercase text-sm group-hover:underline">
                    Shop Ammo →
                  </span>
                </div>
              </Link>

              {/* Optics */}
              <Link href="/products?category=optics" className="group relative h-[200px] bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-black text-white uppercase mb-2">Optics</h3>
                  <p className="text-white/90 mb-2">Red Dots & Scopes</p>
                  <span className="text-yellow-200 font-bold uppercase text-sm group-hover:underline">
                    Browse Optics →
                  </span>
                </div>
              </Link>

              {/* Daily Deals */}
              <Link href="/deals" className="group relative h-[200px] bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-full p-6 flex flex-col justify-end">
                  <div className="text-4xl mb-2">🔥</div>
                  <h3 className="text-2xl font-black text-slate-900 uppercase mb-2">Daily Deals</h3>
                  <p className="text-slate-800 font-bold mb-2">Limited Time Only</p>
                  <span className="text-slate-900 font-bold uppercase text-sm group-hover:underline">
                    See All Deals →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Navigation Bar */}
        <section className="bg-slate-800 py-4 sticky top-20 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between overflow-x-auto gap-4">
              <Link href="/products" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Shop All
              </Link>
              <Link href="/products?category=pistols" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Pistols
              </Link>
              <Link href="/products?category=rifles" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Rifles
              </Link>
              <Link href="/products?category=shotguns" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Shotguns
              </Link>
              <Link href="/products?category=ar-15" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                AR-15
              </Link>
              <Link href="/products?category=ak-47" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                AK-47
              </Link>
              <Link href="/products?category=ammunition" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Ammo
              </Link>
              <Link href="/products?category=suppressors" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Suppressors
              </Link>
              <Link href="/brands" className="text-white hover:text-yellow-400 font-bold uppercase text-sm whitespace-nowrap transition-colors">
                Brands
              </Link>
              <Link href="/deals" className="bg-red-600 text-white hover:bg-red-700 font-bold uppercase text-sm whitespace-nowrap px-4 py-2 rounded transition-colors">
                Daily Deals
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase mb-8 tracking-tight">
              Featured Products
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Sample product cards - will be replaced with real data */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Link
                  key={i}
                  href="/products/sample"
                  className="group bg-white border-2 border-gray-200 hover:border-slate-800 rounded-lg overflow-hidden transition-all"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-red-600 text-white text-xs font-bold uppercase rounded">
                        Sale
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-3">
                    <div className="text-xs text-gray-500 uppercase font-bold mb-1">
                      Springfield Armory
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2">
                      ECHELON 9mm 4.5" 17+1 Pistol
                    </h3>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xl font-black text-red-600">$XXX.XX</span>
                      <span className="text-xs text-gray-400 line-through">$XXX.XX</span>
                    </div>
                    
                    <div className="text-xs text-emerald-600 font-bold">
                      ✓ In Stock
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-slate-800 text-white font-bold uppercase tracking-wide rounded-lg hover:bg-slate-700 transition-all"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-black text-slate-900 uppercase mb-8 tracking-tight">
              Shop by Brand
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'Springfield Armory',
                'Glock',
                'Smith & Wesson',
                'Sig Sauer',
                'Ruger',
                'Mossberg',
                'Henry',
                'Beretta',
                'CZ-USA',
                'Taurus',
                'Browning',
                'Remington',
              ].map((brand) => (
                <Link
                  key={brand}
                  href={`/products?brand=${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white border-2 border-gray-200 hover:border-slate-800 hover:shadow-lg rounded-lg p-6 flex items-center justify-center min-h-[100px] transition-all group"
                >
                  <span className="font-bold text-gray-600 group-hover:text-slate-900 text-center text-sm uppercase">
                    {brand}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-12 bg-slate-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  Wholesale Pricing
                </h3>
                <p className="text-gray-300">
                  True dealer cost. No retail markup.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  FFL Compliant
                </h3>
                <p className="text-gray-300">
                  Fully ATF-compliant checkout process.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-black text-white uppercase mb-2">
                  Fast Shipping
                </h3>
                <p className="text-gray-300">
                  Quick fulfillment to your FFL dealer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white uppercase mb-4 text-sm">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products?category=pistols" className="hover:text-white">Pistols</Link></li>
                <li><Link href="/products?category=rifles" className="hover:text-white">Rifles</Link></li>
                <li><Link href="/products?category=shotguns" className="hover:text-white">Shotguns</Link></li>
                <li><Link href="/products?category=ammunition" className="hover:text-white">Ammunition</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase mb-4 text-sm">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/ffl" className="hover:text-white">FFL Information</Link></li>
                <li><Link href="/shipping" className="hover:text-white">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase mb-4 text-sm">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/membership" className="hover:text-white">Membership</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white uppercase mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/compliance" className="hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Firearms Direct Club. All rights reserved. | Milton, Florida</p>
          </div>
        </div>
      </footer>
    </>
  );
}
