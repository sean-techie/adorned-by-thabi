import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Collection />
      </Reveal>

      <Reveal>
        <Services />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}