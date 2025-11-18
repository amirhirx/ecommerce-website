"use client"
import "swiper/css"
import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({
    images,
    alt,
}: {
    images: string[]
    alt: string
}) {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <div className="overflow-hidden rounded-md shadow-md bg-white">
            <div className="p-4">
                <div className="rounded-md overflow-hidden shadow-md">
                    <Image
                        src={images[currentSlide]}
                        width={480}
                        height={480}
                        alt={alt}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-center overflow-scroll p-4 gap-2">
                {images.map((image, index) => {
                    return (
                        <div key={index} className="rounded-md overflow-hidden">
                            <Image
                                src={image}
                                width={80}
                                height={80}
                                alt={alt}
                                className="object-cover"
                                onClick={() => setCurrentSlide(index)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
