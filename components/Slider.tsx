"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const slides = [
    { image: "/images/slides/banner01.webp", alt: "Banner 1", link: "#" },
    { image: "/images/slides/banner02.webp", alt: "Banner 2", link: "#" },
    { image: "/images/slides/banner03.webp", alt: "Banner 3", link: "#" },
    { image: "/images/slides/banner04.webp", alt: "Banner 4", link: "#" },
]

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="w-full h-80 flex relative">
            {slides.map(({ image, alt, link }, index) => {
                return (
                    <Link
                        href={link}
                        key={`slide-${index}`}
                        className={`${activeIndex == index ? "w-full opacity-100" : "w-0 opacity-0"}  relative transition-all overflow-hidden`}
                    >
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            className="absolute top-0 left-0 object-cover"
                        />
                    </Link>
                )
            })}
            <div className="absolute right-5 bottom-5 z-10 flex items-center gap-2">
                {slides.map((_, index) => {
                    return (
                        <span
                            key={`slide-pagination-${index}`}
                            onClick={() => setActiveIndex(index)}
                            className={`${activeIndex == index ? "opacity-100 px-4" : "opacity-25 px-2"} bg-white py-1 rounded cursor-pointer transition`}
                        ></span>
                    )
                })}
            </div>
        </section>
    )
}
