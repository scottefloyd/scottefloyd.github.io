import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-secondary font-medium mb-4">Hello, I'm Scott Floyd</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              UX/UI Designer
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              QA Automation Developer | Recent Graduate of a <strong>UX Design Bootcamp</strong> at DevMountain. 
              I create meaningful digital experiences through user-centered design and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToWork}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                View My Work
              </Button>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="border border-secondary text-secondary px-8 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-colors duration-200"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="fade-in lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Scott Floyd - UX/UI Designer" 
              className="w-80 h-80 rounded-2xl shadow-2xl mx-auto lg:ml-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
