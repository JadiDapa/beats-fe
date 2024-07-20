import { GetProductBySlug } from "@/api/useProducts";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { useParams } from "react-router-dom";

const Products = () => {
  const { productSlug } = useParams();
  const { product, isLoading, error } = GetProductBySlug(productSlug);

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  return (
    <section id="product-detail" className="relative flex max-h-screen">
      <div className="flex h-screen flex-1 items-center justify-center">
        <figure className="aspect-square w-[80%] overflow-hidden">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}/${product.image}`}
            className="w-full object-cover object-center"
            alt={product.name}
          />
        </figure>
      </div>
      <div className="scroll flex-1 space-y-9 overflow-y-scroll px-12 py-9">
        <div className="text-xl font-semibold text-primary">
          {product.Categories?.name}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <h2 className="text-5xl font-medium text-primary">
            Rp {product.price}
          </h2>
        </div>
        <div className="space-y-2">
          <div className="max-w-fit border-b-4 border-primary text-lg font-bold">
            DESCRIPTION
          </div>
          <div dangerouslySetInnerHTML={{ __html: product?.description }} />
        </div>
      </div>
    </section>
  );
};

export default Products;
