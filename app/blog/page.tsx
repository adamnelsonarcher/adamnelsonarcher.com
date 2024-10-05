'use client';

import Layout from "@/components/layout";
import Link from "next/link";
import TypingAnimation from "@/components/ui/typing-animation";
import { blogPosts } from "@/lib/blogData";
import FallbackImage from "@/components/FallbackImage";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24 mb-12"> {/* Added mb-12 for more space */}
          <TypingAnimation
            text="Blog/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <div className="space-y-6 max-w-4xl">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <BlogPost {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function BlogPost({ slug, title, date, thumbnailBase }: typeof blogPosts[number]) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 flex h-48">
        <div className="w-48 h-48 relative flex-shrink-0">
          <FallbackImage
            src={`${thumbnailBase}.jpg`}
            fallbackSrc={`${thumbnailBase}.png`}
            gifSrc={`${thumbnailBase}.gif`}
            alt={title}
            width={192}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow p-6 flex flex-col justify-center font-calibri">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm">{date}</p>
        </div>
      </div>
    </Link>
  );
}