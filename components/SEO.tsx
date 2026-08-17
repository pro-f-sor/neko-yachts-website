import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  schema?: Record<string, any>; // New prop for JSON-LD
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  canonical,
  schema
}) => {
  const siteTitle = 'NEKO Catamarans';
  const defaultTitle = 'NEKO Catamarans | Performance Multihulls';
  const defaultDescription = 'The world didn\'t need another catamaran. It needed a better one. Discover the NEKO 19: Aviation-grade engineering meets sustainable luxury. Arriving 2027.';
  const defaultImage = '/images/neko19/mysterycat3.png';
  const siteUrl = 'https://www.nekoyachts.com';

  const fullTitle = title ? `${title} | ${siteTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  // Ensure canonical uses path, not query
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${window.location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to update or create meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        // Extract name or property from selector for creation (simplified)
        const nameMatch = selector.match(/name="([^"]+)"/);
        const propertyMatch = selector.match(/property="([^"]+)"/);
        
        if (nameMatch) element.setAttribute('name', nameMatch[1]);
        if (propertyMatch) element.setAttribute('property', propertyMatch[1]);
        
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update Meta Tags
    updateMeta('meta[name="description"]', 'content', metaDescription);
    updateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateMeta('meta[property="og:description"]', 'content', metaDescription);
    updateMeta('meta[property="og:image"]', 'content', metaImage);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);
    updateMeta('meta[property="twitter:title"]', 'content', fullTitle);
    updateMeta('meta[property="twitter:description"]', 'content', metaDescription);
    updateMeta('meta[property="twitter:image"]', 'content', metaImage);

    // 4. Update Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // 5. Inject JSON-LD Schema
    let script = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schema);
    } else if (script) {
        // Remove schema if not provided for this page
        script.remove();
    }

    // Cleanup function
    return () => {
        // Optional cleanup
    };

  }, [fullTitle, metaDescription, metaImage, canonicalUrl, schema]);

  return null;
};

export default SEO;