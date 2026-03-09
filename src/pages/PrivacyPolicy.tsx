import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 flex items-center justify-center overflow-hidden">
      
      {/* background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <motion.div
        className="relative z-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Privacy <span className="text-accent">Policy</span>
        </h1>

        <p className="text-muted-foreground mb-10">
          This Privacy Policy explains how <span className="font-semibold text-foreground">Trendians</span> 
          collects, uses, and protects the information of participants registering 
          for <span className="font-semibold text-foreground">SYNTECHS 2026</span>.
        </p>

        <div className="space-y-6 text-left text-muted-foreground text-sm md:text-base leading-relaxed">

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you register for SYNTECHS 2026, we may collect personal
              information such as your name, email address, phone number,
              college/organization, and other details required for event
              participation.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>
              The information collected is used only for event-related purposes,
              including registration verification, communication about the
              hackathon, event updates, and participant coordination.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              3. Payment Information
            </h2>
            <p>
              Payments for the event are processed through third-party payment
              platforms. We do not store or have access to your card details or
              sensitive payment information.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              4. Data Protection
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              5. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent participants' personal information
              to third parties. Information may only be shared with event
              partners or service providers when necessary for organizing and
              conducting the event.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              6. Updates to This Policy
            </h2>
            <p>
              Trendians reserves the right to update or modify this Privacy
              Policy at any time. Changes will be reflected on this page.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please
              contact us at{" "}
              <span className="text-foreground font-medium">
                trendians.in@gmail.com
              </span>.
            </p>
          </div>

        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Last Updated: March 2026
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;