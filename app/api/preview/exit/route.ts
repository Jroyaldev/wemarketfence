import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

// This route is called to disable draft mode
export async function GET() {
  // Disable draft mode by removing the cookie
  await draftMode().disable();
  
  // Redirect to the blog home page
  redirect('/blog');
}
