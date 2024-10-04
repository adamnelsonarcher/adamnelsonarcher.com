import Layout from "@/components/layout";
import Link from "next/link";
import TypingAnimation from "@/components/ui/typing-animation";
import { blogPosts } from "@/lib/blogData";
import FallbackImage from "@/components/FallbackImage";

export default function Blog() {
  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24"> {/* Fixed height container for the title */}
          <TypingAnimation
            text="Blog/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <div className="space-y-6 max-w-4xl">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function BlogPost({ slug, title, date, thumbnailBase }: typeof blogPosts[number]) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105">
        <div className="flex items-center">
          <div className="w-1/4">
            <FallbackImage
              src={`${thumbnailBase}.jpg`}
              fallbackSrc={`${thumbnailBase}.png`}
              alt={title}
              width={200}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-3/4 p-4">
            <h2 className="text-xl mb-2 text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm">{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}