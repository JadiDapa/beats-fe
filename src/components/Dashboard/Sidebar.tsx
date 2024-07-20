import { NavLink } from "react-router-dom";
import { Home, ListChecks, ShoppingBag, X } from "lucide-react";

const sidebarLink = [
  {
    name: "Dashboard",
    url: "/dashboard",
    Icon: Home,
  },
  {
    name: "Products",
    url: "/dashboard/product-list",
    Icon: ShoppingBag,
  },
  {
    name: "Categories",
    url: "/dashboard/category-list",
    Icon: ListChecks,
  },
];

interface SidebarProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleOpen }) => {
  return (
    <aside
      className={`box-shadow fixed z-50 min-h-screen w-[260px] overflow-hidden bg-white p-4 transition-all duration-500 ${isOpen ? "translate-x-0" : "max-lg:-translate-x-full"}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <figure className="size-14 overflow-hidden">
            <img
              src="/images/logo.png"
              className="object-cover object-center"
            />
          </figure>
          <div className="text-3xl font-bold text-primary">GIZMO</div>
        </div>
        <X
          className="lg:hidden"
          onClick={handleOpen}
          size={24}
          strokeWidth={1.7}
        />
      </div>

      <div className="mt-6">
        {sidebarLink.map((link) => (
          <NavLink
            key={link.url}
            to={link.url}
            end
            className={({ isActive }) =>
              `${isActive ? "bg-primary text-white shadow-md" : "hover:bg-slate-100"} mt-1 flex w-full items-center justify-between rounded-md px-2.5 py-2.5 duration-300`
            }
          >
            <div className={`"justify-center flex items-center gap-3`}>
              <link.Icon strokeWidth={1.5} size={20} />
              <div>{link.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
