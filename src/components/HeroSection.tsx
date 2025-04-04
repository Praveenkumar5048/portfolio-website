
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import lottie from 'lottie-web';

const HeroSection = () => {
  const animationContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: "/lottie/hero-section3.json"
      });
      
      return () => anim.destroy();
    }
  }, []);

  return (
    <section id="home" className="section min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              Hey, I'm <span className="gradient-text">Praveen</span>.
              <br />I enjoy building for the web.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Passionate developer crafting beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white" asChild>
                <a href="#projects">See My Work</a>
              </Button>
              <Button variant="outline" className="border-gray-300" asChild>
                <a href="https://drive.google.com/file/d/11bVvNNbpnV-tlbkOnyMvBLXvgwEakC2b/view?usp=sharing">My Resume</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div ref={animationContainer} className="w-full max-w-xl h-80 md:h-96"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
