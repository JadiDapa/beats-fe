import CategoryList from "@/components/App/Categories/CategoryList";

const Categories = () => {
  return (
    <>
      <h1 className="mx-auto max-w-fit border-b-4 border-primary pt-16 text-6xl font-semibold">
        Categories
      </h1>
      <h2 className="mt-4 px-4 text-center text-xl text-muted-foreground">
        Select categories of product you wanted
      </h2>
      <CategoryList />
    </>
  );
};

export default Categories;
