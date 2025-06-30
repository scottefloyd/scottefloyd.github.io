import { useEffect, useRef } from "react";
import { Palette, Search, Code } from "lucide-react";

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (skillsRef.current) {
      const fadeElements = skillsRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Design",
      icon: <Palette className="w-8 h-8" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      skills: [
        { name: "UI/UX Design", level: 5 },
        { name: "Prototyping", level: 5 },
        { name: "Visual Design", level: 4 },
      ]
    },
    {
      title: "Research",
      icon: <Search className="w-8 h-8" />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      skills: [
        { name: "User Research", level: 5 },
        { name: "Usability Testing", level: 4 },
        { name: "Task Analysis", level: 5 },
      ]
    },
    {
      title: "Technical",
      icon: <Code className="w-8 h-8" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      skills: [
        { name: "QA Automation", level: 5 },
        { name: "HTML/CSS", level: 4 },
        { name: "JavaScript", level: 3 },
      ]
    }
  ];

  const tools = [
    "Figma", "Sketch", "Adobe XD", "InVision", "Miro", "Selenium", "Jira", "Git"
  ];

  const renderSkillDots = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot <= level ? 'bg-current' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={skillsRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional user experiences from research 
            to final implementation.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="text-center fade-in">
              <div className={`${category.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <div className={category.iconColor}>
                  {category.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <div className={category.iconColor}>
                      {renderSkillDots(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Software</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white rounded-full text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}