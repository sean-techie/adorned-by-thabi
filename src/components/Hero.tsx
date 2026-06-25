import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center px-6 lg:px-24 pt-32 lg:pt-24 pb-10 gap-12">
      <div>
        <p className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-gray-400 mb-4 text-xs sm:text-sm">
          Luxury Couture
        </p>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl mb-6 leading-tight">
          Adorned by Thabi
        </h1>

        <p className="text-gray-300 max-w-xl text-lg leading-8 mb-10">
          Where Elegance Becomes Art.
        </p>

        <button className="border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">
          Explore Collection
        </button>
      </div>

      <div className="relative h-[450px] sm:h-[550px] lg:h-[700px] mt-8 lg:mt-0">
        <Image
          src="/hero.jpg"
          alt="Luxury couture dress"
          fill
          priority
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}