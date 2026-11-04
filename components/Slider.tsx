"use client";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const slides = [
  {
    id: uuid(),
    image: "/images/slides/banner01.webp",
    alt: "Banner 1",
    link: "#",
  },
  {
    id: uuid(),
    image: "/images/slides/banner02.webp",
    alt: "Banner 2",
    link: "#",
  },
  {
    id: uuid(),
    image: "/images/slides/banner03.webp",
    alt: "Banner 3",
    link: "#",
  },
  {
    id: uuid(),
    image: "/images/slides/banner04.webp",
    alt: "Banner 4",
    link: "#",
  },
];

export default function Slider() {
  return (
    <Swiper className="w-full h-96" slidesPerView={1} spaceBetween={0}>
      {slides.map(({ id, image, alt, link }) => {
        return (
          <SwiperSlide key={id}>
            <Link href={link}>
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                loading="eager"
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
