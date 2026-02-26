import { motion } from "framer-motion";
import { Presentation, Calendar, MapPin, Users } from "lucide-react";

const StartupSession = () => {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Expert Session
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Product → Startup
          </h2>
        </motion.div>

        <motion.div
          className="bg-background rounded-3xl p-8 md:p-12 border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <Presentation className="text-accent" size={26} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              How to Convert a Product into a Startup
            </h3>
          </div>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Built something cool at a hackathon but don't know what's next? This
            exclusive session by industry experts will walk you through the
            journey from a working prototype to a funded startup — covering
            ideation validation, building an MVP, pitching to investors, legal
            essentials, and scaling your product to market.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-accent" />
              <span>Day 1</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent" />
              <span>SDMA</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-accent" />
              <span>Shubham Raj, Co-founder of Serri.ai</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupSession;
