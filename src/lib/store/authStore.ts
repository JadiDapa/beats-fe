import Account from "@/types/accounts";
import { create } from "zustand";

type AuthStore = {
  userData: Account | null;
  saveUser: (userData: Account) => void;
  removeUser: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  userData: null,
  saveUser: (userData: Account) => set({ userData: userData }),
  removeUser: () => set({ userData: null }),
}));

export default useAuthStore;
