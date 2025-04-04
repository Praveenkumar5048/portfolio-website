
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">Praveen</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-gray-700 hover:text-portfolio-blue transition-colors">Home</a>
          <a href="#education" className="text-gray-700 hover:text-portfolio-blue transition-colors">Education</a>
          <a href="#projects" className="text-gray-700 hover:text-portfolio-blue transition-colors">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-portfolio-blue transition-colors">Skills</a>
        </nav>
        <div className="md:flex items-center hidden">
          <Button className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
