import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      image: "/images/lunarhorizonUI.png",
      title: "An Investigation Into Synthesis of High-Fidelity Lunar Horizon Imagery",
      description: "Research project focused on generating realistic lunar horizon images for space exploration applications.",
      link: "/projects/lunar-horizon-imagery"
    },
    {
      image: "/images/reinforcement-learning.jpg",
      title: "Interactive Analysis of Reinforcement Learning in Multi-Agent Systems",
      description: "Exploring the complexities of reinforcement learning algorithms in environments with multiple agents.",
      link: "/projects/reinforcement-learning"
    },
    // Add more projects here
  ];

  return (
    <Layout>
      <h1 className="text-6xl font-bold mb-16">Projects/</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Layout>
  );
}

function ProjectCard({ image, title, description, link }: Project) {
  return (
    <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
        <Image src={image} alt={title} width={300} height={200} className="rounded-lg" />
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Link href={link} className="text-blue-400 hover:underline">View project page</Link>
      </div>
    </div>
  );
}