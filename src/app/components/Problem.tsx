import { AlertTriangle, Microscope, SprayCanIcon } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const PROBLEMS = [
  {
    icon: <AlertTriangle size={28} />,
    title: "Athlete's Foot Risk",
    body: "Warm, damp shoe interiors are ideal breeding grounds for dermatophyte fungi — the cause of athlete's foot and nail infections. Standard drying does nothing to kill them.",
    color: "#ff6644",
  },
  {
    icon: <Microscope size={28} />,
    title: "Gym & Locker Contamination",
    body: "Shared locker rooms and gym floors transfer bacteria, fungi, and viruses directly onto footwear. Every step compounds the exposure.",
    color: "#ff9944",
  },
  {
    icon: <SprayCanIcon size={28} />,
    title: "Ineffective Old Methods",
    body: "Scrubbing, odour sprays, and leaving shoes in sunlight mask symptoms at best. They do not sterilize. Bacteria survive and return within hours.",
    color: "#cc44ff",
  },
];

export function Problem() {
  const [ref, inView] = useInView();

  return (
    <section
      className="py-28 relative"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #060b16 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
            style={{
              background: "rgba(255,100,68,0.08)",
              border: "1px solid rgba(255,100,68,0.2)",
              color: "#ff6644",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            THE PROBLEM
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Your shoes harbor more than you think.
          </h2>
          <p
            className="text-muted-foreground max-w-xl mx-auto"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Conventional hygiene routines fall short for athletes. The biology inside your shoes requires a different kind of solution.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #0f1829, #0a1220)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${p.color}14`,
                  color: p.color,
                  border: `1px solid ${p.color}30`,
                }}
              >
                {p.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "Oxanium, sans-serif", color: "#dce8f5" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-muted-foreground"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
