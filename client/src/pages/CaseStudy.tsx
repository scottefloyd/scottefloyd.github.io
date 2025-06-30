import { useParams } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioItems.find(item => item.id === id);

  if (!project) {
    return (
      <div className="font-inter bg-neutral text-text min-h-screen">
        <Navigation />
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-primary mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-secondary text-white hover:bg-indigo-700">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-inter bg-neutral text-text min-h-screen">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="mr-2" size={16} />
              Back to Portfolio
            </Button>
          </Link>

          <div className="mb-8">
            <span className={`${project.categoryColor} text-sm font-medium`}>
              {project.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </CardContent>
          </Card>

          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This project represents a comprehensive approach to {project.category.toLowerCase()} challenges, 
              focusing on user-centered design principles and evidence-based solutions. The work demonstrates 
              a thorough understanding of design thinking methodologies and practical application of UX research techniques.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Key Objectives</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Conduct comprehensive user research</li>
                  <li>• Identify pain points and opportunities</li>
                  <li>• Design user-centered solutions</li>
                  <li>• Validate design decisions through testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">Methodologies</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• User interviews and surveys</li>
                  <li>• Competitive analysis</li>
                  <li>• Wireframing and prototyping</li>
                  <li>• Usability testing and iteration</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-6">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200"
              >
                <ExternalLink size={16} />
                {project.link.includes('.pdf') ? 'View Full Report' : 'View Complete Case Study'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
