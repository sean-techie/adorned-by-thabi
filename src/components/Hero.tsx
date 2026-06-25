import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 items-center px-8 lg:px-24 pt-24">
      <div>
        <p className="uppercase tracking-[0.4em] text-gray-400 mb-4">
          Luxury Couture
        </p>

        <h1 className="text-6xl lg:text-8xl mb-6">
          Adorned by Thabi
        </h1>

        <p className="text-gray-300 max-w-xl text-lg leading-8 mb-10">
          Where Elegance Becomes Art.
        </p>

        <button className="border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">
          Explore Collection
        </button>
      </div>

      <div className="relative h-[700px] mt-20 lg:mt-0">
        <Image
          src="/hero.jpg"
          alt="Luxury couture dress"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}