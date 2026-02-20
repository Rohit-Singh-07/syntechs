import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Highlights from "@/components/Highlights";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Highlights />
      <Timeline />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
