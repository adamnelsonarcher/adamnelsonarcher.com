import Layout from "@/components/layout";
import { projects } from "@/lib/projectData";
import fs from 'fs/promises';
import path from 'path';
import styles from '../../../styles/contentPage.module.css';
import blogStyles from '../../blog/[slug]/blogPost.module.css';
import Link from 'next/link';
import { Fragment } from 'react';

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
        <div className={`${blogStyles.blogHeader} mb-8`}>
          <h1 className="text-5xl font-bold mb-4 font-calibri text-black">{project.title}</h1>
          <p className={`${blogStyles.blogDate} text-xl mb-4 font-mono`}>{project.subtitle}</p>
          <div className={`${blogStyles.blogLinks} text-lg font-mono`}>
            {project.urls && project.urls.map(([name, url], index) => (
              <Fragment key={name}>
                {index > 0 && <span className={blogStyles.linkSeparator}> | </span>}
                <Link href={url} className="custom-link-color hover:underline">
                  {name}
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
        <hr className="border-t border-gray-300 mb-8" />
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