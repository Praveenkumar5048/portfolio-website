import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    imageSrc: string;
}

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
                <ExternalLink size={16} /> Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    );
};

export default ProjectCard;