import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  jsonLd?: object;
}

export default function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add JSON-LD if provided
    if (jsonLd) {
      const scriptId = 'jsonld-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      if (jsonLd) {
        const script = document.getElementById('jsonld-schema');
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, jsonLd]);

  return null;
}
