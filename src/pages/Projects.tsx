import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/lib/projects';
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
   
    const scrollThreshold = window.innerHeight * 0.3; // Show after 30% of screen height
    
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Calculate initial state
    handleScroll()
    
    // Clean up the event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <Link to="/" className="self-start mb-8">
            <Button variant="ghost" className="text-white flex items-center border-2 gap-2 bg-portfolio-blue hover:bg-white hover:text-black hover:border-portfolio-blue transition-all duration-300"
            >
              <ArrowLeft size={16} /> Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All <span className="gradient-text">Projects</span></h1>
          <p className="text-center text-gray-600 max-w-2xl">
            Browse through my complete portfolio of web development projects showcasing my skills and experience.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Scroll to top button - only visible when scrolled down */}
      {showScrollButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={scrollToTop}
            className="rounded-full h-12 w-12 flex items-center justify-center bg-portfolio-blue text-white hover:bg-portfolio-purple shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;