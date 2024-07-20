import { MonitorSpeaker, Computer } from "lucide-react";
import ConnectedCard from "@/components/Dashboard/ConnectedCard";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { GetCategories } from "@/api/useCategory";
import CategoryTable from "@/components/Dashboard/Category/CategoryTable";
import { categoryListColumn } from "@/utils/columns/category-list";

const CategoryList = () => {
  const { categories, isLoading, error } = GetCategories();

  const productsCard = [
    {
      title: "Total of Categories",
      value: categories?.length,
      Icon: MonitorSpeaker,
      detail: "Total of every categories",
      bgColor: "#ee4444",
      textColor: "#fff",
    },
    {
      title: "Total of Products",
      value: categories?.length,
      Icon: Computer,
      detail: "Total of every products",
      bgColor: "#eedd44",
      textColor: "#ffffff",
    },
  ];

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;
  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="space-y-2">
        <div className="text-3xl font-medium capitalize text-primary">
          Category List
        </div>
        <div className="from-muted-foreground">
          These are list of product categories that suits to your products
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

      <CategoryTable columns={categoryListColumn} data={categories} />
    </section>
  );
};

export default CategoryList;
