import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('./DynamicHeader'), { ssr: false });

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
      <DynamicHeader lightMode={lightMode} />

      <main className="flex-grow relative z-10 pt-16"> {/* Added padding-top to account for fixed header */}
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