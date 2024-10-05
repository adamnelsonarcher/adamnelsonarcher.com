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
  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24 mb-12"> {/* Added mb-12 for more space */}
          <TypingAnimation
            text="Publications/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        {/* ... rest of the publications content ... */}
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