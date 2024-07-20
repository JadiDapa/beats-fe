import { Suspense, memo, useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar";
import useAuthStore from "@/lib/store/authStore";
const DashboardLayout = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, saveUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userLocal = localStorage.getItem("userData");
      if (!userData && !userLocal) {
        return navigate("/login");
      }

      if (!userData && userLocal) {
        saveUser(JSON.parse(userLocal));
      }
    };

    fetchData();
  }, [navigate, saveUser, userData]);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (userData) {
      if (!userData.isAdmin) {
        return navigate("/");
      }
    }
  });

  return (
    <Suspense fallback={null}>
      <section className="flex min-h-screen w-full overflow-hidden border bg-[#F8F7FA] font-jakarta text-foreground lg:gap-12">
        <div>
          <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
        </div>

        <main className="w-full p-4 transition-all duration-500 lg:ml-[220px]">
          <Navbar handleOpen={handleOpen} />
          <Outlet />
          <ScrollRestoration />
        </main>
      </section>
    </Suspense>
  );
});

export default DashboardLayout;
