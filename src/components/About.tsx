import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white text-black py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[550px] bg-white">
          <Image
            src="/about-sketch.jpg"
            alt="Fashion design sketch"
            fill
            className="object-contain"
          />
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-gray-500 mb-4">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl mb-8">
            Crafting Timeless Elegance
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Adorned by Thabi is a luxury fashion house dedicated to creating
            sophisticated pieces that celebrate confidence, femininity, and
            timeless beauty.
          </p>

          <p className="text-gray-700 leading-8 mb-6">
            Every garment is thoughtfully designed with precision and attention
            to detail, blending contemporary elegance with modern couture.
          </p>

          <p className="text-gray-700 leading-8">
            From bespoke evening gowns to statement occasion wear, each creation
            reflects artistry, craftsmanship, and individuality.
          </p>
        </div>
      </div>
    </section>
  );
}