import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

interface LayoutProps {
  children: React.ReactNode;
  showStarryBackground?: boolean;
  lightMode?: boolean;
}

export default function Layout({ children, showStarryBackground, lightMode }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${
      showStarryBackground 
        ? 'bg-transparent' 
        : lightMode
          ? 'bg-gray-100 text-gray-900'
          : 'bg-[#2f3338] text-white'
    } font-mono relative`}>
      <header className={`p-4 flex justify-between items-center top-0 z-20 ${
        lightMode ? 'bg-white text-gray-900' : 'bg-black bg-opacity-30 backdrop-blur-sm text-white'
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

      <main className="flex-grow relative z-10">
        {children}
      </main>

      <footer className={`${
        lightMode ? 'bg-white text-gray-900' : 'bg-black bg-opacity-30 backdrop-blur-sm text-white'
      } text-center p-6 relative z-10`}>
        <p className="text-sm text-gray-300">
          Designed & built by Adam Nelson-Archer, {new Date().getFullYear()}
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/adamnelsonarcher" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github_icon.png" alt="GitHub" width={28} height={28} />
          </a>
          <a href="https://www.linkedin.com/in/adamnelsonarcher/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin_icon.png" alt="LinkedIn" width={28} height={28} />
          </a>
        </div>
      </footer>
    </div>
  );
}