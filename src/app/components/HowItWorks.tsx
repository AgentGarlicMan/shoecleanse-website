import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const STEPS = [
  {
    num: "01",
    title: "Place Your Shoes",
    body: "Load your footwear onto the automated conveyor inside the UV-C chamber. The system accommodates standard athletic shoe sizes.",
  },
  {
    num: "02",
    title: "Select Your Mode",
    body: "Use the backlit keypad and LCD display to choose UV-C Sterilization, Dehumidification, or the Combined cycle for comprehensive treatment.",
  },
  {
    num: "03",
    title: "Safety Lock Engages",
    body: "The solenoid-actuated door locks automatically before any UV-C emission. Zero UV exposure risk to users — the cycle only runs with the door fully secured.",
  },
  {
    num: "04",
    title: "Done. Door Unlocks.",
    body: "The MCU monitors cycle completion and automatically unlocks the door. Your shoes emerge sanitized, deodorized, and dry.",
  },
];

export function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
          style={{ background: "#00c8ff" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
            style={{
              background: "rgba(0,200,255,0.08)",
              border: "1px solid rgba(0,200,255,0.2)",
              color: "#00c8ff",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            HOW IT WORKS
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Four steps to sterile footwear.
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* connector line */}
              {i < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-[calc(100%_-_24px)] h-px z-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(0,200,255,0.4), rgba(0,200,255,0.1))",
                  }}
                />
              )}
              <div
                className="rounded-2xl p-6 h-full relative z-10 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#0f1829",
                  border: "1px solid rgba(0,200,255,0.12)",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className="text-4xl font-extrabold mb-4 leading-none"
                  style={{
                    fontFamily: "Oxanium, sans-serif",
                    color: "rgba(0,200,255,0.2)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "Oxanium, sans-serif", color: "#dce8f5" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed text-muted-foreground"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
