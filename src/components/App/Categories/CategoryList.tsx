import { GetCategories } from "@/api/useCategory";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { categories, error, isLoading } = GetCategories();
  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-24">
      {categories.map((category, index) => (
        <Link
          data-aos="zoom-in-up"
          data-aos-duration="300"
          data-aos-delay={index * 300}
          to={`/categories/${category.slug}`}
          key={category.id}
          className="flex aspect-square cursor-pointer flex-col items-center justify-between rounded-lg bg-white px-4 py-2 shadow-sm transition-all duration-500 hover:scale-105 hover:shadow-xl"
        >
          <div className="aspect-square w-5/6 overflow-hidden p-4">
            <img
              src={`${import.meta.env.VITE_IMAGE_URL}/${category.image}`}
              className="object-cover object-center"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl font-semibold">{category.name}</div>
            <div className="text-lg">{"3"} Items</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
