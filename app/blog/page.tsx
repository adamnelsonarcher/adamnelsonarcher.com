import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  link: string;
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      image: "/images/ai-headshot.jpg",
      title: "Creating AI Headshots (without paying anything)",
      date: "September 24, 2024",
      link: "/blog/ai-headshots"
    },
    {
      image: "/images/fiducial-markers.jpg",
      title: "Issues with fiducial markers and image segmentation",
      date: "September 4, 2024",
      link: "/blog/fiducial-markers"
    },
    // Add more blog posts here
  ];

  return (
    <Layout>
      <h1 className="text-6xl font-bold mb-16">Blog/</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </Layout>
  );
}

function BlogPost({ image, title, date, link }: BlogPost) {
  return (
    <div className="mb-8">
      <Image src={image} alt={title} width={600} height={400} className="mb-4 rounded-lg" />
      <h2 className="text-2xl font-bold mb-2">
        <Link href={link} className="hover:text-blue-400">
          {title}
        </Link>
      </h2>
      <p className="text-gray-400">{date}</p>
    </div>
  );
}