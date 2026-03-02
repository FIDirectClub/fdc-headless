# Firearms Direct Club - Headless E-Commerce Frontend

Next.js 15 headless frontend for Firearms Direct Club, replacing WordPress theme with full FFL compliance.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (matching stickers.firearmsdirectclub.com design)
- **Backend**: WordPress/WooCommerce API
- **Search**: Typesense (37,139 products indexed)
- **State**: Zustand
- **Deployment**: Vercel

## Design System

Matching the FDC stickers site:
- **Primary (Gold)**: `#FF2D55` (hot pink CTAs)
- **Fonts**: Barlow, Barlow Condensed, Bangers
- **Background**: Gradient with noise texture
- **Card-based layout** with glassmorphism effects

## Environment Variables

Copy `.env.local` from parent directory or create with:

```env
# WordPress API
NEXT_PUBLIC_WORDPRESS_API_URL=https://firearmsdirectclubcom.kinsta.cloud/wp-json

# WooCommerce REST API
WOOCOMMERCE_CONSUMER_KEY=ck_971dc5216679edb70c3cc761ea0da7d4d2a84ba3
WOOCOMMERCE_CONSUMER_SECRET=cs_93a78e443b7d0d2db13b62a3ba7d88d96a9fb47d

# Typesense Cloud
TYPESENSE_HOST=lezdav7qyc4srt6kp.a2.typesense.net
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
TYPESENSE_SEARCH_API_KEY=3Tkeu9oMvXJu3nD8blWrW9t1DJRtyTI7
TYPESENSE_ADMIN_API_KEY=Cvas1oQEmm7kZXMTioo6ycu6gkdjaqby

# AgentMail
AGENTMAIL_API_KEY=am_us_39d2d942a706b50df8ff03705ee5a93dfcde3b2d9fc2346d2c1f5158a8bb1f0e
AGENTMAIL_ADDRESS=morpheus-fdc@agentmail.to
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
fdc-headless/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   ├── products/          # Product listing & details
│   └── api/               # API routes (FFL validation, etc.)
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   └── ProductCard.tsx    # Product grid card
├── lib/                   # Utilities
│   ├── woocommerce.ts    # WooCommerce API client
│   └── typesense.ts      # Typesense search client
└── public/               # Static assets
```

## Features Implemented

### Phase 1: Foundation ✅
- [x] Next.js 15 with App Router
- [x] FDC design system (Tailwind config)
- [x] Google Fonts (Barlow, Bangers)
- [x] Navigation component
- [x] Product card component
- [x] Homepage with hero + featured products
- [x] WooCommerce API integration
- [x] Typesense search client
- [x] Build validation (successful production build)

### Phase 2: Core Features (In Progress)
- [ ] Products listing page with pagination
- [ ] Search functionality with Typesense
- [ ] Product detail pages
- [ ] Category filtering
- [ ] Shopping cart
- [ ] Member authentication (MemberPress JWT)

### Phase 3: FFL Compliance (Critical)
- [ ] FFL dealer validation API
- [ ] Checkout flow with FFL selection
- [ ] ATF record keeping integration
- [ ] Server-side FFL validation
- [ ] g-FFL Cockpit REST API integration

### Phase 4: Wholesale Features
- [ ] Member-only pricing
- [ ] Wholesale cart (g-FFL Cockpit)
- [ ] Bulk ordering
- [ ] Dealer account management

## API Endpoints

### WooCommerce REST API
- **Base URL**: `https://firearmsdirectclubcom.kinsta.cloud/wp-json/wc/v3/`
- **Auth**: Basic Auth with consumer key/secret
- **Endpoints**:
  - `GET /products` - List products
  - `GET /products/{id}` - Get product details
  - `GET /products/categories` - List categories
  - `POST /orders` - Create order

### Typesense Search
- **Collection**: `wp_posts_product`
- **Documents**: 37,139 products indexed
- **Search fields**: `post_title`, `post_content`, `taxonomies_product_cat`

### g-FFL Cockpit (Wholesale)
- **Base URL**: `/wp-json/fflcockpit/v1/`
- **Endpoints**:
  - `POST /cart/add` - Add to wholesale cart
  - `POST /cart/update` - Update cart item
  - `POST /cart/remove` - Remove from cart
  - `POST /cart/checkout` - Process wholesale order

## FFL Compliance Notes

**Critical**: All FFL validation MUST remain server-side for legal compliance.

- Client-side cart building (UI only)
- Server-side FFL validation via WordPress API
- ATF database verification
- 7+ year record keeping requirement
- Custom endpoint needed: `/wp-json/fflcheckout/v1/validate-ffl`

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

Environment variables must be configured in Vercel dashboard.

## License

Proprietary - Firearms Direct Club
