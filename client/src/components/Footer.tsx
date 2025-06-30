export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="text-3xl font-bold mb-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            Scott Floyd
          </button>
          <p className="text-gray-300 text-lg">UX/UI Designer & QA Automation Developer</p>
        </div>
      </div>
    </footer>
  );
}
