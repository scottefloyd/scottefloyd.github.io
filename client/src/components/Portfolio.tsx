import { useEffect, useRef } from "react";
import { portfolioItems } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioRef = useRef<HTMLElement>(null);

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

    if (portfolioRef.current) {
      const fadeElements = portfolioRef.current.querySelectorAll(".fade-in");
      fadeElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={portfolioRef} id="work" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of UX design projects showcasing my process from research to high-fidelity prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="portfolio-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in">
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <CardContent className="p-6">
                <span className={`${item.categoryColor} text-sm font-medium`}>{item.category}</span>
                <h3 className="text-xl font-bold text-primary mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary font-medium hover:text-indigo-700 transition-colors duration-200 inline-flex items-center gap-2"
                >
                  {item.link.includes('.pdf') ? 'View Report' : 'View Case Study'} →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
