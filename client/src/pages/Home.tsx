import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-inter bg-neutral text-text">
      <Navigation />
      <Hero />
      <Portfolio />
      <Footer />
    </div>
  );
}
