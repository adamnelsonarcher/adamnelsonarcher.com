'use client';

import Layout from "@/components/layout";
import Link from "next/link";
import TypingAnimation from "@/components/ui/typing-animation";
import { projects } from "@/lib/projectData";
import FallbackImage from "@/components/FallbackImage";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24 mb-12"> {/* Added mb-12 for more space */}
          <TypingAnimation
            text="Projects/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ slug, title, description, thumbnailBase }: typeof projects[number]) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 flex h-48">
        <div className="w-2/5 relative">
          <FallbackImage
            src={`${thumbnailBase}.jpg`}
            fallbackSrc={`${thumbnailBase}.png`}
            gifSrc={`${thumbnailBase}.gif`}
            alt={title}
            width={300}
            height={225}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-3/5 p-6 flex flex-col justify-center font-calibri">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}