"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({
    images,
    alt,
}: {
    images: string[]
    alt: string
}) {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    return (
        <div className="space-y-8">
            <div className="relative w-full md:w-80 h-80 overflow-hidden rounded-xl">
                <Image
                    src={images[currentSlide]}
                    alt={alt}
                    fill
                    objectFit="cover"
                />
            </div>
            <div className="w-80 flex flex-wrap gap-2 mx-auto">
                {images.map((image, index) => {
                    return (
                        <div
                            key={`thumbnail-${index}`}
                            className="w-14 h-14 p-1 bg-white shadow-xl rounded-xl flex justify-center items-center overflow-hidden relative"
                            onClick={() => setCurrentSlide(index)}
                        >
                            <Image
                                src={image}
                                alt={alt}
                                fill
                                objectFit="cover"
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
