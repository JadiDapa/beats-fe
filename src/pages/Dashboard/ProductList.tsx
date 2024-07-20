import { MonitorSpeaker, MonitorDot, LayoutList } from "lucide-react";

import { productListColumn } from "@/utils/columns/product-list";
import { GetProducts } from "@/api/useProducts";
import ConnectedCard from "@/components/Dashboard/ConnectedCard";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import ProductTable from "@/components/Dashboard/Product/ProductTable";
import { GetCategories } from "@/api/useCategory";

const ProductList = () => {
  const { products, isLoading, error } = GetProducts();
  const { categories } = GetCategories();

  const productsCard = [
    {
      title: "Total of Products",
      value: products?.length,
      Icon: MonitorSpeaker,
      detail: "Today's Guest",
      bgColor: "#ee4444",
      textColor: "#fff",
    },
    {
      title: "Total of Categories",
      value: categories?.length,
      Icon: LayoutList,
      detail: "Total every account",

      bgColor: "#eedd44",
      textColor: "#ffffff",
    },
    {
      title: "Featured Products",
      value: products?.filter((product) => product.isFeatured).length,
      Icon: MonitorDot,
      detail: "Total every account",

      bgColor: "#444fee",
      textColor: "#ffffff",
    },
  ];

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  if (products) {
    return (
      <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
        {/* Header Title */}
        <div className="space-y-2">
          <div className="text-3xl font-medium capitalize text-primary">
            Product List
          </div>
          <div className="from-muted-foreground">
            These are list of products that displayed for clients
          </div>
        </div>

        {/* Data Statistic */}

        <div className="box-shadow flex flex-col divide-y rounded-md bg-white py-6 lg:flex-row lg:divide-x lg:divide-y-0">
          {productsCard.map((list) => (
            <ConnectedCard
              key={list.title}
              title={list.title}
              value={list.value}
              detail={list.detail}
              Icon={list.Icon}
              bgColor={list.bgColor}
              textColor={list.textColor}
            />
          ))}
        </div>

        <ProductTable columns={productListColumn} data={products} />
      </section>
    );
  }
};

export default ProductList;
