import useSWR, { mutate } from "swr";
import Product from "@/types/product";
import { fetcher, useApiRequest } from "./useApiClient";

export function GetProducts() {
  const { data, error, isLoading } = useSWR("/products", fetcher);
  return {
    products: data?.data as Product[],
    isLoading,
    error,
  };
}

export const GetProductBySlug = (slug?: string) => {
  const { data, error, isLoading } = useSWR(`/products/${slug}`, fetcher);
  return {
    product: data?.data as Product,
    isLoading,
    error,
  };
};

export const PostProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();

  const postProduct = async (product: Product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("slug", product.slug);
    formData.append("price", product.price);
    formData.append("categorySlug", product.categorySlug as string);
    formData.append("description", product.description);
    formData.append("isFeatured", String(product.isFeatured));
    formData.append("image", product.image as File);
    formData.append("stock", product.stock);

    return await apiRequest("post", "/products/create", formData);
  };
  mutate("/products");

  return { postProduct, isLoading, error };
};

export const EditProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const editProduct = async (oldSlug: string, product: Product) => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("slug", product.slug);
    formData.append("price", product.price);
    formData.append("categorySlug", product.categorySlug as string);
    formData.append("description", product.description);
    formData.append("isFeatured", String(product.isFeatured));
    formData.append("image", product.image as File);
    formData.append("stock", product.stock);
    return await apiRequest("put", `/products/${oldSlug}`, formData);
  };
  mutate("/products");

  return { editProduct, isLoading, error };
};

export const DeleteProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const deleteProduct = async (slug: string) => {
    return await apiRequest("delete", `/products/${slug}`);
  };
  mutate("/products");
  return { deleteProduct, isLoading, error };
};
