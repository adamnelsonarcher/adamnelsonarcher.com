import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import TypingAnimation from "@/components/ui/typing-animation";

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
      title: "MoonGAN v1",
      description: "2024: In Progress",
      link: "/projects/lunar-horizon-imagery"
    },
    {
      image: "/images/reinforcement-learning.jpg",
      title: "Ping Pong Pi",
      description: "2024 - Interactive game scoreboard",
      link: "/projects/reinforcement-learning"
    },
    {
      image: "/images/synthetic-lunar.jpg",
      title: "Synthetic Lunar Horizon Images",
      description: "2024 - Generating realistic landscapes",
      link: "/projects/synthetic-lunar"
    },
    {
      image: "/images/multi-agent-rl.jpg",
      title: "RL in Multi-Agent Systems",
      description: "2024 - GUI for SARSA and Q-learning",
      link: "/projects/multi-agent-rl"
    },
    // Add more projects here
  ];

  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24"> {/* Fixed height container for the title */}
          <TypingAnimation
            text="Projects/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <p className="mb-8 text-gray-400">{">"} click on any project to see more</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function ProjectCard({ image, title, description, link }: Project) {
  return (
    <Link href={link} className="block">
      <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 h-full">
        <div className="flex">
          <div className="w-1/3">
            <Image src={image} alt={title} width={200} height={150} className="w-full h-full object-cover" />
          </div>
          <div className="w-2/3 p-4">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}