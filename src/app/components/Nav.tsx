import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const NAV_LINKS = ["Home", "How It Works", "Features", "Pre-Order", "Team", "Contact"];

const idMap: Record<string, string> = {
  "Home": "hero",
  "How It Works": "how-it-works",
  "Features": "features",
  "Pre-Order": "preorder",
  "Team": "team",
  "Contact": "contact",
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Shrink nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active nav link via IntersectionObserver
  useEffect(() => {
    const sectionIds = Object.values(idMap);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,13,26,0.95)" : "rgba(8,13,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0,200,255,0.1)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center relative"
            style={{ background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.3)" }}
          >
            <Zap size={16} className="text-primary" />
            <div className="absolute inset-0 rounded-lg" style={{ boxShadow: "0 0 12px rgba(0,200,255,0.3)" }} />
          </div>
          <span
            className="text-base font-bold tracking-widest text-foreground"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            SHOE<span className="text-primary">CLEANSE</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === idMap[link];
            return (
              <button
                key={link}
                onClick={() => scrollTo(idMap[link])}
                className="text-sm font-medium transition-colors duration-200 relative"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: isActive ? "#00c8ff" : "#6b87b2",
                }}
              >
                {link}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: "linear-gradient(90deg, #00c8ff, #6644ff)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo("preorder")}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00c8ff, #6644ff)",
              boxShadow: "0 0 20px rgba(0,200,255,0.3)",
              fontFamily: "Oxanium, sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Join Waitlist
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-3"
          style={{ background: "rgba(8,13,26,0.97)", borderTop: "1px solid rgba(0,200,255,0.1)" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(idMap[link])}
              className="text-sm text-left py-2 border-b border-border transition-colors"
              style={{
                fontFamily: "DM Sans, sans-serif",
                color: activeSection === idMap[link] ? "#00c8ff" : "#6b87b2",
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("preorder")}
            className="mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-primary-foreground w-full"
            style={{
              background: "linear-gradient(135deg, #00c8ff, #6644ff)",
              fontFamily: "Oxanium, sans-serif",
            }}
          >
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
}
