import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/woocommerce";

export default async function Home() {
  // Fetch featured/recent products
  const products = await getProducts({
    per_page: 12,
    orderby: "date",
    order: "desc",
  });

  return (
    <>
      <Navigation />
      
      <main className="pt-24 px-6 md:px-12 pb-12">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center py-16 md:py-24">
            <h1 className="font-bangers text-5xl md:text-7xl text-gold mb-4 tracking-wide drop-shadow-lg">
              Wholesale Firearms
            </h1>
            <p className="font-barlow-condensed text-xl md:text-2xl text-steel mb-8 max-w-2xl mx-auto">
              Buy firearms at dealer cost. FFL-compliant. ATF-approved.
            </p>
            <a
              href="/products"
              className="inline-block px-8 py-4 bg-gold text-white font-barlow-condensed font-bold uppercase tracking-wide rounded-full hover:bg-gold-bright transition-all shadow-lg text-lg"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto">
          <h2 className="font-barlow-condensed text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-wide">
            New Arrivals
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10">
              <div className="text-gold text-5xl mb-4">⚡</div>
              <h3 className="font-barlow-condensed font-bold text-xl text-white mb-2 uppercase">
                Dealer Prices
              </h3>
              <p className="text-steel-light">
                Buy at wholesale cost. No retail markup.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10">
              <div className="text-gold text-5xl mb-4">🔒</div>
              <h3 className="font-barlow-condensed font-bold text-xl text-white mb-2 uppercase">
                FFL Compliant
              </h3>
              <p className="text-steel-light">
                Full ATF compliance. Secure FFL validation.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border-2 border-white/10">
              <div className="text-gold text-5xl mb-4">📦</div>
              <h3 className="font-barlow-condensed font-bold text-xl text-white mb-2 uppercase">
                Fast Shipping
              </h3>
              <p className="text-steel-light">
                Quick fulfillment. Direct to your FFL dealer.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 py-12 border-t-2 border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-barlow-condensed text-steel-light">
            © 2024 Firearms Direct Club. All rights reserved.
          </p>
          <p className="font-barlow-condensed text-steel-light text-sm mt-2">
            Milton, Florida
          </p>
        </div>
      </footer>
    </>
  );
}
