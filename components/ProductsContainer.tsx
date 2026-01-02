export default async function ProductsContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="md:w-full md:flex md:flex-wrap gap-4 grid grid-cols-1 md:p-0 p-4">
            {children}
        </div>
    )
}
