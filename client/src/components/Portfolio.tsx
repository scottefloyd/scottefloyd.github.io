import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const categories = ["All Projects", "UX Design", "User Research", "Usability", "Mobile App"];
  
  const filteredItems = activeFilter === "All Projects" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
    <section ref={portfolioRef} id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore my portfolio of user-centered design solutions, from mobile apps to web platforms.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="portfolio-card bg-white rounded-2xl shadow-lg overflow-hidden fade-in hover:shadow-xl transition-all duration-300">
              <div className="relative group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
              <CardContent className="p-6">
                <span className={`${item.categoryColor} text-sm font-medium bg-gray-100 px-3 py-1 rounded-full`}>
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
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
