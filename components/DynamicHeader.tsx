'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

interface DynamicHeaderProps {
  lightMode?: boolean;
}

export default function DynamicHeader({ lightMode }: DynamicHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-black bg-opacity-85 text-white shadow-md'
        : lightMode
          ? 'bg-white text-gray-900'
          : 'bg-transparent text-white'
    }`}>
      <Link href="/" className="text-2xl font-bold hover:text-blue-400">adamnelsonarcher.com</Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-lg hover:text-blue-400 transition-colors duration-200">Home</Link></li>
          <li><Link href="/blog" className="text-lg hover:text-blue-400 transition-colors duration-200">Blog</Link></li>
          <li><Link href="/projects" className="text-lg hover:text-blue-400 transition-colors duration-200">Projects</Link></li>
          <li><Link href="/resume" className="text-lg hover:text-blue-400 transition-colors duration-200">Resume</Link></li>
          <li><Link href="/publications" className="text-lg hover:text-blue-400 transition-colors duration-200">Publications</Link></li>
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
}