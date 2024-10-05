import Layout from "@/components/layout";
import { projects } from "@/lib/projectData";
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

async function getProjectContent(slug: string) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  const fullPath = path.join(process.cwd(), 'public', project.contentFile);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  
  const { content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...project,
    contentHtml,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = await getProjectContent(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout lightMode>
      <div className="px-4 md:px-8 py-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div 
          className="prose prose-gray max-w-none font-calibri" 
          dangerouslySetInnerHTML={{ __html: project.contentHtml }} 
        />
      </div>
    </Layout>
  );
}