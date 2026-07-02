import { useState } from "react";
import { Zap, Check, Mail, Instagram, Twitter, Linkedin, Loader2 } from "lucide-react";
import type { FormEvent } from "react";

// ─── Replace with your real Formspree endpoint after signing up at formspree.io ───
// 1. Go to https://formspree.io/
// 2. Create a free account and make a new form
// 3. Copy your form endpoint (looks like https://formspree.io/f/xyzabc12)
// 4. Replace the string below
const FORMSPREE_CONTACT_URL = "https://formspree.io/f/mdarpngg";

const SOCIAL_LINKS = [
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lhenaaald/" },
  { Icon: Twitter, label: "Twitter / X", href: "https://twitter.com/" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/john-lhenald-gumapo-96a5a0338/" },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Footer() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_CONTACT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `Contact from ${contactForm.name} — ShoeCleanse`,
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

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="pt-28 pb-10"
      style={{ background: "#060b14", borderTop: "1px solid rgba(0,200,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact form */}
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-5"
              style={{
                background: "rgba(0,200,255,0.08)",
                border: "1px solid rgba(0,200,255,0.15)",
                color: "#00c8ff",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              CONTACT
            </div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              Get in touch.
            </h2>
            <p
              className="text-muted-foreground text-sm mb-6"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Questions about the product, partnerships, or the capstone project? We'd love to hear
              from you.
            </p>

            {status === "success" ? (
              <div
                className="rounded-xl p-6 flex items-center gap-3"
                style={{ background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.2)" }}
              >
                <Check size={20} className="text-primary shrink-0" />
                <p
                  className="text-sm text-foreground"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Message received. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="sr-only"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((p: typeof contactForm) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    style={{
                      background: "#0f1829",
                      border: "1px solid rgba(0,200,255,0.12)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm((p: typeof contactForm) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    style={{
                      background: "#0f1829",
                      border: "1px solid rgba(0,200,255,0.12)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Your message…"
                    value={contactForm.message}
                    onChange={(e) => setContactForm((p: typeof contactForm) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    style={{
                      background: "#0f1829",
                      border: "1px solid rgba(0,200,255,0.12)",
                      fontFamily: "DM Sans, sans-serif",
                    }}
                  />
                </div>

                {status === "error" && (
                  <p
                    className="text-sm"
                    style={{ color: "#ff4444", fontFamily: "DM Sans, sans-serif" }}
                  >
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-6 py-3 rounded-xl text-sm font-bold tracking-widest self-start flex items-center gap-2 transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: "linear-gradient(135deg, #00c8ff, #6644ff)",
                    color: "#03080f",
                    fontFamily: "Oxanium, sans-serif",
                    boxShadow: "0 0 20px rgba(0,200,255,0.25)",
                  }}
                >
                  {status === "submitting" ? (
                    <><Loader2 size={15} className="animate-spin" /> SENDING…</>
                  ) : (
                    <><Mail size={15} /> SEND MESSAGE</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Quick links + brand */}
          <div className="lg:pl-8">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-2.5 mb-8"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.3)" }}
              >
                <Zap size={16} className="text-primary" />
              </div>
              <span
                className="text-base font-bold tracking-widest"
                style={{ fontFamily: "Oxanium, sans-serif" }}
              >
                SHOE<span className="text-primary">CLEANSE</span>
              </span>
            </button>

            <p
              className="text-sm text-muted-foreground mb-8 max-w-xs"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              UV-C shoe sterilization for athletes and gyms. Fresher footwear, automatically.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-3 mb-8">
              {[
                { label: "Home", id: "hero" },
                { label: "How It Works", id: "how-it-works" },
                { label: "Features", id: "features" },
                { label: "Technology", id: "tech" },
                { label: "Pre-Order", id: "preorder" },
                { label: "Team", id: "team" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-left text-muted-foreground hover:text-primary transition-colors"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* social icons — update hrefs to real profiles */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  style={{ border: "1px solid rgba(0,200,255,0.12)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: "1px solid rgba(0,200,255,0.08)" }}
        >
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            © {new Date().getFullYear()} ShoeCleanse — STI College Global City Capstone Project
          </p>
          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            Adviser: Engr. Sherwin M. Ostria
          </p>
        </div>
      </div>
    </footer>
  );
}
