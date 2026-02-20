import { motion } from "framer-motion";
import { Trophy, Gift, PartyPopper, Gamepad2, Keyboard, Mouse } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "50L+ Prize Pool",
    description: "Compete for massive rewards across multiple tracks and categories.",
  },
  {
    icon: Gift,
    title: "Goodies & Momentos",
    description: "Premium tech gear — keyboards, controllers, mice and more for winners.",
  },
  {
    icon: PartyPopper,
    title: "Surprises for All",
    description: "Every participant walks away with something special. No one leaves empty-handed.",
  },
];

const productIcons = [Keyboard, Gamepad2, Mouse];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Highlights = () => {
  return (
    <section id="highlights" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            What's at Stake
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Event Highlights
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-secondary rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Product icon accent */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                {(() => {
                  const Icon = productIcons[i];
                  return <Icon size={48} className="text-foreground" />;
                })()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
