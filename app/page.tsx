"use client";

import { FadeText } from "@/components/ui/fade-text";
import TypingAnimation from "@/components/ui/typing-animation";
import StarryBackground from "@/components/ui/starry-background";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import PulsatingButton from "@/components/ui/pulsating-button";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 800);
  const seeMoreOpacity = Math.max(0, 1 - scrollY / 200);

  return (
    <Layout showStarryBackground={true}>
      <div style={{ opacity }} className="absolute inset-0 z-0">
        <StarryBackground />
      </div>
      <div className="w-full px-4 flex flex-col items-center">
        <section id="landing" className="min-h-screen flex flex-col justify-center items-center text-center relative">
          <FadeText
            text="Adam Nelson-Archer"
            className="text-4xl md:text-7xl font-bold mb-4 md:mb-8 inline-block"
            framerProps={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.7 } }
            }}
          />
          <div className="text-white text-lg md:text-2xl mb-4 md:mb-8 w-full max-w-4xl">
            <TypingAnimation
              text="> Computer Science Undergraduate & Research Assistant at the University of Houston"
              duration={40}
              className="text-white text-center"
            />
          </div>
          <div className="flex space-x-4 relative z-20">
            <a 
              href="https://www.linkedin.com/in/adamnelsonarcher/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer"
            >
              <Image src="/images/linkedin_icon.png" alt="LinkedIn" width={24} height={24} className="mr-2" />
              LinkedIn
            </a>
            <a 
              href="https://github.com/adamnelsonarcher" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-center cursor-pointer"
            >
              <Image src="/images/github_icon.png" alt="GitHub" width={24} height={24} className="mr-2" />
              GitHub
            </a>
          </div>
          <div 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-lg flex flex-col items-center"
            style={{ opacity: seeMoreOpacity }}
          >
            <span>See More</span>
            <svg className="w-6 h-6 mt-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section id="featured" className="py-8 md:py-16 w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-center">Featured Projects and Work</h2>
          <div className="space-y-8 md:space-y-16">
            {[{
              title: "Issues with fiducial markers and image segmentation",
              date: "Blog Post - 9/4/24",
              description: "Exploring challenges in computer vision and image processing, focusing on fiducial markers and segmentation techniques.",
              link: "/blog/fiducial-markers",
              linkText: "",
              image: "/images/CVAT_fiducial.png",
              alt: "Fiducial markers"
            },
            {
              title: "\"An Investigation Into Synthesis of High-Fidelity Lunar Horizon Imagery\"",
              date: "Project - 2024",
              description: "Research project focused on generating realistic lunar horizon images for space exploration applications.",
              link: "/projects/lunar-horizon-imagery",
              linkText: "",
              image: "/images/lunarhorizonUI.png",
              alt: "Lunar horizon imagery"
            },
            {
              title: "Interactive Analysis of Reinforcement Learning in Multi-Agent Systems",
              date: "Project - 2023",
              description: "Exploring the complexities of reinforcement learning algorithms in environments with multiple agents.",
              link: "/projects/reinforcement-learning",
              linkText: "",
              image: "/images/gridworld.gif",
              alt: "Reinforcement Learning"
            }
            ].map((project, index) => (
              <Link 
                href={project.link}
                key={index}
                className="block relative bg-black p-6 rounded-lg shadow-lg group overflow-hidden transition-colors duration-300 ease-in-out hover:bg-gray-800"
              >
                <div className="flex flex-col md:flex-row items-start relative z-10">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={300}
                      height={200}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                    {project.date && <p className="text-gray-400 mb-2">{project.date}</p>}
                    <p className="mb-4 text-gray-300">{project.description}</p>
                    <span className="text-blue-400 group-hover:underline transition-colors duration-300">
                      {project.linkText}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section 
          id="cta" 
          className="py-8 md:py-16 w-full max-w-4xl text-center relative z-10"
          ref={ctaRef}
        >
          <div 
            className={`transition-opacity ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '4500ms' }} // Adjust this value as needed
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Want to see more? How about my</h2>
            <div className="flex justify-center space-x-4">
              <Link href="/projects" passHref>
                <span className="inline-block bg-black text-white px-6 py-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  Projects
                </span>
              </Link>
              <Link href="/resume" passHref>
                <span className="inline-block bg-black text-white px-6 py-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  Resume
                </span>
              </Link>
              <Link href="/blog" passHref>
                <span className="inline-block bg-black text-white px-6 py-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                  Blog
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}