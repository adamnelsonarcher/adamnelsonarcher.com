import Layout from "@/components/layout";
import { blogPosts } from "@/lib/blogData";
import fs from 'fs/promises';
import path from 'path';
import styles from '../../../styles/contentPage.module.css'; // Updated path

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
      <div className="px-4 md:px-8 py-8">
        <div className={styles.titleWrapper}>
          <h1 className="text-4xl font-bold mb-2 font-sans">{post.title}</h1>
          <p className="text-gray-600 mb-8 font-mono">{post.date}</p>
        </div>
        <div className={styles.contentWrapper}>
          <div 
            className={`prose prose-lg prose-gray max-w-none font-sans ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
          />
        </div>
      </div>
    </Layout>
  );
}