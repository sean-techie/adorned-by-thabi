import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Services />
    </>
  );
}