import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold mb-4 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            Scott Floyd
          </button>
          <p className="text-gray-300 mb-6">UX/UI Designer & QA Automation Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/scottefloyd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/scottefloyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Scott Floyd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
