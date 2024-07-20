import { ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GetProducts } from "@/api/useProducts";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, error, isLoading } = GetProducts();
  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  return (
    <section id="products" className="px-6 py-24 lg:px-24">
      <div className="space-y-6">
        <div
          data-aos="fade-right"
          data-aos-duration="500"
          className="flex flex-col items-center justify-between gap-6 lg:flex-row"
        >
          <h2 className="max-w-fit border-b-4 border-primary text-4xl font-semibold">
            Product List
          </h2>
          <Link
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            className="flex lg:w-auto"
            to="/products/#product-list"
          >
            <Button className="items-center gap-3 rounded-full px-6">
              <ShoppingCart size={20} strokeWidth={1.8} />
              <div>All Products</div>
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay={index * 100}
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Products;
