'use client'; // This indicates that this component is a Client Component

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function GeneratedPage() {
  const searchParams = useSearchParams();
  const markdown = searchParams.get('markdown'); // Retrieve markdown from search params
  const [copied, setCopied] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleCopy = () => {
    navigator.clipboard.writeText(decodeURIComponent(markdown)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Clear the copied message after 2 seconds
    });
  };

  const handleGoBack = () => {
    router.push('/'); // Navigate back to the homepage
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items vertically
      minHeight: '100vh', // Take full viewport height
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', gap: '10px' }}> {/* Flexbox for horizontal layout */}
        <button onClick={handleCopy} style={{ padding: '10px 15px' }}>
          Copy to Clipboard
        </button>
        <button onClick={handleGoBack} style={{ padding: '10px 15px' }}>
          Generate Again
        </button>
      </div>
      {copied && <p style={{ color: 'green', marginTop: '10px' }}>Copied to clipboard!</p>}
      <h1>Your Generated Markdown</h1>
      {markdown ? (
        <pre style={{
          background: '#f4f4f4', 
          padding: '10px', 
          marginBottom: '20px', 
          borderRadius: '5px',
          width: '100%', // Make pre full width
          maxHeight: '70vh', // Limit height to 70% of viewport height
          overflowY: 'auto', // Enable vertical scrolling
          whiteSpace: 'pre-wrap', // Wrap text to prevent overflow
        }}>
          {decodeURIComponent(markdown)} {/* Decode to display properly */}
        </pre>
      ) : (
        <p>No markdown content generated.</p>
      )}
    </div>
  );
}
