
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Persona-Chatbot",
    date: "Apr 2025",
    description: "A chatbot enabling interaction with AI-powered movie characters via text and voice.",
    stack: ["Python", "FastAPI", "OpenAI APIs", "multilingual NLP"],
    github: "https://github.com/ajit7568/persona_chatbot1",
    demo: "https://persona-chatbot1.vercel.app",
    image: "/placeholder.svg"
  },
  {
    title: "Network Traffic Simulator",
    date: "Oct 2022 – Apr 2023",
    description: "ML pipeline for network anomaly detection using supervised and deep learning.",
    stack: ["ML/DL", "Python"],
    github: "https://github.com/ajit7568",
    image: "/placeholder.svg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-border hover:shadow-lg transition-all animate-fade-in">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p>{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/10 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
