import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { ArrowDownNarrowWide, Search } from "lucide-react";
import { GetProducts } from "@/api/useProducts";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { GetCategories } from "@/api/useCategory";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormField } from "@/components/ui/form";

const formSchema = z.object({
  search: z.string(),
  filter: z.string(),
});

const ProductList = () => {
  const { products, error, isLoading } = GetProducts();
  const { categories } = GetCategories();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
      filter: "Select Category",
    },
  });

  const filteredProducts = products?.filter((product) => {
    const nameMatches = product.name
      .toLowerCase()
      .includes(form.watch("search"));
    const categoryMatches =
      form.watch("filter") === "Select Category" ||
      product.categorySlug === form.watch("filter");
    return nameMatches && categoryMatches;
  });

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;
  return (
    <section
      id="product-list"
      className="flex items-center justify-between px-6 py-6 lg:px-24"
    >
      <div className="w-full space-y-6">
        <h2 className="max-w-fit border-b-4 border-primary text-4xl font-semibold">
          Product List
        </h2>
        <div className="flex w-full flex-col justify-between gap-4 lg:flex-row">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <div className="relative w-full overflow-hidden rounded-full border border-border lg:w-96">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  size={20}
                  strokeWidth={1.4}
                />
                <Input
                  className="border-none ps-12"
                  placeholder="Search for products"
                  {...field}
                />
              </div>
            )}
          />

          <div className="flex items-center justify-between gap-3 lg:justify-normal">
            <FormField
              control={form.control}
              name="filter"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-72 rounded-full border-border px-4 lg:w-64">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg">
                    <SelectGroup className="divide-y">
                      <SelectItem value="Select Category">
                        Select Category
                      </SelectItem>
                      <SelectItem value="tes-kategori">Tes Aja</SelectItem>
                      {categories?.map((category) => (
                        <SelectItem key={category.slug} value={category.slug}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />

            <Button className="rounded-full">
              <ArrowDownNarrowWide />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
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

export default ProductList;
