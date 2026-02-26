import { motion } from "framer-motion";

const days = [
  {
    day: "Day 1",
    date: "12 March",
    events: ["Master Session","Problem Statement Submission", "CodeChef Contest"],
  },
  {
    day: "Day 2",
    date: "13 March",
    events: [
      "GitHub Repo & Idea Submission",
      "24-Hour Final Round Begins",
      "Online Presentations",
    ],
  },
  {
    day: "Day 3",
    date: "14 March",
    events: ["Final Presentation Round", "Result Announcement"],
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
            3-Day Sprint
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Event Timeline
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-heading text-3xl font-bold text-foreground">
                  {day.day}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {day.date}
                </span>
              </div>

              <div className="space-y-4">
                {day.events.map((event, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <p className="text-sm font-medium text-foreground/80">{event}</p>
                  </div>
                ))}
              </div>

              {/* Day number accent */}
              <div className="absolute top-4 right-6 font-heading text-7xl font-bold text-foreground/[0.04] select-none">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
