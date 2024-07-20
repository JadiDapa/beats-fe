import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";
import { Suspense, memo, useEffect } from "react";
import Navbar from "@/components/App/Navbar";
import Footer from "@/components/App/Footer";
import useAuthStore from "@/lib/store/authStore";

const AppLayout = memo(() => {
  const { userData, saveUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userLocal = localStorage.getItem("userData");

      if (!userData && userLocal) {
        saveUser(JSON.parse(userLocal));
      }
    };

    fetchData();
  }, [navigate, saveUser, userData]);

  return (
    <Suspense fallback={null}>
      <div className="overflow-hidden bg-stone-100 font-jakarta text-foreground">
        <Navbar />
        <div className="mt-20">
          <Outlet />
          <ScrollRestoration />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
});

export default AppLayout;
