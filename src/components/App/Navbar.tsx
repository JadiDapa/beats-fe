import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileNav from "./Home/MobileNav";
import useAuthStore from "@/lib/store/authStore";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const links = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Products",
    route: "/products",
  },
  {
    name: "Categories",
    route: "/categories",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { userData, removeUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    removeUser();
    localStorage.removeItem("jwt");
    localStorage.removeItem("userData");
    toast.success("Log Out Success!");
    navigate("/");
  };

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 transition lg:px-24",
        { "bg-stone-50 shadow-sm": isScrolled },
      )}
    >
      <figure className="flex items-center gap-3">
        <div className="w-8 lg:w-10">
          <img src="/images/logo.png" className="object-cover" alt="" />
        </div>
        <span className="text-xl font-semibold text-primary lg:text-2xl">
          BEATS
        </span>
      </figure>
      <div className="block lg:hidden">
        <MobileNav links={links} />
      </div>

      <div className="hidden gap-6 lg:flex">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.route}
            className={({ isActive }) =>
              `border-b-2 border-transparent text-lg transition hover:border-primary ${isActive ? "font-semibold text-primary" : "text-muted-foreground"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      {userData ? (
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/cart">
            <Button className="rounded-full">
              <ShoppingCart />
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            variant={"outline"}
            className="rounded-full px-9"
          >
            Log Out
          </Button>
        </div>
      ) : (
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login">
            <Button className="rounded-full px-9">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="rounded-full px-9" variant={"outline"}>
              Register
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
