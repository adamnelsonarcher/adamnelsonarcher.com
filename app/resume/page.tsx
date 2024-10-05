import Layout from "@/components/layout";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Resume() {
  return (
    <Layout>
      <div className="px-4 md:px-8 py-8">
        <div className="h-24 mb-12"> {/* Added mb-12 for more space */}
          <TypingAnimation
            text="Resume/"
            className="text-4xl md:text-6xl font-bold"
            showUnderscore={false}
          />
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Education</h2>
          <p>Your education details here...</p>

          <h2>Experience</h2>
          <p>Your work experience details here...</p>

          <h2>Skills</h2>
          <ul>
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
          </ul>

          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
}