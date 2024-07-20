import useSWR, { mutate } from "swr";
import Category from "@/types/category";
import { fetcher, useApiRequest } from "./useApiClient";

export function GetCategories() {
  const { data, error, isLoading } = useSWR("/categories", fetcher);
  return {
    categories: data?.data as Category[],
    isLoading,
    error,
  };
}

export const GetCategoryBySlug = (slug?: string) => {
  const { data, error, isLoading } = useSWR(`/categories/${slug}`, fetcher);
  return {
    category: data?.data as Category,
    isLoading,
    error,
  };
};

export const PostCategory = () => {
  const { apiRequest, isLoading, error } = useApiRequest();

  const postCategory = async (category: Category) => {
    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("slug", category.slug);
    formData.append("image", category.image as File);
    return await apiRequest("post", "/categories/create", formData);
  };
  mutate("/categories");

  return { postCategory, isLoading, error };
};

export const EditCategory = () => {
  const { apiRequest, isLoading, error } = useApiRequest();

  const editCategory = async (oldSlug: string, category: Category) => {
    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("slug", category.slug);
    formData.append("image", category.image as File);
    return await apiRequest("put", `/categories/${oldSlug}`, formData);
  };
  mutate("/categories");

  return { editCategory, isLoading, error };
};

export const DeleteCategory = () => {
  const { apiRequest, isLoading, error } = useApiRequest();

  const deleteCategory = async (slug: string) => {
    return await apiRequest("delete", `/categories/${slug}`);
  };
  mutate("/categories");

  return { deleteCategory, isLoading, error };
};
