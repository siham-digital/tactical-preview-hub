import { useEffect, useState } from "react";

const CTA_URL =
  "http://to.wendiro.com/o?k=98099624c17e486ca92ac5061e7f9b35&via=7155";

const Index = () => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s <= 1 ? 300 : s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-2xl mx-auto gap-6">
        {/* Badge */}
        <span className="inline-block font-display text-xs sm:text-sm tracking-[0.25em] uppercase px-5 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary">
          Official PC Tactical Preview
        </span>

        {/* Headline */}
        <h1 className="font-display font-900 text-4xl sm:text-5xl md:text-6xl leading-tight text-foreground text-shadow-hero">
          Dominate the Battlefield.<br />
          Own Every Engagement.
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-secondary-foreground text-shadow-sub max-w-lg">
          Experience next-gen tactical combat crafted for precision and strategy.
        </p>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-sm uppercase tracking-widest text-muted-foreground">
            Next tactical refresh in:
          </span>
          <span
            className="font-display text-3xl sm:text-4xl font-bold tracking-widest"
            style={{ color: "hsl(var(--timer))" }}
          >
            {mins}:{secs}
          </span>
        </div>

        {/* CTA */}
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-display font-bold text-lg sm:text-xl uppercase tracking-wider px-10 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground cta-glow transition-all duration-300 hover:-translate-y-1 hover:cta-glow-hover animate-[subtle-pulse_3s_ease-in-out_infinite]"
        >
          Access Tactical Preview
        </a>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground mt-2">
          Gameplay availability may vary by region.
        </p>
      </div>
    </div>
  );
};

export default Index;
