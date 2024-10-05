import Layout from "@/components/layout";
import { blogPosts } from "@/lib/blogData";
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

async function getPostContent(slug: string) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;

  const fullPath = path.join(process.cwd(), 'public', post.contentFile);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  
  const { content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...post,
    contentHtml,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostContent(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Layout lightMode>
      <div className="px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.date}</p>
        <div 
          className="prose prose-gray max-w-none font-calibri" 
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </div>
    </Layout>
  );
}