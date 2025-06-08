
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import { 
  Book, 
  Globe, 
  Heart, 
  Music 
} from "lucide-react";

export default function About() {
  // Define interests with icons for better visibility
  const interests = [
    { name: "World Affairs", icon: Globe },
    { name: "AI Vlogs", icon: Book },
    { name: "Travel", icon: Heart },
    { name: "Sports", icon: Music },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="About Me" />
        
        <div className="space-y-4 animate-fade-in">
          <p className="text-lg">
            I am an AI Enthusiast with hands-on experience in Python, Prompt Engineering, 
            and Generative AI. I've built and deployed real-world AI applications, 
            including a multi-modal persona chatbot. With a strong foundation in ML/DL concepts, 
            I'm eager to contribute to AI product development, consulting, and GenAI research.
          </p>
          
          <h3 className="text-xl font-semibold mt-6">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <interest.icon className="h-4 w-4" />
                <span>{interest.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button asChild>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Download Resume
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="ml-2 h-4 w-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
