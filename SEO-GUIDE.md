# SEO Guide for We Market Fence

This guide provides best practices for maintaining and improving the SEO of the We Market Fence website.

## Page Structure & Content

### Meta Data
- Every page should have unique:
  - Title (60-70 characters)
  - Description (150-160 characters)
  - Keywords (relevant to the page content)
- Create metadata.ts files in each page directory following our established pattern

### Content Structure
- Use proper heading hierarchy (H1 → H2 → H3)
- Include primary keyword in H1 heading
- Use only one H1 per page
- Include keywords naturally in subheadings
- First paragraph should include main keywords
- Aim for 800+ words of valuable content on key pages

### Images
- Always use the SEOImage component we created
- Provide descriptive alt text (critical for SEO and accessibility)
- Keep filenames descriptive with hyphens (e.g., fence-marketing-process.jpg)
- Compress images before uploading (use tools like TinyPNG)
- Consider adding title attributes for additional context

## Technical SEO Elements

### Internal Linking
- Link between related pages on the site
- Use descriptive anchor text (not "click here")
- Add breadcrumbs to all pages using our Breadcrumb component
- Consider adding a related content section at the bottom of articles

### Structured Data
- Use our JSON-LD components for:
  - LocalBusiness (on site-wide layout)
  - BreadcrumbList (using our Breadcrumb component)
  - FAQ (using our FAQ component)
  - Service (for service pages)
- Test structured data using Google's Rich Results Test

### Performance
- Keep Core Web Vitals scores high:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- Use priority attribute on hero images
- Use Next.js Image component for automatic optimization
- Minimize third-party scripts

## Content Strategy

### Keyword Research
- Focus on fence marketing related terms:
  - "fence company marketing"
  - "fence contractor website"
  - "fence business leads"
  - "fencing company SEO"
  - Location-specific terms (when appropriate)
- Include long-tail keywords in blog posts

### Content Updates
- Regularly refresh existing content
- Add FAQs to key pages using our FAQSection component
- Create blog posts around relevant topics
- Include testimonials and case studies

### Local SEO
- For any location-specific pages:
  - Include city name in title, headings, and content
  - Add location schema markup
  - Consider creating separate pages for major service areas

## Monitoring & Improvement

### Analytics
- Monitor traffic using Google Analytics
- Set up conversion goals for:
  - Contact form submissions
  - Lead magnet downloads
  - Quote requests
- Track keyword rankings

### Regular Audits
- Quarterly site audits for:
  - Broken links
  - Missing meta data
  - Performance issues
  - Content gaps

### Updates
- Keep sitemap.ts updated with new pages
- Update robots.ts if adding sections that should be excluded
- Test all changes in search console

## Remember Our Style

While implementing SEO best practices, always maintain our retro/neo-brutalist style:
- Bold typography with uppercase headings
- Strong border weights (border-4)
- Consistent shadow styling
- Accent colors per our design system

This guide will help ensure our SEO efforts align with both search engine best practices and our unique brand identity.
