import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Grow Your Fence Business | WeMarketFence',
  description: 'Attract more customers and grow your fence business with proven marketing strategies. Get a free consultation today.',
  openGraph: {
    title: 'Grow Your Fence Business | WeMarketFence',
    description: 'Attract more customers and grow your fence business with proven marketing strategies. Get a free consultation today.',
    type: 'website',
  },
};

// Redirect from old landing page to new funnel page
export default function LandingPageRedirect() {
  redirect('/funnel');
}
