import Layout from "@/components/layout";
import TypingAnimation from "@/components/ui/typing-animation";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
}

export default function Publications() {
  const publications: Publication[] = [
    {
      title: "An Investigation Into Synthesis of High-Fidelity Lunar Horizon Imagery",
      authors: "Nelson-Archer, A., et al.",
      venue: "Journal of Space Exploration",
      year: 2024,
      link: "#"
    },
    // Add more publications here
  ];

  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24"> {/* Fixed height container for the title */}
          <TypingAnimation
            text="Publications/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function PublicationCard({ title, authors, venue, year, link }: Publication) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        <a href={link} className="hover:underline">{title}</a>
      </h2>
      <p className="text-gray-700 text-sm">{authors}</p>
      <p className="text-gray-600 text-sm">{venue}, {year}</p>
    </div>
  );
}