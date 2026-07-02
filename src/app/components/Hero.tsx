import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { DeviceIllustration } from "./DeviceIllustration";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.3), transparent)" }}
        />
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: "#6644ff" }}
        />
        <div
          className="absolute top-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-8"
          style={{ background: "#00c8ff" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(102,68,255,0.2), transparent)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-mono tracking-widest"
            style={{
              background: "rgba(0,200,255,0.08)",
              border: "1px solid rgba(0,200,255,0.2)",
              color: "#00c8ff",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            UV-C STERILIZATION TECHNOLOGY
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "Oxanium, sans-serif", letterSpacing: "-0.01em" }}
          >
            Fresher Shoes.<br />
            <span
              style={{
                background: "linear-gradient(90deg, #00c8ff, #6644ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Fewer Bacteria.
            </span>
            <br />
            Zero Effort.
          </h1>

          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            An automated UV-C sterilization and dehumidification system engineered for athletic footwear.
            Step in, select your mode, and let the science work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("how-it-works")}
              className="px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #00c8ff, #6644ff)",
                color: "#030813",
                fontFamily: "Oxanium, sans-serif",
                letterSpacing: "0.04em",
                boxShadow: "0 0 30px rgba(0,200,255,0.35)",
              }}
            >
              See How It Works <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("preorder")}
              className="px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2 justify-center border transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              style={{
                border: "1px solid rgba(0,200,255,0.25)",
                color: "#a8c0e0",
                fontFamily: "Oxanium, sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              Join the Waitlist
            </button>
          </div>

          {/* stats */}
          <div className="mt-12 flex gap-8">
            {[
              { val: "99.9%", label: "Bacteria Eliminated" },
              { val: "20 min", label: "Full Cycle Time" },
              { val: "3", label: "Operating Modes" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "Oxanium, sans-serif" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-xs text-muted-foreground mt-0.5"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* illustration */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <DeviceIllustration />
        </motion.div>
      </div>
    </section>
  );
}
