'use client';

import { useEffect } from 'react';
import { initCarousels } from '../public/js/imageCarousel';
import styles from '../styles/contentPage.module.css';

interface BlogPostContentProps {
  title: string;
  date: string;
  contentHtml: string;
}

export default function BlogPostContent({ title, date, contentHtml }: BlogPostContentProps) {
  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <div className="px-4 md:px-8 py-8">
      <div className={styles.titleWrapper}>
        <h1 className="text-4xl font-bold mb-2 font-sans">{title}</h1>
        <p className="text-gray-600 mb-8 font-mono">{date}</p>
      </div>
      <div className={styles.contentWrapper}>
        <div 
          className={`prose prose-lg prose-gray max-w-none font-sans ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </div>
    </div>
  );
}