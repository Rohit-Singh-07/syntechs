import { motion } from "framer-motion";

const sponsors = [
  { name: "Tunai", role: "Presents" },
  { name: "CodeChef", role: "Platform Partner" },
  { name: "Kreo", role: "Powered By" },
  { name: "Tixin", role: "Ticketing Partner" },
];

const Sponsors = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Backed By
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Our Partners
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center bg-secondary rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <span className="font-heading text-2xl font-bold text-foreground">
                {sponsor.name}
              </span>
              <span className="text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                {sponsor.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
