import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section ref={aboutRef} id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="UX designer workspace with wireframes" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Journey</h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My transition from QA automation to UX design has given me a unique 
              perspective on creating user experiences that are both beautiful and 
              functional. I understand the importance of testing and validation in the 
              design process.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Through my bootcamp at DevMountain, I've developed strong skills in user 
              research, prototyping, and visual design, always keeping the user at the 
              center of every decision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <Button 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
              onClick={() => window.open('https://scottefloyd.github.io/assets/resume.pdf', '_blank')}
            >
              <Download size={20} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}