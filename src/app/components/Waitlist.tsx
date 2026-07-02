import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Loader2 } from "lucide-react";

// ─── Replace this with your real Formspree endpoint after signing up at formspree.io ───
// 1. Go to https://formspree.io/
// 2. Create a free account and make a new form
// 3. Copy your form endpoint (looks like https://formspree.io/f/xyzabc12)
// 4. Replace the string below
const FORMSPREE_WAITLIST_URL = "https://formspree.io/f/mnjkoadj";

const USER_TYPES = [
  "Individual Athlete",
  "Gym Owner / Manager",
  "Team Coach",
  "Sports Equipment Retailer",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export function Waitlist() {
  const [formData, setFormData] = useState({ name: "", email: "", userType: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_WAITLIST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userType: formData.userType || "Not specified",
          _subject: `New Waitlist Signup: ${formData.name}`,
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="preorder"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #05090f 0%, #080d1a 100%)" }}
    >
      {/* glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] blur-3xl opacity-8"
          style={{ background: "radial-gradient(ellipse, #6644ff 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-4"
          style={{
            background: "rgba(102,68,255,0.1)",
            border: "1px solid rgba(102,68,255,0.3)",
            color: "#a07fff",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          PRE-ORDER
        </div>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          style={{ fontFamily: "Oxanium, sans-serif" }}
        >
          Be first when we ship.
        </h2>
        <p
          className="text-muted-foreground mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          ShoeCleanse is moving from working prototype to production. Join the waitlist now for early
          access pricing, launch updates, and the chance to shape final product features.
        </p>

        {status === "success" ? (
          <div
            className="rounded-2xl p-10 flex flex-col items-center gap-4"
            style={{
              background: "#0f1829",
              border: "1px solid rgba(0,200,255,0.2)",
              boxShadow: "0 0 40px rgba(0,200,255,0.1)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,200,255,0.1)",
                border: "1px solid rgba(0,200,255,0.3)",
              }}
            >
              <Check size={28} className="text-primary" />
            </div>
            <h3
              className="text-xl font-bold text-primary"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              You're on the list.
            </h3>
            <p
              className="text-muted-foreground text-sm"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              We'll be in touch at <span className="text-foreground">{formData.email}</span> when
              ShoeCleanse goes live.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 text-left"
            style={{
              background: "#0f1829",
              border: "1px solid rgba(0,200,255,0.12)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="waitlist-name"
                  className="block text-xs font-mono tracking-widest mb-1.5"
                  style={{ color: "#6b87b2", fontFamily: "JetBrains Mono, monospace" }}
                >
                  FULL NAME
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData((p: typeof formData) => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  style={{
                    background: "#162040",
                    border: "1px solid rgba(0,200,255,0.12)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="waitlist-email"
                  className="block text-xs font-mono tracking-widest mb-1.5"
                  style={{ color: "#6b87b2", fontFamily: "JetBrains Mono, monospace" }}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((p: typeof formData) => ({ ...p, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  style={{
                    background: "#162040",
                    border: "1px solid rgba(0,200,255,0.12)",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="waitlist-type"
                className="block text-xs font-mono tracking-widest mb-1.5"
                style={{ color: "#6b87b2", fontFamily: "JetBrains Mono, monospace" }}
              >
                I AM A…
              </label>
              <select
                id="waitlist-type"
                value={formData.userType}
                onChange={(e) => setFormData((p: typeof formData) => ({ ...p, userType: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                style={{
                  background: "#162040",
                  border: "1px solid rgba(0,200,255,0.12)",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <option value="">Select your category</option>
                {USER_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {status === "error" && (
              <p
                className="text-sm mb-4 text-center"
                style={{ color: "#ff4444", fontFamily: "DM Sans, sans-serif" }}
              >
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 rounded-xl font-bold text-sm tracking-widest transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #00c8ff, #6644ff)",
                color: "#03080f",
                fontFamily: "Oxanium, sans-serif",
                boxShadow: "0 0 25px rgba(0,200,255,0.3)",
              }}
            >
              {status === "submitting" ? (
                <><Loader2 size={16} className="animate-spin" /> JOINING…</>
              ) : (
                "JOIN THE WAITLIST"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
