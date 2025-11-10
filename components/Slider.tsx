/* eslint-disable @next/next/no-img-element */
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"

export default function Slider() {
    const slides = [
        "/images/slide01.gif",
        "/images/slide02.webp",
        "/images/slide03.webp",
        "/images/slide04.webp",
        "/images/slide05.png",
        "/images/slide06.png",
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
        >
            {slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                        <Link href={"/"}>
                            <div className="w-full md:h-80 h-48 rounded md:p-0 px-4 py-2">
                                <img
                                    alt="Slide 1"
                                    src={slide}
                                    className="w-full h-full object-cover md:rounded-none rounded-md"
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}
