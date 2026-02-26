import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Highlights from "@/components/Highlights";
import KreoProducts from "@/components/KreoProducts";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import AboutHackathon from "@/components/AboutHackathon";
import StartupSession from "@/components/StartupSession";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Highlights />
      <AboutHackathon/>``
      <KreoProducts />
      <StartupSession/>
      <Timeline />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
