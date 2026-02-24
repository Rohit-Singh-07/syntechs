import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Tunai presents
        </p>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9]">
          SYNTECHS
          <br />
          <span className="text-accent">2026</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl font-medium text-foreground/80 tracking-wide">
          National Level Hackathon
        </p>

        <p className="mt-2 text-base text-muted-foreground font-medium">
          12 – 14 March 2026
        </p>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 bg-highlight text-highlight-foreground px-5 py-2 rounded-full text-sm font-bold"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          50L+ Prize Pool
        </motion.div>

        <p className="mt-4 text-sm text-muted-foreground">
          Organized by <span className="font-semibold text-foreground">Trendians</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://tixin.in/event/b700a5c8-f81d-42c5-ab76-2254f79d106f"
            target="_blank"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Register (Open for All)
            <span className="block text-xs font-normal opacity-70 mt-0.5">Online Only</span>
          </a>
          <a
            href="https://www.tixin.in/event/7d7bf81c-c4ec-43c5-bdd8-cd0aa977e9e3"
            target="_blank"
            className="border-2 border-foreground text-foreground px-8 py-3.5 rounded-full text-sm font-bold tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            Register as LPU Student
            <span className="block text-xs font-normal opacity-70 mt-0.5">Online + Offline</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
