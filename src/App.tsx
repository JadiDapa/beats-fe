import { useMemo } from "react";
import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./pages/Layout/AppLayout";
import DashboardLayout from "./pages/Layout/DashboardLayout";
import Home from "./pages/App/Home";
import Products from "./pages/App/Products";
import Categories from "./pages/App/Categories";
import About from "./pages/App/About";
import Contact from "./pages/App/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductList from "./pages/Dashboard/ProductList";
import CategoryList from "./pages/Dashboard/CategoryList";
import CreateProduct from "./pages/Dashboard/CreateProduct";
import AuthLayout from "./pages/Layout/AuthLayout";
import Login from "./pages/Auth/Login";
import ProductDetail from "./pages/App/ProductDetail";
import CategoryProduct from "./pages/App/CategoryProduct";
import UpdateProduct from "./pages/Dashboard/UpdateProduct";
import Register from "./pages/Auth/Register";
import Cart from "./pages/App/Cart";

const RouterBuilder = () => {
  //Only for client to see
  const generalRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/products/:productSlug",
      element: <ProductDetail />,
    },
    {
      path: "/categories",
      element: <Categories />,
    },
    {
      path: "/categories/:categorySlug",
      element: <CategoryProduct />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ];

  // Authentication Layout
  const authRoutes: RouteObject[] = [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  //Only for admin to see
  const adminRoutes: RouteObject[] = [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/product-list",
      element: <ProductList />,
    },
    {
      path: "/dashboard/create-product",
      element: <CreateProduct />,
    },
    {
      path: "/dashboard/update-product/:productSlug",
      element: <UpdateProduct />,
    },
    {
      path: "/dashboard/category-list",
      element: <CategoryList />,
    },
  ];

  const routes = createBrowserRouter([
    {
      element: <AppLayout />,
      children: generalRoutes,
    },
    {
      element: <AuthLayout />,
      children: authRoutes,
    },
    {
      element: <DashboardLayout />,
      children: adminRoutes,
    },
  ]);

  return routes;
};

function App() {
  const routes = useMemo(() => RouterBuilder(), []);

  return <RouterProvider router={routes} />;
}

export default App;
