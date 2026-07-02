import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { TechSpecs } from "./components/TechSpecs";
import { Waitlist } from "./components/Waitlist";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <TechSpecs />
        <Waitlist />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
