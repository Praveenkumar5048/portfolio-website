import React from "react";
import { programmingSkills, frameworkSkills, toolsSkills } from "../lib/skills";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group">
            <div className="bg-white p-4 rounded-xl shadow-md w-20 h-20 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          I've worked with a variety of technologies across the full stack, with particular expertise in modern JavaScript frameworks.
        </p>

        <div className="max-w-4xl mx-auto space-y-12">
          <SkillCategory title="Programming Languages" skills={programmingSkills} />
          <SkillCategory title="Frameworks/Libraries" skills={frameworkSkills} />
          <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
