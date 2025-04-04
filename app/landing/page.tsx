import { Metadata } from 'next';
import LandingPage from '@/components/landing-page';

export const metadata: Metadata = {
  title: 'Grow Your Fence Business | WeMarketFence',
  description: 'Attract more customers and grow your fence business with proven marketing strategies. Get a free consultation today.',
  openGraph: {
    title: 'Grow Your Fence Business | WeMarketFence',
    description: 'Attract more customers and grow your fence business with proven marketing strategies. Get a free consultation today.',
    type: 'website',
  },
};

export default function Page() {
  return <LandingPage />;
}
