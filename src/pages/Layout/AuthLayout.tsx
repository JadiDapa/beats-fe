import { Outlet, useNavigate } from "react-router-dom";
import { Suspense, memo, useEffect } from "react";
import useAuthStore from "@/lib/store/authStore";

const AuthLayout = memo(() => {
  const { userData } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (userData || token) {
      navigate("/");
    }
  }, [userData, navigate]);

  return (
    <Suspense fallback={null}>
      <div className="overflow-hidden bg-stone-100 font-jakarta text-foreground">
        <Outlet />
      </div>
    </Suspense>
  );
});

export default AuthLayout;
