import Account from "@/types/accounts";
import useSWR, { mutate } from "swr";
import { fetcher, useApiRequest } from "./useApiClient";

export const GetAccountById = (id?: number) => {
  const { data, error, isLoading } = useSWR(`/accounts/${id}`, fetcher);
  return {
    account: data?.data as Account,
    isLoading,
    error,
  };
};

export const LoginAccount = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const login = async (account: Account) => {
    return await apiRequest("post", "/accounts/login", account);
  };
  mutate("/accounts");

  return { login, isLoading, error };
};

export const RegisterAccount = () => {
  const { apiRequest, isLoading, error } = useApiRequest();
  const register = async (account: Account) => {
    return await apiRequest("post", "/accounts/create", account);
  };
  mutate("/accounts");

  return { register, isLoading, error };
};
