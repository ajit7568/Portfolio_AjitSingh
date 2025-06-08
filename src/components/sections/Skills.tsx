
import SectionTitle from "../SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Github, 
  Globe, 
  Cpu, 
  Languages
} from "lucide-react";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    category: "AI/ML Frameworks",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["Prompt Engineering", "Scikit-learn", "TensorFlow", "PyTorch (basic)"],
  },
  {
    category: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    skills: ["HTML", "CSS", "Git", "Figma"],
  },
  {
    category: "Databases",
    icon: <Database className="h-5 w-5" />,
    skills: ["DBMS", "SQL"],
  },
  {
    category: "AI Tools",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["OpenAI API", "Hugging Face", "Google Colab"],
  },
  {
    category: "Languages",
    icon: <Languages className="h-5 w-5" />,
    skills: ["English", "Hindi (Full Professional)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Skills" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-md transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="px-2 py-1 bg-background rounded-md text-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
