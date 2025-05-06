import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

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
        <Card className="overflow-hidden border-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white border-portfolio-purple/80">

        <div className="relative h-52 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
        </div>
        <CardHeader className="pb-2 pt-4">
          <CardTitle className="text-xl font-bold text-gray-800 flex items-center group">
            {title}
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow pb-3">
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-medium text-xs px-2 py-0.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-4" />
        <CardFooter className="flex gap-3 pt-3">
          {githubUrl && (
            <Button size="sm" variant="outline" className="gap-1.5 border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github size={15} /> 
                <span>Code</span>
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button 
              size="sm" 
              className="gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-sm" 
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink size={15} /> 
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
      
    );
};

export default ProjectCard;