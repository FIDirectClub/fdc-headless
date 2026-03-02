# Deployment Guide - Vercel

## Prerequisites

1. Vercel account (free tier is fine for development)
2. GitHub/GitLab repository (recommended) or Vercel CLI

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to Git

```bash
# Create a new GitHub repo
# Then push:
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or `fdc-headless` if deploying from parent)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Add Environment Variables

In Vercel dashboard, add all variables from `.env.local`:

```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://firearmsdirectclubcom.kinsta.cloud/wp-json
WOOCOMMERCE_CONSUMER_KEY=ck_971dc5216679edb70c3cc761ea0da7d4d2a84ba3
WOOCOMMERCE_CONSUMER_SECRET=cs_93a78e443b7d0d2db13b62a3ba7d88d96a9fb47d
TYPESENSE_HOST=lezdav7qyc4srt6kp.a2.typesense.net
TYPESENSE_PORT=443
TYPESENSE_PROTOCOL=https
TYPESENSE_SEARCH_API_KEY=3Tkeu9oMvXJu3nD8blWrW9t1DJRtyTI7
TYPESENSE_ADMIN_API_KEY=Cvas1oQEmm7kZXMTioo6ycu6gkdjaqby
TYPESENSE_NODE_1=lezdav7qyc4srt6kp-1.a2.typesense.net
TYPESENSE_NODE_2=lezdav7qyc4srt6kp-2.a2.typesense.net
TYPESENSE_NODE_3=lezdav7qyc4srt6kp-3.a2.typesense.net
AGENTMAIL_API_KEY=am_us_39d2d942a706b50df8ff03705ee5a93dfcde3b2d9fc2346d2c1f5158a8bb1f0e
AGENTMAIL_ADDRESS=morpheus-fdc@agentmail.to
```

### Step 4: Deploy

Click **Deploy** - Vercel will automatically build and deploy.

Your site will be live at: `https://your-project.vercel.app`

---

## Option 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login

```bash
vercel login
```

### Step 3: Deploy

```bash
# From project root
cd /root/.openclaw/workspace/fdc-headless-audit/fdc-headless

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Step 4: Add Environment Variables

```bash
# Add each variable
vercel env add WOOCOMMERCE_CONSUMER_KEY
vercel env add WOOCOMMERCE_CONSUMER_SECRET
# ... etc for all variables
```

Or use the Vercel dashboard for easier bulk import.

---

## Post-Deployment

### Custom Domain Setup

1. Go to Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `firearmsdirectclub.com`)
3. Update DNS records as instructed by Vercel:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

### SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. No action needed.

### Environment Separation

Create separate deployments for staging and production:

- **Production**: `firearmsdirectclub.com`
- **Staging**: `staging-firearmsdirectclub.vercel.app`

Use different environment variables for each:
```bash
# Add production variables
vercel env add WOOCOMMERCE_CONSUMER_KEY production

# Add staging variables
vercel env add WOOCOMMERCE_CONSUMER_KEY preview
```

---

## Continuous Deployment

Once connected to Git, Vercel will automatically:

- Deploy **preview builds** for every push to feature branches
- Deploy **production builds** for every push to `main` branch
- Comment on PRs with preview URLs

### Branch Configuration

- `main` → Production (firearmsdirectclub.com)
- `develop` → Staging (staging.firearmsdirectclub.com)
- Feature branches → Preview URLs

---

## Monitoring & Analytics

### Vercel Analytics

Enable in dashboard: Settings → Analytics

- Real-time traffic
- Core Web Vitals
- Top pages
- Referrers

### Speed Insights

Enable in dashboard: Settings → Speed Insights

- Lighthouse scores
- Performance metrics
- Real user monitoring

---

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all environment variables are set
3. Test build locally: `npm run build`
4. Check Node.js version (should be 18+)

### API Errors

1. Verify WordPress API is accessible from Vercel's servers
2. Check CORS settings in WordPress
3. Ensure WooCommerce REST API keys are correct
4. Test endpoints with cURL:

```bash
curl -u "ck_...:cs_..." \
  "https://firearmsdirectclubcom.kinsta.cloud/wp-json/wc/v3/products?per_page=1"
```

### Typesense Connection Issues

1. Verify Typesense host is accessible
2. Check API key permissions
3. Test connection:

```bash
curl -H "X-TYPESENSE-API-KEY: 3Tkeu9o..." \
  "https://lezdav7qyc4srt6kp.a2.typesense.net/collections/wp_posts_product"
```

---

## Performance Optimization

### Image Optimization

Next.js automatically optimizes images via `next/image`.

Ensure all product images use the `Image` component:
```tsx
<Image 
  src={product.image} 
  alt={product.name}
  width={400}
  height={400}
  priority={false}
/>
```

### Edge Caching

Configure in `next.config.ts`:

```typescript
export default {
  async headers() {
    return [
      {
        source: '/api/products',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=60, stale-while-revalidate',
          },
        ],
      },
    ];
  },
};
```

### ISR (Incremental Static Regeneration)

For product pages:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

---

## Security

### Environment Variables

- Never commit `.env.local` to Git
- Use Vercel's encrypted environment storage
- Rotate API keys periodically

### CORS

If needed, configure in WordPress:

```php
add_filter('rest_authentication_errors', function($result) {
    header('Access-Control-Allow-Origin: https://firearmsdirectclub.com');
    return $result;
});
```

### Rate Limiting

Consider adding rate limiting to API routes:

```typescript
// lib/rateLimit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});
```

---

## Rollback

If a deployment has issues:

1. Go to Vercel dashboard → Deployments
2. Find the previous working deployment
3. Click "Promote to Production"

Or via CLI:
```bash
vercel rollback
```

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: support@vercel.com
