
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageSrc: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Virtual MediQueue",
    description: "A web application for managing doctor appointments, virtual queues, and real-time updates using WebSocket integration.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/Praveenkumar5048/Virtual-Queue",
    demoUrl: "",
    imageSrc: "/images/vr-medi.png"
  },
  {
    title: "FundVerify",
    description: "Automated Decentralised Government Fund Allocation and AI Verification.",
    technologies: ["TypeScript", "Tailwind CSS", "Solidity", "Python"],
    githubUrl: "https://github.com/Praveenkumar5048/Public-Fund-Management",
    demoUrl: "https://www.youtube.com/watch?v=mUQlpHkGYsg",
    imageSrc: "/images/FundVerfiy.png"
  },
  {
    title: "AI Image Generator",
    description: "An application that generates custom images based on user descriptions using AI models.",
    technologies: ["Python", "React", "TensorFlow", "Flask"],
    githubUrl: "https://github.com/praveen/ai-image-gen",
    demoUrl: "https://ai-image-gen-demo.com",
    imageSrc: "/placeholder.svg"
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  demoUrl, 
  imageSrc 
}) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        {githubUrl && (
          <Button size="sm" variant="outline" className="gap-1" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" className="gap-1 bg-portfolio-blue hover:bg-portfolio-indigo" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Here's a selection of projects that showcase my skills and expertise in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
