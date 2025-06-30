import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="font-inter bg-neutral text-text min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-8">Let's Work Together</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can create amazing user experiences together.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-primary mb-6">Get in touch</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-secondary mr-3" />
                    <span>scott.floyd@email.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-secondary mr-3" />
                    <span>Utah, United States</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-4">Follow me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/scott-floyd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-secondary transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com/scott_floyd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-secondary transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://github.com/scottefloyd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-secondary transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-white hover:bg-indigo-700"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
