import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const cx = (...cls: (string | false | undefined)[]) => cls.filter(Boolean).join(" ");

const TECH_SPECS = [
  { label: "Controller", val: "Arduino Mega 2560", note: "Manages all I/O, relay sequencing, and cycle timing" },
  { label: "Sterilization", val: "UV-C Germicidal Lamp", note: "Shortwave UV-C (254 nm) disrupts bacterial DNA replication" },
  { label: "Dehumidification", val: "Peltier Module (TEC)", note: "Thermoelectric cooling condenses moisture without refrigerants" },
  { label: "Door Security", val: "Solenoid Lock Actuator", note: "Electrically engaged; fails locked for safety" },
  { label: "Relay Control", val: "4-Channel Relay Board", note: "Independently switches lamp, conveyor, TEC, and lock circuits" },
  { label: "Display", val: "16×2 LCD + 4×3 Keypad", note: "User-facing mode selection and cycle status output" },
  { label: "Power", val: "110–240 V AC Input", note: "Universal input; internal 12 V and 5 V DC rails" },
];

export function TechSpecs() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="tech" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
              style={{
                background: "rgba(0,200,255,0.08)",
                border: "1px solid rgba(0,200,255,0.15)",
                color: "#00c8ff",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              TECHNOLOGY
            </div>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-3"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              What's inside.
            </h2>
            <p className="text-muted-foreground" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Plain-language breakdown of the hardware that makes ShoeCleanse work.
            </p>
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#0f1829",
              border: "1px solid rgba(0,200,255,0.12)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
            }}
          >
            {TECH_SPECS.slice(0, 4).map((spec, i) => (
              <div
                key={spec.label}
                className={cx(
                  "px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6",
                  i !== 0 && "border-t border-border"
                )}
              >
                <span
                  className="text-xs font-mono tracking-widest w-36 shrink-0 pt-0.5"
                  style={{ color: "#00c8ff", fontFamily: "JetBrains Mono, monospace" }}
                >
                  {spec.label.toUpperCase()}
                </span>
                <div>
                  <div
                    className="text-sm font-semibold text-foreground"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {spec.val}
                  </div>
                  <div
                    className="text-xs text-muted-foreground mt-0.5"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {spec.note}
                  </div>
                </div>
              </div>
            ))}

            {expanded &&
              TECH_SPECS.slice(4).map((spec) => (
                <div
                  key={spec.label}
                  className="px-6 py-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 border-t border-border"
                >
                  <span
                    className="text-xs font-mono tracking-widest w-36 shrink-0 pt-0.5"
                    style={{ color: "#00c8ff", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {spec.label.toUpperCase()}
                  </span>
                  <div>
                    <div
                      className="text-sm font-semibold text-foreground"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {spec.val}
                    </div>
                    <div
                      className="text-xs text-muted-foreground mt-0.5"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {spec.note}
                    </div>
                  </div>
                </div>
              ))}

            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full px-6 py-4 border-t border-border flex items-center justify-center gap-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {expanded ? (
                <><ChevronUp size={16} /> Hide Extended Specs</>
              ) : (
                <><ChevronDown size={16} /> Full Specs</>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
