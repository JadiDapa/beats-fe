import Product from "./product";

export default interface Category {
  id?: number;
  name: string;
  slug: string;
  image?: string | File | null;
  createdAt?: Date;
  updatedAt?: Date;
  Products?: Product[];
}
