import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section - Dealer Status */}
        <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border-b border-zinc-700">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-emerald-400 font-barlow-condensed font-bold text-sm uppercase tracking-wider">
                    Dealer Status: Active
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-barlow-condensed uppercase tracking-tight">
                  Wholesale Direct Access
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl font-barlow">
                  Shop firearms, optics, and accessories at true dealer cost. No retail markup.
                </p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-white mb-1 font-barlow-condensed">37,139</div>
                <div className="text-zinc-400 font-barlow-condensed uppercase text-sm tracking-wide">Products Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="bg-zinc-950 py-12 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-white mb-8 font-barlow-condensed uppercase tracking-wide">
              Shop by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Pistols', icon: '🔫', slug: 'pistols' },
                { name: 'Rifles', icon: '🎯', slug: 'rifles' },
                { name: 'Shotguns', icon: '💥', slug: 'shotguns' },
                { name: 'Optics', icon: '🔭', slug: 'optics' },
                { name: 'Accessories', icon: '🔧', slug: 'accessories' },
                { name: 'Ammunition', icon: '🎪', slug: 'ammunition' },
              ].map((category) => (
                <Link
                  key={category.slug}
                  href={`/products?category=${category.slug}`}
                  className="group relative bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-gold rounded-lg p-6 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-barlow-condensed font-bold text-white text-lg uppercase tracking-wide">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Brands */}
        <section className="bg-zinc-900 py-12 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-bold text-white mb-8 font-barlow-condensed uppercase tracking-wide">
              Featured Manufacturers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                'Springfield Armory',
                'Henry Repeating Arms',
                'AGM Global Vision',
                'Sig Sauer',
                'Glock',
                'Smith & Wesson',
                'Ruger',
                'Mossberg',
                'Taurus',
                'Beretta',
                'CZ-USA',
                'Browning',
              ].map((brand) => (
                <Link
                  key={brand}
                  href={`/products?brand=${brand.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-gold rounded-lg p-6 flex items-center justify-center min-h-[100px] transition-all duration-300 group"
                >
                  <span className="font-barlow-condensed font-semibold text-zinc-400 group-hover:text-white text-center text-sm uppercase tracking-wide">
                    {brand}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-zinc-950 py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white font-barlow-condensed uppercase tracking-wide">
                Highlighted Products
              </h2>
              <Link
                href="/products"
                className="text-gold hover:text-gold-bright font-barlow-condensed font-bold uppercase text-sm tracking-wide transition-colors"
              >
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Sample products - will be replaced with real data */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Link
                  key={i}
                  href="/products/sample"
                  className="group bg-zinc-900 border border-zinc-800 hover:border-gold rounded-lg overflow-hidden transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                    <div className="absolute inset-0 bg-zinc-700 animate-pulse"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-barlow-condensed font-bold uppercase rounded-full">
                        Online Only
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-barlow-condensed font-bold uppercase tracking-wide text-zinc-500">
                        Springfield Armory
                      </span>
                    </div>
                    <h3 className="text-white font-barlow font-medium text-sm mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                      ECHELON COA Pistol 9mm 4.5" 17+1
                    </h3>
                    
                    {/* Member Pricing */}
                    <div className="bg-zinc-800 rounded-lg p-3 border border-zinc-700">
                      <div className="text-center">
                        <div className="text-xs text-zinc-400 font-barlow-condensed uppercase mb-1">
                          Member Pricing
                        </div>
                        <div className="text-2xl font-bold text-gold font-barlow-condensed">
                          $XXX.XX
                        </div>
                        <div className="text-xs text-zinc-500 font-barlow mt-1">
                          MSRP: $XXX.XX
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="bg-zinc-900 py-16 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-barlow-condensed uppercase">
                  Wholesale Pricing
                </h3>
                <p className="text-zinc-400 font-barlow">
                  Buy at true dealer cost. No retail markup, no hidden fees.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-barlow-condensed uppercase">
                  FFL Compliant
                </h3>
                <p className="text-zinc-400 font-barlow">
                  Fully ATF-compliant checkout with instant FFL validation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-barlow-condensed uppercase">
                  Fast Fulfillment
                </h3>
                <p className="text-zinc-400 font-barlow">
                  Direct from distributor to your FFL. Quick turnaround times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gold via-gold-bright to-gold py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-barlow-condensed uppercase tracking-tight">
              Ready to Buy Like a Dealer?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-barlow">
              Join thousands of savvy operators who've unlocked wholesale access
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-8 py-4 bg-zinc-900 text-white font-barlow-condensed font-bold uppercase tracking-wide rounded-lg hover:bg-zinc-800 transition-all shadow-lg text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-zinc-900 font-barlow-condensed font-bold uppercase tracking-wide rounded-lg hover:bg-zinc-100 transition-all shadow-lg text-lg"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-barlow-condensed font-bold text-white uppercase mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/products?category=pistols" className="text-zinc-400 hover:text-white font-barlow">Pistols</Link></li>
                <li><Link href="/products?category=rifles" className="text-zinc-400 hover:text-white font-barlow">Rifles</Link></li>
                <li><Link href="/products?category=shotguns" className="text-zinc-400 hover:text-white font-barlow">Shotguns</Link></li>
                <li><Link href="/products?category=optics" className="text-zinc-400 hover:text-white font-barlow">Optics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-barlow-condensed font-bold text-white uppercase mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-zinc-400 hover:text-white font-barlow">Help Center</Link></li>
                <li><Link href="/ffl-info" className="text-zinc-400 hover:text-white font-barlow">FFL Information</Link></li>
                <li><Link href="/shipping" className="text-zinc-400 hover:text-white font-barlow">Shipping</Link></li>
                <li><Link href="/returns" className="text-zinc-400 hover:text-white font-barlow">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-barlow-condensed font-bold text-white uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-zinc-400 hover:text-white font-barlow">About Us</Link></li>
                <li><Link href="/membership" className="text-zinc-400 hover:text-white font-barlow">Membership</Link></li>
                <li><Link href="/dealers" className="text-zinc-400 hover:text-white font-barlow">For Dealers</Link></li>
                <li><Link href="/contact" className="text-zinc-400 hover:text-white font-barlow">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-barlow-condensed font-bold text-white uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-zinc-400 hover:text-white font-barlow">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-zinc-400 hover:text-white font-barlow">Privacy Policy</Link></li>
                <li><Link href="/compliance" className="text-zinc-400 hover:text-white font-barlow">ATF Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center">
            <p className="text-zinc-500 font-barlow text-sm">
              © 2024 Firearms Direct Club. All rights reserved. | Milton, Florida
            </p>
            <p className="text-zinc-600 font-barlow text-xs mt-2">
              FFL-compliant firearms marketplace. All firearms must be shipped to a valid FFL dealer.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
