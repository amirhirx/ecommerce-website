import Image from "next/image"

export function ProductCartCard({
    title,
    qty,
    thumbnail,
}: {
    title: string
    qty: number
    thumbnail: string
}) {
    return (
        <div className="px-1 py-2 bg-white rounded-lg flex gap-2 items-center">
            <div>
                <Image src={thumbnail} alt={title} width={150} height={150} />
            </div>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p>تعداد {qty}</p>
            </div>
        </div>
    )
}
