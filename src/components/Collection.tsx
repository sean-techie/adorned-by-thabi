"use client";

import Image from "next/image";
import { gallery } from "@/data/gallery";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-black text-white py-28 overflow-hidden"
    >
      <div className="text-center mb-16 px-6">
        <p className="uppercase tracking-[0.35em] text-gray-500 mb-4">
          Collection
        </p>

        <h2 className="text-4xl lg:text-5xl mb-6">
          Signature Collection
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto leading-8">
          Discover timeless pieces crafted with precision, elegance, and modern sophistication.
        </p>
      </div>

      <Swiper
        spaceBetween={24}
        slidesPerView={1.1}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1.4,
          },
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
            <div className="relative h-[500px] md:h-[620px] overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={`Collection ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}