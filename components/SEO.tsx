
import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image, 
  canonical 
}) => {
  const siteTitle = 'NEKO Yachts';
  const defaultTitle = 'NEKO Yachts | The Correction';
  const defaultDescription = 'The world didn\'t need another catamaran. It needed a better one. Discover the NEKO 19: Aviation-grade engineering meets sustainable luxury. Arriving 2027.';
  const defaultImage = 'https://coolcatamaran.com/images/neko19/mysterycat3.png';
  const siteUrl = 'https://www.nekoyachts.com';

  const fullTitle = title ? `${title} | ${siteTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
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

    // Update Standard Meta
    updateMeta('meta[name="description"]', 'content', metaDescription);

    // Update Open Graph
    updateMeta('meta[property="og:title"]', 'content', fullTitle);
    updateMeta('meta[property="og:description"]', 'content', metaDescription);
    updateMeta('meta[property="og:image"]', 'content', metaImage);
    updateMeta('meta[property="og:url"]', 'content', canonicalUrl);

    // Update Twitter
    updateMeta('meta[property="twitter:title"]', 'content', fullTitle);
    updateMeta('meta[property="twitter:description"]', 'content', metaDescription);
    updateMeta('meta[property="twitter:image"]', 'content', metaImage);

    // Update Canonical Link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

  }, [fullTitle, metaDescription, metaImage, canonicalUrl]);

  return null;
};

export default SEO;
