import Category from "./category";

export default interface Product {
  id?: number;
  name: string;
  slug: string;
  price: string;
  description: string;
  image?: File | string | null;
  categorySlug?: string;
  isFeatured?: string;
  stock: string;
  createdAt?: Date;
  updatedAt?: Date;
  Categories?: Category;
}
