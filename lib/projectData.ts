export interface Project {
  slug: string;
  title: string;
  description: string;
  thumbnailBase: string;  // Change this from thumbnail to thumbnailBase
  contentFile: string;
}

export const projects: Project[] = [
  {
    slug: "moongan-v1",
    title: "MoonGAN v1",
    description: "2024: In Progress - Generating realistic lunar surface images using GANs.",
    thumbnailBase: "/projects/moongan-v1/thumbnail",
    contentFile: "/projects/moongan-v1/content.html",
  },
  {
    slug: "synthetic-lunar-horizon-images",
    title: "Generating Synthetic Lunar Horizon Images",
    description: "2024 - A look into the foundations and procedures required to generate realistic landscape imagery.",
    thumbnailBase: "/projects/synthetic-lunar-horizon-images/thumbnail",
    contentFile: "/projects/synthetic-lunar-horizon-images/content.html",
  },
  {
    slug: "ping-pong-pi",
    title: "Ping Pong Pi",
    description: "2024 - Built on a Raspberry Pi, this is a fun, interactive game scoreboard for a group of people to track ping pong stats.",
    thumbnailBase: "/projects/ping-pong-pi/thumbnail",
    contentFile: "/projects/ping-pong-pi/content.html",
  },
  {
    slug: "reinforcement-learning-multi-agent",
    title: "Interactive Analysis of Reinforcement Learning in Multi-Agent Systems",
    description: "2024 - A built-out GUI for tweaking and playing with SARSA and Q-learning strategies",
    thumbnailBase: "/projects/reinforcement-learning-multi-agent/thumbnail",
    contentFile: "/projects/reinforcement-learning-multi-agent/content.html",
  },
  {
    slug: "cpu-cycle-simulator",
    title: "CPU Cycle Simulator",
    description: "2023 - A low-level simulation of round robin cycle scheduling.",
    thumbnailBase: "/projects/cpu-cycle-simulator/thumbnail",
    contentFile: "/projects/cpu-cycle-simulator/content.html",
  },
  {
    slug: "generalized-constraint-satisfaction",
    title: "Generalized Constraint Satisfaction",
    description: "2023 - Given a set number of relational constraints, this project will efficiently find values that are valid.",
    thumbnailBase: "/projects/generalized-constraint-satisfaction/thumbnail",
    contentFile: "/projects/generalized-constraint-satisfaction/content.html",
  },
];