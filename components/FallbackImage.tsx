'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';

interface FallbackImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc: string;
  gifSrc?: string;
}

export default function FallbackImage({ src, fallbackSrc, gifSrc, alt, ...props }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const tryLoadImage = async (url: string) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadImage = async () => {
      const formats = [src, fallbackSrc, gifSrc].filter(Boolean) as string[];
      for (const format of formats) {
        if (await tryLoadImage(format)) {
          setImgSrc(format);
          break;
        }
      }
    };

    loadImage();
  }, [src, fallbackSrc, gifSrc]);

  if (!imgSrc) {
    return <div className="w-full h-full bg-gray-300 flex items-center justify-center">{alt}</div>;
  }

  if (imgSrc.endsWith('.gif')) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        {...props}
        className={`${props.className || ''} w-full h-full object-cover`}
      />
    );
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
    />
  );
}