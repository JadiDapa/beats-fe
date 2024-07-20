import { Menu, LogOut } from "lucide-react";
import SearchDialog from "./SearchDialog";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/lib/store/authStore";

type NavbarDashboardProps = {
  handleOpen?: () => void;
};

const NavbarDashboard: React.FC<NavbarDashboardProps> = ({ handleOpen }) => {
  const { removeUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUser();
    localStorage.removeItem("jwt");
    return navigate("/");
  };

  return (
    <nav className="box-shadow flex w-full items-center justify-between rounded-md bg-white px-4 py-2">
      <div className="flex items-center gap-3">
        <Menu className="block lg:hidden" onClick={handleOpen} />
        <SearchDialog />
      </div>

      <Button onClick={handleLogout}>
        <LogOut size={20} />
      </Button>
    </nav>
  );
};

export default NavbarDashboard;
