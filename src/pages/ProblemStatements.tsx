import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Globe, HeartPulse, Banknote, ShieldCheck, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const domains = [
  {
    icon: Brain,
    title: "AI / ML",
    description: "Build intelligent solutions using machine learning, NLP, computer vision, or generative AI to solve real-world challenges.",
  },
  {
    icon: Globe,
    title: "Web3",
    description: "Leverage blockchain, decentralized apps, smart contracts, and tokenomics to create the next wave of internet innovation.",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description: "Innovate in healthcare with digital diagnostics, telemedicine, patient data management, and wellness tracking.",
  },
  {
    icon: Banknote,
    title: "FinTech",
    description: "Reimagine financial services through payments, lending, insurance tech, or personal finance management tools.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "Develop solutions for threat detection, secure authentication, privacy protection, and vulnerability assessment.",
  },
];

const ProblemStatements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Choose Your Domain
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Problem Statements
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, i) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-secondary rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <domain.icon className="text-primary-foreground" size={22} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {domain.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProblemStatements;
