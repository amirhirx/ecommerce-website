import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const slides = [
    { image: "/images/slides/banner01.webp", alt: "Banner 1", link: "#" },
    { image: "/images/slides/banner02.webp", alt: "Banner 2", link: "#" },
    { image: "/images/slides/banner03.webp", alt: "Banner 3", link: "#" },
    { image: "/images/slides/banner04.webp", alt: "Banner 4", link: "#" },
]

export default function Hero() {
    return (
        <section className="px-4">
            <Swiper className="rounded-xl overflow-hidden">
                {slides.map(({ image, alt, link }, index) => {
                    return (
                        <SwiperSlide key={`slide-${index}`}>
                            <Link href={link}>
                                <Image
                                    src={image}
                                    alt={alt}
                                    width={600}
                                    height={100}
                                    quality={100}
                                    className="w-full h-full object-fill"
                                />
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}
