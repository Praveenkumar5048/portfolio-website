import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {GraduationCap, Calendar, MapPin } from "lucide-react";
import lottie from "lottie-web";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
}

const educationData: EducationItem[] = [
  {
    institution: "National Institute of Technology Karnataka",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    period: "December 2022 - May 2026",
    location: "Surathkal, Karnataka",
  },
];

const EducationSection = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/lottie/education.json", 
      });
      return () => anim.destroy();
    }
  }, []);

  return (
    <section id="education" className="section bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">My <span className="gradient-text">Education</span></h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          My academic background has equipped me with strong theoretical knowledge and practical skills in computer science and engineering.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Lottie Animation on Left */}
          <div className="flex justify-center lg:justify-start">
            <div ref={animationContainer} className="w-full max-w-md h-80 md:h-96"></div>
          </div>

          {/* Education Cards on Right */}
          <div className="flex flex-col gap-6">
            {educationData.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16">
                      <img src="/images/NITK-logo.png" alt="NITK Logo" className="w-full h-auto object-contain" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.institution}</h3>
                      <p className="text-gray-700 font-medium">{item.degree}</p>
                      
                      <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-gray-500">
                          <GraduationCap size={16} />
                          <span>{item.field}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={16} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <MapPin size={16} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;