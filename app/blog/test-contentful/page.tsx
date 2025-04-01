import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { RetroSection } from '../../../components/retro-section';
import { RetroButton } from '../../../components/retro-button';
import { RetroCard } from '../../../components/retro-card';

export const metadata: Metadata = {
  title: 'Contentful Test | We Market Fence',
  description: 'Testing Contentful integration',
  robots: 'noindex, nofollow'
};

export default async function TestContentfulPage() {
  // Check if we're in draft/preview mode
  const { isEnabled: isInPreviewMode } = draftMode();
  
  // Get environment variables to display
  const spaceId = process.env.CONTENTFUL_SPACE_ID || 'Not configured';
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN ? 'Configured ' : 'Not configured ';
  const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN ? 'Configured ' : 'Not configured ';
  const previewSecret = process.env.CONTENTFUL_PREVIEW_SECRET ? 'Configured ' : 'Not configured ';

  return (
    <RetroSection className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center">Contentful Integration Test</h1>
        
        {/* Preview mode status */}
        <RetroCard className="mb-8">
          <h2 className="text-xl font-bold mb-4">Preview Mode Status</h2>
          <div className="flex items-center mb-4">
            <div className={`w-4 h-4 rounded-full mr-2 ${isInPreviewMode ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span>{isInPreviewMode ? 'Preview mode is ACTIVE' : 'Preview mode is NOT active'}</span>
          </div>
          
          {isInPreviewMode ? (
            <Link href="/api/preview/exit">
              <RetroButton variant="accent" className="mt-2">
                Exit Preview Mode
              </RetroButton>
            </Link>
          ) : (
            <p className="text-sm text-gray-600">
              To enable preview mode, visit: <code className="bg-gray-100 px-2 py-1 rounded">/api/preview?secret=secure-preview-token&slug=/blog/test-contentful</code>
            </p>
          )}
        </RetroCard>
        
        {/* Environment variables */}
        <RetroCard className="mb-8">
          <h2 className="text-xl font-bold mb-4">Environment Variables</h2>
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-semibold">CONTENTFUL_SPACE_ID</td>
                <td className="py-2">{spaceId}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">CONTENTFUL_ACCESS_TOKEN</td>
                <td className="py-2">{accessToken}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-semibold">CONTENTFUL_PREVIEW_ACCESS_TOKEN</td>
                <td className="py-2">{previewToken}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">CONTENTFUL_PREVIEW_SECRET</td>
                <td className="py-2">{previewSecret}</td>
              </tr>
            </tbody>
          </table>
        </RetroCard>
        
        {/* Instructions */}
        <RetroCard>
          <h2 className="text-xl font-bold mb-4">Testing Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Check the environment variables above - all should be configured.</li>
            <li>Try enabling preview mode by visiting <code className="bg-gray-100 px-2 py-1 rounded">/api/preview?secret=secure-preview-token&slug=/blog/test-contentful</code></li>
            <li>After enabling preview mode, you should be redirected back to this page with preview mode active.</li>
            <li>Visit the <Link href="/blog" className="text-accent-red underline">blog page</Link> to see if it loads correctly.</li>
            <li>When preview mode is active, you should see draft (unpublished) content on the blog.</li>
          </ol>
        </RetroCard>
        
        <div className="mt-8 text-center">
          <Link href="/blog">
            <RetroButton>
              Go to Blog
            </RetroButton>
          </Link>
        </div>
      </div>
    </RetroSection>
  );
}
