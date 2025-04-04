
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-portfolio-slate text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Get In Touch</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs coding or if you're looking to hire,
              feel free to reach out.
            </p>
            <a href="mailto:praveenkumarhireboodur@gmail.com" className="inline-flex items-center gap-2 text-portfolio-blue hover:underline">
              <Mail size={18} />
              contact@praveen.dev
            </a>
          </div>
          
          <div className="flex flex-col md:items-end">
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-bold">Get In Touch</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white" asChild>
                  <a href="https://github.com/Praveenkumar5048" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/github-f.svg" alt="github" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white" asChild>
                  <a href="https://www.linkedin.com/in/praveen-kumar-197953262/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin-f.svg" alt="linkedin" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-gray-600 text-gray-300 hover:text-white hover:border-white" asChild>
                  <a href="https://leetcode.com/u/Praveen_48/">
                    <img src="/icons/leetcode.svg" alt="leetcode" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Praveen. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
