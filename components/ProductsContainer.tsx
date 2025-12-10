export default async function ProductsContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:flex md:flex-wrap md:gap-4 gap-2 grid grid-cols-2">
            {children}
        </div>
    )
}
