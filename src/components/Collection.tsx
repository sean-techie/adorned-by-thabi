"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Collection() {
  return (
    <section id="collection" className="bg-black text-white py-32">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.4em] text-gray-500 mb-4">
          Collection
        </p>

        <h2 className="text-4xl lg:text-5xl">
          Signature Collection
        </h2>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="px-6 lg:px-20"
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[650px] overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={`Atelier ${index + 1}`}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}