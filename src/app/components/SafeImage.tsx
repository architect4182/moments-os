import React, { useState, useEffect } from 'react';

// Reliable base64 SVG fallback to guarantee it never fails if the network/URL is broken
const FALLBACK_IMAGE = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iODAwIiB2aWV3Qm94PSIwIDAgODAwIDgwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjNmNGY2IiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2U1ZTdlYiIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgZmlsbD0idXJsKCNnKSIgLz48cGF0aCBkPSJNMzIwIDQ4MGw4MC0xMjAgODAgMTAwIDEyMC0xNjAgMTYwIDIyMEg4MHoiIGZpbGw9IiNkMWQ1ZGIiIC8+PGNpcmNsZSBjeD0iMjgwIiBjeT0iMzIwIiByPSI0MCIgZmlsbD0iI2QxZDVkYiIgLz48L3N2Zz4=";

export interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function SafeImage({ src, alt, className = "", fallbackSrc = FALLBACK_IMAGE, ...props }: SafeImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const currentSrc = hasError ? fallbackSrc : src;

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} ${
        isLoading ? 'bg-black/10 animate-pulse text-transparent' : ''
      } ${hasError ? 'object-cover' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
}
