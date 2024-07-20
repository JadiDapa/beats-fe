import { GetCategories } from "@/api/useCategory";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import { Link } from "react-router-dom";

const Categories = () => {
  const { categories, error, isLoading } = GetCategories();
  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;
  return (
    <section id="categories" className="px-6 pb-12 pt-24 lg:px-24">
      <div className="w-full space-y-8 px-4 py-12">
        <div className="flex justify-center">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="max-w-fit border-b-4 border-primary text-4xl font-semibold"
          >
            Categories
          </h2>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:px-6">
          {categories.map((category, index) => (
            <Link
              data-aos="zoom-in-up"
              data-aos-duration="300"
              data-aos-delay={index * 200}
              to={`/categories/${category.slug}`}
              key={category.id}
              className="flex cursor-pointer items-center justify-between gap-2 rounded-lg bg-white px-4 py-2 transition hover:shadow-md"
            >
              <div className="space-y-1">
                <p className="text-xl font-semibold">{category.name}</p>
                <p className="text-sm">
                  {category.Products?.length || 0} Items
                </p>
              </div>
              <div className="aspect-square w-20 overflow-hidden lg:w-36">
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}/${category.image}`}
                  className="object-cover object-center"
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
