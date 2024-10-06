export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  thumbnailBase: string;  // This will be the base path without the file extension
  contentFile: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-headshots",
    title: "Creating AI Headshots (without paying anything)",
    date: "September 24, 2024",
    thumbnailBase: "/blog/ai-headshots/thumbnail",
    contentFile: "/blog/ai-headshots/content.html",
  },
  {
    slug: "fiducial-markers",
    title: "Issues with fiducial markers and image segmentation",
    date: "September 4, 2024",
    thumbnailBase: "/blog/fiducial-markers/thumbnail",
    contentFile: "/blog/fiducial-markers/content.html",
  },
  // Add more blog posts here
];