import { useEffect, useRef } from "react";
import { skills } from "@/data/portfolio";

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

  const allSkills = [
    { name: "User Research", category: "UX", level: 90 },
    { name: "Wireframing", category: "UX", level: 95 },
    { name: "Prototyping", category: "UX", level: 88 },
    { name: "Usability Testing", category: "UX", level: 92 },
    { name: "QA Automation", category: "Technical", level: 95 },
    { name: "Front-end Development", category: "Technical", level: 85 },
    { name: "Design Systems", category: "Technical", level: 80 },
    { name: "Accessibility", category: "Technical", level: 87 },
  ];

  return (
    <section ref={skillsRef} id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique blend of design thinking and technical expertise, enabling me to bridge 
            the gap between beautiful design and functional implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* UX Design Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">UX Design</h3>
            <div className="space-y-6">
              {allSkills.filter(skill => skill.category === "UX").map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical</h3>
            <div className="space-y-6">
              {allSkills.filter(skill => skill.category === "Technical").map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20 fade-in">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Design Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
              <p className="text-gray-600 text-sm">Understanding user needs and business goals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Ideate</h4>
              <p className="text-gray-600 text-sm">Brainstorming and conceptualizing solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Creating wireframes and high-fidelity prototypes</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Test</h4>
              <p className="text-gray-600 text-sm">Validating designs through user testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}