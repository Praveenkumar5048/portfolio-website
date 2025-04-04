
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router-dom'; 
import { projects } from '@/lib/projects';
import ProjectCard from "./ProjectCard";


const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Here's a selection of projects that showcase my skills and expertise in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0,3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            asChild 
            variant="outline" 
            className="text-lg text-white py-6 px-8 w-full sm:w-1/2 flex items-center justify-center gap-2 border-2 rounded-xl bg-portfolio-blue hover:bg-white hover:text-black hover:border-portfolio-blue transition-all duration-300"
          >
            <Link to="/projects">
              View Other Projects <ArrowRight size={20} />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
