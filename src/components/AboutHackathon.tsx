import { motion } from "framer-motion";
import { Code2, Users, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Form Your Team",
    description: "Gather 2–4 members and register. Open to students from all colleges nationwide.",
  },
  {
    icon: Lightbulb,
    title: "Pick a Problem Statement",
    description: "Choose from domains like AI/ML, Web3, HealthTech, FinTech, or Cybersecurity.",
  },
  {
    icon: Code2,
    title: "Compete on CodeChef",
    description: "Participate in the CodeChef contest during the hackathon and stand a chance to win CodeChef Premium subscriptions and exclusive discount coupons.",
  },
  {
    icon: Code2,
    title: "Build Your Solution",
    description: "You get 24 hours to code, design, and ship a working prototype of your idea.",
  },
  {
    icon: Rocket,
    title: "Present & Demo",
    description: "Pitch your project to expert judges with a live demo and technical walkthrough.",
  },
  {
    icon: CheckCircle2,
    title: "Win Big",
    description: "Top teams win from a 50L+ prize pool, Kreo gaming gear, goodies, and more.",
  },
];

const AboutHackathon = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What Is Syntechs?
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            The Ultimate Hackathon
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Syntechs 2026 is a national-level hackathon where the sharpest minds
            come together to solve real-world problems. Whether you're on campus or joining
            online — bring your best ideas, build fast, and compete for massive prizes.
          </p>
        </motion.div>

        {/* How it works */}
        <motion.p
          className="text-center font-heading text-xl md:text-2xl font-bold text-foreground mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          How It Works
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-secondary rounded-2xl p-6 text-center group hover:bg-secondary/80 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="text-accent" size={22} />
              </div>
              <span className="absolute top-4 right-4 font-heading text-4xl font-bold text-foreground/[0.06] select-none">
                {i + 1}
              </span>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHackathon;
