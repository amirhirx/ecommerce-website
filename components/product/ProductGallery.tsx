"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="w-full max-w-lg lg:max-w-md">
      <Swiper
        className="w-80 h-80"
        slidesPerView={1}
        spaceBetween={0}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide
              key={`thumbnail-${index}`}
              className="rounded-2xl overflow-hidden relative"
            >
              <Image src={image} alt={alt} fill objectFit="cover" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={5}
        spaceBetween={8}
        watchSlidesProgress
        className="w-full h-20 cursor-pointer"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${index}`}>
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-transparent in-[.swiper-slide-thumb-active]:border-primary">
              <Image
                src={image}
                alt={`${alt} - بندانگشتی ${index + 1}`}
                fill
                sizes="100px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
