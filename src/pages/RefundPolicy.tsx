import { motion } from "framer-motion";

const RefundPolicy = () => {
  return (
    <section className="relative min-h-screen px-6 py-24 flex items-center justify-center overflow-hidden">
      {/* background grid same as hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <motion.div
        className="relative z-10 max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Refund <span className="text-accent">Policy</span>
        </h1>

        <p className="text-muted-foreground mb-10">
          This refund policy applies to registrations for{" "}
          <span className="font-semibold text-foreground">SYNTECHS 2026</span>,
          organized by{" "}
          <span className="font-semibold text-foreground">Trendians</span>.
        </p>

        <div className="space-y-6 text-left text-muted-foreground text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="text-foreground font-semibold mb-2">
              1. No Refund After Registration
            </h2>
            <p>
              Once a participant successfully completes the registration and
              payment for SYNTECHS 2026, the amount paid is generally
              non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              2. Refund in Case of Event Cancellation
            </h2>
            <p>
              Refunds will only be issued if the event is completely cancelled
              by the organizers. In such cases, participants will be notified
              and the refund process will be initiated accordingly. Please note
              that a processing fee of 5% of the registration amount will be
              deducted while issuing the refund.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              3. Event Rescheduling or Postponement
            </h2>
            <p>
              The organizers reserve the right to reschedule or postpone the
              event due to unforeseen circumstances. In such cases, the
              registration will remain valid for the new event date and refunds
              will not be applicable.
            </p>
          </div>

          <div>
            <h2 className="text-foreground font-semibold mb-2">
              4. Agreement to Policy
            </h2>
            <p>
              By registering for SYNTECHS 2026, participants acknowledge and
              agree to this refund policy and the terms mentioned above.
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

export default RefundPolicy;
