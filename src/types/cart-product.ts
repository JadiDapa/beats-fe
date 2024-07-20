import Account from "./accounts";
import Product from "./product";

export interface CartProduct {
  id?: number;
  Account?: Account;
  accountId: number;
  Product?: Product;
  productSlug: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
