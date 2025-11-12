import ProductsCarousel from "@/components/ProductsCarousel"
import Slider from "@/components/Slider"

export default function Home() {
    return (
        <div>
            <Slider />
            <div className="px-6 py-2">
                <ProductsCarousel />
            </div>
        </div>
    )
}
