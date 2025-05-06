import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold gradient-text">Praveen</span>
        </div>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown - Note the position and display classes */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
                onClick={handleLinkClick}
              >
                Home
              </a>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
                onClick={handleLinkClick}
              >
                Education
              </a>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
                onClick={handleLinkClick}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-portfolio-blue transition-colors py-2"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <div className="pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white" 
                  asChild
                  onClick={handleLinkClick}
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;