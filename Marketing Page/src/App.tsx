import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Plans } from "./components/Plans";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundAnimation } from "./components/BackgroundAnimation";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
        <BackgroundAnimation />
        <Navigation />
        <Hero />
        <Features />
        <Plans />
        <About />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}