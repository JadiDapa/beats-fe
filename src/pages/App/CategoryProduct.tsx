import { GetCategoryBySlug } from "@/api/useCategory";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import ProductCard from "@/components/ProductCard";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const { categorySlug } = useParams();
  const { category, isLoading, error } = GetCategoryBySlug(categorySlug);

  const products = category?.Products;

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  if (products)
    return (
      <>
        <div className="px-24 pt-16">
          <h1 className="text-5xl font-semibold">
            <span className="max-w-fit border-b-4 border-primary text-5xl">
              Category
            </span>
            <span> : </span>
            <span className="text-primary">{category.name}</span>
          </h1>

          <h2 className="mt-4 text-xl text-muted-foreground">
            List of product that suit category : {category.name}
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 px-24 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
};

export default CategoryProduct;
