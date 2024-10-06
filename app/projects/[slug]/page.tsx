import Layout from "@/components/layout";
import { projects } from "@/lib/projectData";
import fs from 'fs/promises';
import path from 'path';
import styles from '../../../styles/contentPage.module.css'; 

async function getProjectContent(slug: string) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  const fullPath = path.join(process.cwd(), 'public', project.contentFile);
  const contentHtml = await fs.readFile(fullPath, 'utf8');

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
        <div className={styles.titleWrapper}>
          <h1 className="text-4xl font-bold mb-4 font-sans">{project.title}</h1>
        </div>
        <div className={styles.contentWrapper}>
          <div 
            className={`prose prose-lg prose-gray max-w-none font-sans ${styles.content}`}
            dangerouslySetInnerHTML={{ __html: project.contentHtml }} 
          />
        </div>
      </div>
    </Layout>
  );
}