import { motion } from "framer-motion";

const products = [
  {
    image: "https://kreo-tech.com/cdn/shop/files/KREO_HIVE_65_WHITE_PDP_-_OWN_MATERIALS.1214.png?v=1771246863&width=1200",
    name: "Mechanical Keyboards",
    description: "Premium hot-swappable mechanical keyboards built for speed and precision.",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0619/4325/1121/files/Artboard_2_17.png?v=1771247276&width=1080",
    name: "Gaming Chairs",
    description: "Ergonomic gaming chairs designed for marathon coding and gaming sessions.",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0619/4325/1121/files/white_d2c_pdp_2.png?v=1771248556&width=1080",
    name: "Gaming Mice",
    description: "Ultra-lightweight mice with flawless sensors for competitive edge.",
  },
  {
    image: "https://kreo-tech.com/cdn/shop/files/surge_ultra_material_file_manual.1158_1.png?v=1771246396&width=1200",
    name: "Controllers",
    description: "Next-gen controllers engineered for responsiveness and comfort.",
  },
  {
    image: "https://kreo-tech.com/cdn/shop/files/beluga_v2.322.png?v=1771248143&width=1200",
    name: "Headphones",
    description: "Immersive surround-sound headsets for crystal-clear audio and comms.",
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0619/4325/1121/files/5_b0d8fb2e-fd9c-4c82-8751-4ea43632fe2c.png?v=1771248598&width=1080",
    name: "Mousepads",
    description: "Extended desk mats with precision surfaces for smooth, consistent tracking.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const KreoProducts = () => {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 px-4 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/50 mb-3">
            Powered By
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Kreo Products
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-xl mx-auto text-base leading-relaxed">
            Premium gaming & tech gear up for grabs. Winners take home the best from Kreo's lineup.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 overflow-hidden hover:border-primary-foreground/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-primary-foreground/50 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KreoProducts;
