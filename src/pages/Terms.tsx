import { motion } from "framer-motion";

const Terms: React.FC = () => {
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
          Terms & <span className="text-accent">Conditions</span>
        </h1>

        <p className="text-muted-foreground mb-10">
          These Terms & Conditions govern participation in{" "}
          <span className="font-semibold text-foreground">SYNTECHS 2026</span>,
          organized by{" "}
          <span className="font-semibold text-foreground">Trendians</span>.
          By registering for the event, participants agree to comply with the
          following terms.
        </p>

        <div className="space-y-6 text-left text-muted-foreground text-sm md:text-base leading-relaxed">

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              1. Eligibility
            </h2>
            <p>
              Participants registering for SYNTECHS 2026 must provide accurate
              information during registration. The organizers reserve the right
              to verify participant details and eligibility.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              2. Participant Conduct
            </h2>
            <p>
              Participants are expected to maintain professional and respectful
              behavior throughout the event. Any form of misconduct, cheating,
              plagiarism, or violation of event rules may result in immediate
              disqualification.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All projects created during the hackathon remain the intellectual
              property of the respective participants or teams. However,
              organizers may use project names, descriptions, and images for
              promotional or educational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              4. Event Modifications
            </h2>
            <p>
              The organizers reserve the right to modify the event schedule,
              rules, format, or prize distribution if required due to unforeseen
              circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              5. Rescheduling or Postponement
            </h2>
            <p>
              The organizers reserve the right to reschedule or postpone the
              event if necessary. In such cases, registrations will remain valid
              for the new event date.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              6. Refund Policy
            </h2>
            <p>
              Registration fees are non-refundable except in the case where the
              event is cancelled by the organizers. In such cases, refunds will
              be issued after deducting a 5% processing fee to cover payment
              gateway and administrative charges.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              7. Media & Promotion
            </h2>
            <p>
              By participating in SYNTECHS 2026, participants grant the
              organizers permission to capture photographs, videos, and media
              during the event for promotional and marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              The organizers will not be held responsible for any personal loss,
              damage, or technical issues that may occur during the event.
              Participants join the event at their own responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              9. Agreement to Terms
            </h2>
            <p>
              By registering for SYNTECHS 2026, participants confirm that they
              have read, understood, and agreed to these Terms & Conditions.
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

export default Terms;