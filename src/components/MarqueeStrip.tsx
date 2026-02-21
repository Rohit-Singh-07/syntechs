const MarqueeStrip = () => {
  const text1 = "SYNTECHS 2026 ◆ National Level Hackathon ◆ 50L+ Prize Pool ◆ 12–14 March ◆ ";
  const text2 = "Register Now ◆ Win Big ◆ Build. Innovate. Disrupt. ◆ Powered by Kreo ◆ ";

  return (
    <div className="relative py-6 overflow-hidden select-none">
      {/* Strip 1 - tilted left, scrolling left */}
      <div className="relative -rotate-2 bg-primary py-4 -mx-8 mb-3">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-primary-foreground text-sm md:text-base font-bold tracking-widest uppercase mx-0"
            >
              {text1}
            </span>
          ))}
        </div>
      </div>

      {/* Strip 2 - tilted right, scrolling right */}
      <div className="relative rotate-2 bg-accent py-5 -mx-8">
        <div className="flex whitespace-nowrap animate-marquee-right">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-accent-foreground text-sm md:text-lg font-bold tracking-widest uppercase mx-0"
            >
              {text2}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
