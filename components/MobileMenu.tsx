"use client";

import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-48 py-2 mt-2 bg-gray-800 rounded-md shadow-xl z-20">
          <Link href="/" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blog" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/projects" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/resume" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Resume</Link>
          <Link href="/publications" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Publications</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;