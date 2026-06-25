import Image from "next/image";
import { gallery } from "@/data/gallery";

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-black text-white py-24 px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
            Collection
          </p>

          <h2 className="text-4xl lg:text-5xl">
            Featured Designs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
            >
              <div className="relative h-[450px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <h3 className="text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}