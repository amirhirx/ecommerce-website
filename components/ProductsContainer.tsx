import { IProduct } from "@/types/Product";
import ProductCard from "@/components/ProductCard";
import Pagination from "@/components/Pagination";

export default async function ProductsContainer({
  products,
  page,
}: {
  products: IProduct[];
  page: number;
}) {
  const productPerPage = 8;
  const startIndex = ((Number(page) || 1) - 1) * productPerPage;
  const lastIndex = startIndex + productPerPage;
  const paginatedProducts = products
    ? products.slice(startIndex, lastIndex)
    : [];

  return (
    <div className="md:w-full space-y-2">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:p-0 p-4">
        {paginatedProducts.map(
          ({ id, title, price, images, slug, discount, inStock }: IProduct) => {
            return (
              <ProductCard
                key={id}
                title={title}
                price={price}
                image={images[0]}
                slug={slug}
                discount={discount}
                inStock={inStock}
              />
            );
          },
        )}
      </div>
      <Pagination count={products.length} productPerPage={productPerPage} />
    </div>
  );
}
