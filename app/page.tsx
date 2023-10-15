import About from "@/components/About";
import Anni2023 from "@/components/Anni2023";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Photos from "@/components/Photos";

export default function Home() {
  return (
    <div className="bg-pink-200 text-teal-500 h-screen snap-mandatory snap-y overflow-scroll z-0">
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}

      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="photos" className="snap-center">
        <Photos />
      </section>
      <section id="anni2023" className="snap-center">
        <Anni2023 />
      </section>
    </div>
  );
}
