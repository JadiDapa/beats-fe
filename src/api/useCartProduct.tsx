import useSWR, { mutate } from "swr";
import { CartProduct } from "@/types/cart-product";
import { fetcher, useApiRequest } from "./useApiClient";
import useAuthStore from "@/lib/store/authStore";

export function GetCartProducts() {
  const { data, error, isLoading } = useSWR("/cart-products", fetcher);
  return {
    cartProducts: data?.data as CartProduct[],
    isLoading,
    error,
  };
}

export const GetCartProductBySlug = (slug?: string) => {
  const { data, error, isLoading } = useSWR(`/cart-products/${slug}`, fetcher);
  return {
    cartProduct: data?.data as CartProduct,
    isLoading,
    error,
  };
};

export function GetCartProductsByAccountId(accountId?: string) {
  const { data, error, isLoading } = useSWR(
    `/cart-products/account/${accountId}`,
    fetcher,
  );
  return {
    cartProducts: data?.data as CartProduct[],
    isLoading,
    error,
  };
}

export const PostCartProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();

  const postCartProduct = async (cartProduct: CartProduct) => {
    return await apiRequest("post", "/cart-products/create", cartProduct);
  };
  mutate("/cart-products");

  return { postCartProduct, isLoading, error };
};

export const EditCartProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const { userData } = useAuthStore();

  const editCartProduct = async (cartProduct: CartProduct) => {
    return await apiRequest(
      "put",
      `/cart-products/${cartProduct.id}`,
      cartProduct,
    );
  };
  mutate(`/cart-products/account/${userData?.id}`);

  return { editCartProduct, isLoading, error };
};

export const DeleteCartProduct = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const { userData } = useAuthStore();

  const deleteCartProduct = async (id: string) => {
    return await apiRequest("delete", `/cart-products/${id}`);
  };
  mutate(`/cart-products/account/${userData?.id}`);

  return { deleteCartProduct, isLoading, error };
};
