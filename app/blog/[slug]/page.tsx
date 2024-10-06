import Layout from "@/components/layout";
import { blogPosts } from "@/lib/blogData";
import fs from 'fs/promises';
import path from 'path';
import BlogPostContent from '@/components/BlogPostContent';

async function getPostContent(slug: string) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;

  const fullPath = path.join(process.cwd(), 'public', post.contentFile);
  const contentHtml = await fs.readFile(fullPath, 'utf8');

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
      <BlogPostContent 
        title={post.title}
        date={post.date}
        contentHtml={post.contentHtml}
      />
    </Layout>
  );
}