import { Shield, Zap, ArrowRight, Monitor, Cpu, Users } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const FEATURES = [
  {
    icon: <Shield size={22} />,
    title: "Safety-Interlocked Door",
    body: "Solenoid lock prevents UV-C emission when the door is open. No accidental exposure, ever.",
    accent: "#00c8ff",
  },
  {
    icon: <Zap size={22} />,
    title: "Dual-Action UV-C + Dehumidify",
    body: "UV-C destroys bacteria at the DNA level while the Peltier dehumidifier pulls moisture from liners and insoles.",
    accent: "#6644ff",
  },
  {
    icon: <ArrowRight size={22} />,
    title: "Automated Conveyor System",
    body: "Motorized tray moves shoes into the optimal position within the UV-C chamber without user intervention.",
    accent: "#00c8ff",
  },
  {
    icon: <Monitor size={22} />,
    title: "LCD Keypad Display",
    body: "Clear status readout, mode selection, and cycle timer — readable at a glance in any gym lighting condition.",
    accent: "#6644ff",
  },
  {
    icon: <Cpu size={22} />,
    title: "MCU-Automated Cycles",
    body: "Arduino Mega 2560 controller sequences every phase — lockout, lamp warmup, treatment, cooldown, unlock — automatically.",
    accent: "#00c8ff",
  },
  {
    icon: <Users size={22} />,
    title: "Built for Gyms & Athletes",
    body: "Ruggedized for high-frequency commercial use. Sized for lockers, gear rooms, and personal home stations.",
    accent: "#6644ff",
  },
];

export function Features() {
  const [ref, inView] = useInView();

  return (
    <section
      id="features"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #05090f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
            style={{
              background: "rgba(102,68,255,0.08)",
              border: "1px solid rgba(102,68,255,0.25)",
              color: "#a07fff",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            FEATURES
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Engineering you can trust.
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: "#0f1829",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `${f.accent}14`,
                  color: f.accent,
                  border: `1px solid ${f.accent}25`,
                  boxShadow: `0 0 12px ${f.accent}15`,
                }}
              >
                {f.icon}
              </div>
              <h3
                className="font-bold text-base mb-2"
                style={{ fontFamily: "Oxanium, sans-serif", color: "#dce8f5" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-muted-foreground"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
