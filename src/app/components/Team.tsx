import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const TEAM = [
  { name: "Gumapo", role: "Lead Developer", initials: "G", color: "#00c8ff" },
  { name: "Navarro", role: "Systems Engineer", initials: "N", color: "#6644ff" },
  { name: "Paculaba", role: "Hardware Engineer", initials: "P", color: "#00c8ff" },
  { name: "Pojas", role: "Research & Documentation", initials: "P", color: "#6644ff" },
];

export function Team() {
  const [ref, inView] = useInView();

  return (
    <section
      id="team"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #080d1a 0%, #060b14 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <div
            className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
            style={{
              background: "rgba(0,200,255,0.08)",
              border: "1px solid rgba(0,200,255,0.15)",
              color: "#00c8ff",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            THE TEAM
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            The engineers behind ShoeCleanse.
          </h2>
        </div>

        <div className="text-center mb-14">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "DM Sans, sans-serif" }}>
            A capstone project at{" "}
            <span className="text-foreground font-medium">STI College Global City</span> · Adviser:{" "}
            <span className="text-primary font-medium">Engr. Sherwin M. Ostria</span>
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "#0f1829",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold"
                style={{
                  background: `${member.color}18`,
                  border: `2px solid ${member.color}35`,
                  color: member.color,
                  fontFamily: "Oxanium, sans-serif",
                  boxShadow: `0 0 20px ${member.color}20`,
                }}
              >
                {member.initials}
              </div>
              <h3
                className="font-bold text-base mb-1"
                style={{ fontFamily: "Oxanium, sans-serif", color: "#dce8f5" }}
              >
                {member.name}
              </h3>
              <p
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
