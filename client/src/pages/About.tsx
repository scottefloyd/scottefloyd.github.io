import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { skills } from "@/data/portfolio";

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);

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

    if (aboutRef.current) {
      const fadeElements = aboutRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter bg-neutral text-text min-h-screen">
      <Navigation />
      
      <section ref={aboutRef} className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">About Me</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a passionate UX/UI Designer with a unique background in QA Automation Development. 
                  This technical foundation gives me a deep understanding of both user needs and implementation constraints.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  As a recent graduate of DevMountain's UX Design Bootcamp, I bring fresh perspectives to 
                  user research, design thinking, and creating intuitive digital experiences.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  My approach combines empathy-driven design with technical feasibility, ensuring that beautiful 
                  designs can be implemented effectively while solving real user problems.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Design Skills</h4>
                    <ul className="text-gray-600 space-y-1">
                      {skills.design.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Technical Skills</h4>
                    <ul className="text-gray-600 space-y-1">
                      {skills.technical.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                  alt="UX designer workspace" 
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            <div className="mt-16 fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6">My Journey</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Technical Foundation</h4>
                  <p className="text-gray-600">Started as a QA Automation Developer, gaining deep understanding of software development and user testing.</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Design Education</h4>
                  <p className="text-gray-600">Completed intensive UX Design Bootcamp at DevMountain, learning design thinking and research methodologies.</p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Design Practice</h4>
                  <p className="text-gray-600">Applying both technical knowledge and design skills to create user-centered solutions that work in the real world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
