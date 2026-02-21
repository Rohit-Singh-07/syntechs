import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Globe, HeartPulse, Banknote, ShieldCheck, ArrowLeft, Cpu, Dna, Bot, Trophy, GraduationCap, Sprout, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const domains = [

    {
  icon: Lightbulb,
  title: "Open Innovation",
  description: "Design and develop a creative solution to any real-world challenge using technology. The problem, approach, and impact are entirely up to you.",
},

  // ===== AI / ML =====
  { icon: Brain, title: "AI / ML", description: "Build a smart career guidance tool that suggests career paths based on user interests and skills." },
  { icon: Brain, title: "AI / ML", description: "Develop a smart attendance analyzer that identifies patterns in absenteeism." },
  { icon: Brain, title: "AI / ML", description: "Build an AI-powered language translator for regional languages." },
  { icon: Brain, title: "AI / ML", description: "Create a personalized workout recommendation system." },
  { icon: Brain, title: "AI / ML", description: "Develop a system that detects spam or harmful comments in online communities." },

  // ===== Web3 =====
  { icon: Globe, title: "Web3", description: "Build a blockchain-based academic certificate verification platform." },
  { icon: Globe, title: "Web3", description: "Develop a decentralized freelance marketplace." },
  { icon: Globe, title: "Web3", description: "Build a Web3-based event ticketing system to prevent fraud." },
  { icon: Globe, title: "Web3", description: "Create a community reward token system for college activities." },

  // ===== HealthTech =====
  { icon: HeartPulse, title: "HealthTech", description: "Build a smart medicine reminder app for chronic patients." },
  { icon: HeartPulse, title: "HealthTech", description: "Create a basic telehealth booking system for rural clinics." },
  { icon: HeartPulse, title: "HealthTech", description: "Develop a mental wellness check-in app with mood tracking." },
  { icon: HeartPulse, title: "HealthTech", description: "Create a blood donor availability and alert system." },

  // ===== FinTech =====
  { icon: Banknote, title: "FinTech", description: "Build a smart expense categorization app for students." },
  { icon: Banknote, title: "FinTech", description: "Create a peer-to-peer lending demo platform." },
  { icon: Banknote, title: "FinTech", description: "Develop a subscription tracking dashboard." },
  { icon: Banknote, title: "FinTech", description: "Create a financial literacy learning app for teenagers." },

  // ===== Cybersecurity =====
  { icon: ShieldCheck, title: "Cybersecurity", description: "Build a phishing detection browser extension." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Create a password health monitoring dashboard." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Develop a secure document sharing platform with expiry access." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Build a simple vulnerability scanner for websites." },
  { icon: ShieldCheck, title: "Cybersecurity", description: "Create a data privacy awareness training simulator." },

  // ===== IoT =====
  { icon: Cpu, title: "IoT", description: "Build a smart hostel energy monitoring system." },
  { icon: Cpu, title: "IoT", description: "Create a connected water tank level monitoring system." },
  { icon: Cpu, title: "IoT", description: "Develop a smart waste segregation monitoring solution." },
  { icon: Cpu, title: "IoT", description: "Build a classroom environment monitoring dashboard." },

  // ===== Biotech =====
  { icon: Dna, title: "Biotech", description: "Build a disease risk prediction tool based on lifestyle inputs." },
  { icon: Dna, title: "Biotech", description: "Create a health record simplifier for patients." },

  // ===== Autonomous Systems =====
  { icon: Bot, title: "Autonomous Systems", description: "Build a campus delivery robot prototype simulation." },
  { icon: Bot, title: "Autonomous Systems", description: "Create an autonomous parking management system." },
  { icon: Bot, title: "Autonomous Systems", description: "Develop a smart traffic signal that adapts to congestion." },
  { icon: Bot, title: "Autonomous Systems", description: "Build an elderly assistance reminder robot concept." },

  // ===== SportsTech =====
  { icon: Trophy, title: "SportsTech", description: "Build a player performance analytics dashboard." },
  { icon: Trophy, title: "SportsTech", description: "Create a tournament management platform for colleges." },
  { icon: Trophy, title: "SportsTech", description: "Develop a real-time score broadcasting app." },
  { icon: Trophy, title: "SportsTech", description: "Build a sports injury risk monitoring tool." },
  { icon: Trophy, title: "SportsTech", description: "Create a fan engagement and reward app." },

  // ===== EdTech =====
  { icon: GraduationCap, title: "EdTech", description: "Develop a gamified learning quiz system." },
  { icon: GraduationCap, title: "EdTech", description: "Build a student project collaboration workspace." },
  { icon: GraduationCap, title: "EdTech", description: "Create a campus opportunity discovery platform." },

  // ===== AgriTech =====
  { icon: Sprout, title: "AgriTech", description: "Build a crop disease detection app using images." },
  { icon: Sprout, title: "AgriTech", description: "Create a farmer-to-consumer marketplace platform." },
  { icon: Sprout, title: "AgriTech", description: "Develop a smart irrigation advisory system." },
  { icon: Sprout, title: "AgriTech", description: "Build a farm expense tracking and profit calculator." },

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
