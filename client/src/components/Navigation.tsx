import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
            >
              Scott Floyd
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection("hero");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  scrollToSection("about");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection("projects");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => {
                  scrollToSection("skills");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
