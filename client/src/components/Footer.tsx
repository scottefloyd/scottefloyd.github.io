import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Scott Floyd</h3>
          <p className="text-gray-300 mb-6">UX/UI Designer & QA Automation Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://linkedin.com/in/scott-floyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com/scott_floyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://github.com/scottefloyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 Scott Floyd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
