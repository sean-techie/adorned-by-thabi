import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collection />
    </>
  );
}