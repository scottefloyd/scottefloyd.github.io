import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/#work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary cursor-pointer">Scott Floyd</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about">
                <a className="text-text hover:text-secondary transition-colors duration-200">About</a>
              </Link>
              <button 
                onClick={() => scrollToSection("work")}
                className="text-text hover:text-secondary transition-colors duration-200"
              >
                Work
              </button>
              <Link href="/contact">
                <a className="text-text hover:text-secondary transition-colors duration-200">Contact</a>
              </Link>
              <a 
                href="/assets/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text hover:text-secondary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <Link href="/about">
                <a 
                  className="block text-text hover:text-secondary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </Link>
              <button 
                onClick={() => {
                  scrollToSection("work");
                  setMobileMenuOpen(false);
                }}
                className="block text-text hover:text-secondary transition-colors duration-200"
              >
                Work
              </button>
              <Link href="/contact">
                <a 
                  className="block text-text hover:text-secondary transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </Link>
              <a 
                href="/assets/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-secondary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
