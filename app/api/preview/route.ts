import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

// This route is called to enable draft mode
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  // Check the secret and next parameters
  // Secret should be the same one defined in your Contentful webhook (if using webhooks)
  // or in your environment variables
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '/blog';
  
  // Check the secret
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
  
  // Enable draft mode by setting a cookie
  await draftMode().enable();
  
  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  if (slug.startsWith('/')) {
    redirect(slug);
  } else {
    redirect(`/blog/${slug}`);
  }
}

// This route is called to disable draft mode
export async function POST() {
  // Disable draft mode by removing the cookie
  await draftMode().disable();
  return Response.json({ disabled: true });
}
