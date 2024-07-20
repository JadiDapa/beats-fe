import FeaturedProducts from "@/components/App/Home/FeaturedProducts";
import ProductList from "@/components/App/Products/ProductList";

const Products = () => {
  return (
    <>
      <h1 className="mx-auto max-w-fit border-b-4 border-primary pt-16 text-6xl font-semibold">
        Products
      </h1>
      <h2 className="mt-4 text-center text-xl text-muted-foreground">
        Technologies that provided from us
      </h2>
      <FeaturedProducts />
      <ProductList />
    </>
  );
};

export default Products;
