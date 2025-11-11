"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import ProductCard from "./ProductCard"
import "swiper/css"
import "swiper/css/pagination"
import Link from "next/link"

export default function ProductCarousel() {
    return (
        <div className="w-full bg-red-500 p-4 rounded-lg flex">
            <div className="w-2/12 flex flex-col justify-center items-center">
                <h2 className="text-white text-2xl font-black">
                    پیشنهاد شگفت انگیز
                </h2>

                <Link href={"/"} className="text-white">
                    مشاهده همه
                </Link>
            </div>
            <div className="w-10/12">
                <Swiper
                    spaceBetween={25}
                    slidesPerView={4}
                    modules={[Navigation]}
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
