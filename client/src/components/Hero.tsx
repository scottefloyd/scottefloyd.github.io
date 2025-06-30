import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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

    if (heroRef.current) {
      const fadeElements = heroRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={heroRef} 
      id="hero" 
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img 
              src="https://scottefloyd.github.io/images/me2.png" 
              alt="Scott Floyd Professional Headshot" 
              className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hello, I'm <span className="text-blue-400">Scott Floyd</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4">
          UX/UI Designer & QA Automation Developer
        </p>
        
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Graduate of top UX Design and Development Bootcamps. Passionate about 
          advocating for end-users and collaborating with development teams.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-lg"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-white text-gray-900 border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://www.linkedin.com/in/scottefloyd/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://github.com/scottefloyd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
