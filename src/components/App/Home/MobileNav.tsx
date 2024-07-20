import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Links {
  name: string;
  route: string;
}

interface MobileNavProps {
  links: Links[];
}

const MobileNav: React.FC<MobileNavProps> = ({ links }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={28} />
      </SheetTrigger>
      <SheetContent side={"left"} className="bg-primary">
        <SheetHeader>
          <SheetTitle className="flex w-full items-center justify-center gap-3">
            <div className="w-8 brightness-0 invert filter lg:w-10">
              <img src="/images/logo.png" className="object-cover" alt="" />
            </div>
            <span className="text-xl text-background lg:text-2xl">GIZMO</span>
          </SheetTitle>
          <SheetDescription className="text-background">
            Discover the Future
          </SheetDescription>
          <div className="flex flex-col pt-6">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.route}
                  className={({ isActive }) =>
                    `text-start text-xl text-white ${
                      isActive ? "font-semibold underline" : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <Button
                variant={"outline"}
                className="rounded-md border-background bg-transparent px-9 text-background hover:bg-white hover:text-foreground"
              >
                Login
              </Button>
              <Button className="rounded-md border border-transparent bg-background px-9 text-foreground hover:border-background hover:bg-transparent hover:text-background">
                Login
              </Button>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
