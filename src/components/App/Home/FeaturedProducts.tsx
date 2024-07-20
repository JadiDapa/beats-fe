import { ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { GetProducts } from "@/api/useProducts";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { products, error, isLoading } = GetProducts();
  const featuredProducts = products?.filter((product) => product.isFeatured);
  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;
  return (
    <section id="featured-product" className="px-6 py-12 lg:px-24">
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2
            data-aos="fade-right"
            data-aos-duration="500"
            className="max-w-fit border-b-4 border-primary text-4xl font-semibold"
          >
            Featured Products
          </h2>
          <Link
            className="flex w-full justify-end lg:w-auto"
            to="/products/#product-list"
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <Button className="items-center gap-3 rounded-full px-6">
              <ShoppingCart size={20} strokeWidth={1.8} />
              <div>All Products</div>
            </Button>
          </Link>
        </div>
        <Carousel className="w-full">
          <CarouselContent className="pl-2">
            {featuredProducts.map((product, index) => (
              <CarouselItem
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay={index * 200}
                key={product.id}
                className="basis-1/2 px-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedProducts;
