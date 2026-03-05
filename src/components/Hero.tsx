import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const getTimeLeft = () => {
    const now = new Date();
    const target = new Date();

    // 12:00 PM IST = 06:30 UTC
    target.setUTCHours(8, 30, 0, 0);

    // If already past today’s 12 PM IST → move to tomorrow
    if (now >= target) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();

    return {
      h: Math.floor(diff / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const TimeBox = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center gap-0.5">
      <div
        className="w-9 h-9 rounded-md flex items-center justify-center"
        style={{
          background: "rgba(20,10,0,0.55)",
          border: "1px solid rgba(255,150,0,0.35)",
          boxShadow: "0 0 8px rgba(255,130,0,0.15) inset",
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={pad(val)}
            className="text-sm font-extrabold tabular-nums leading-none"
            style={{
              color: "#ffcc00",
              textShadow: "0 0 6px rgba(255,190,0,0.5)",
            }}
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 6, opacity: 0 }}
            transition={{ duration: 0.13, ease: "easeOut" }}
          >
            {pad(val)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="text-[8px] uppercase tracking-widest"
        style={{ color: "rgba(255,180,80,0.45)" }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-1.5 mt-2">
      <TimeBox val={time.h} label="hrs" />
      <span
        className="text-sm font-bold pb-4"
        style={{ color: "rgba(255,140,0,0.4)" }}
      >
        :
      </span>
      <TimeBox val={time.m} label="min" />
      <span
        className="text-sm font-bold pb-4"
        style={{ color: "rgba(255,140,0,0.4)" }}
      >
        :
      </span>
      <TimeBox val={time.s} label="sec" />
    </div>
  );
};

const Hero = () => {
  const pctOff = Math.round(((249 - 149) / 249) * 100);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ff6b00, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #ff1a8c, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00a8ff, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00cc66, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.p
          className="text-xl font-bold tracking-[0.2em] uppercase mb-2"
          style={{ color: "#ff9500" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Happy Holi — Festive Offer
        </motion.p>

        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Tunai presents
        </p>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9]">
          SYNTECHS
          <br />
          <span className="text-accent">2026</span>
        </h1>

        <p className="mt-3 text-lg md:text-xl font-medium text-foreground/80 tracking-wide">
          National Level Hackathon
        </p>

        <p className="mt-1.5 text-base text-muted-foreground font-medium">
          12 – 14 March 2026
        </p>

        <motion.div
          className="mt-4 inline-flex items-center gap-2 bg-highlight text-highlight-foreground px-5 py-2 rounded-full text-sm font-bold"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          50L+ Prize Pool
        </motion.div>

        <p className="mt-3 text-sm text-muted-foreground">
          Organized by{" "}
          <span className="font-semibold text-foreground">Trendians</span>
        </p>

        {/* Offer card — dark bg so it's always visible */}
        <motion.div
          className="mt-5 flex sm:flex-row flex-col items-center sm:gap-4 px-5 py-3 rounded-xl "
          style={{
            background: "rgba(15, 8, 0, 0.75)",
            border: "1px solid rgba(255,160,0,0.28)",
            boxShadow:
              "0 0 24px rgba(255,120,0,0.1), 0 2px 12px rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {/* Pricing */}
          <div className="flex items-center gap-2.5">
            <span
              className="sm:text-lg text-sm font-semibold line-through"
              style={{
                color: "rgba(255,255,255,0.3)",
                textDecorationColor: "rgba(255,80,80,0.5)",
              }}
            >
              ₹249
            </span>
            <span
              className="sm:text-3xl text-xl font-black leading-none "
              style={{
                color: "#ffd166",
                textShadow: "0 0 14px rgba(255,200,0,0.4)",
                letterSpacing: "-0.03em",
              }}
            >
              ₹149
            </span>
            <div
              className="flex flex-col items-center justify-center w-10 h-10 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,80,0,0.25), rgba(255,20,100,0.2))",
                border: "1px solid rgba(255,80,0,0.3)",
              }}
            >
              <span
                className="text-sm font-black leading-none"
                style={{ color: "#ff6b00" }}
              >
                {pctOff}%
              </span>
              <span
                className="text-[7px] uppercase tracking-wide mt-0.5"
                style={{ color: "rgba(255,150,80,0.5)" }}
              >
                off
              </span>
            </div>
          </div>

          {/* Vertical divider */}
          <div
            className="w-px self-stretch rounded-full"
            style={{ background: "rgba(255,150,0,0.2)" }}
          />

          {/* Timer */}
          <div className="flex flex-col items-center gap-0.5">
            <p
              className="text-[9px] uppercase tracking-widest"
              style={{ color: "rgba(255,180,80,0.4)" }}
            >
              ends in
            </p>
            <CountdownTimer />
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://tixin.in/event/b700a5c8-f81d-42c5-ab76-2254f79d106f"
            target="_blank"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Register (Open for All)
            <span className="block text-xs font-normal opacity-70 mt-0.5">
              Online Only
            </span>
          </a>
          <a
            href="https://www.tixin.in/event/1d196da8-3fa3-40d7-956c-ae323304ef23"
            target="_blank"
            className="border-2 border-foreground text-foreground px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            Register as LPU Student
            <span className="block text-xs font-normal opacity-70 mt-0.5">
              Online + Offline
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
