import { Search } from "lucide-react";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";

export default function SearchDialog() {
  const [search, setSearch] = useState("");
  const [pages] = useState([
    {
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      name: "Products",
      url: "/dashboard/product-list",
    },
    {
      name: "Create Product",
      url: "/dashboard/create-product",
    },
    {
      name: "Categories",
      url: "/dashboard/category-list",
    },
  ]);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const filteredSection = pages.filter((page) =>
    page.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full duration-300 hover:bg-gray-200">
        <Search strokeWidth={1.5} size={24} />
      </div>
      <Dialog>
        <DialogTrigger className="text-lg text-gray-400">Search</DialogTrigger>
        <DialogContent className="flex flex-col px-0 pb-0 pt-4 lg:min-w-[660px]">
          <div className="relative w-80 pl-8">
            <Search className="absolute left-10 top-1.5 text-sm text-slate-400" />
            <Input
              type="text"
              placeholder="Search a page"
              value={search}
              onChange={handleChange}
              className="pl-10"
            />
          </div>
          <hr />
          <div className="flex h-72 flex-col overflow-y-scroll px-8 py-4">
            {filteredSection?.map((section) => (
              <Link
                key={section.name}
                to={section.url}
                className="group pt-2 duration-300 hover:rounded-lg hover:bg-gray-100"
              >
                <DialogTrigger className="flex flex-col items-start">
                  <div className="translate-x-2 font-semibold">
                    {section.name}
                  </div>
                  <div className="translate-x-2 text-sm text-slate-500">
                    {section.url}
                  </div>
                </DialogTrigger>
                <hr className="mt-2 group-hover:opacity-0" />
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
