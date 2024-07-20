import { ShoppingCart } from "lucide-react";
import Product from "@/types/product";
import { Link } from "react-router-dom";
import { PostCartProduct } from "@/api/useCartProduct";
import useAuthStore from "@/lib/store/authStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { userData } = useAuthStore();
  const { postCartProduct } = PostCartProduct();

  const handleCartProduct = async () => {
    const result = await postCartProduct({
      accountId: userData!.id!,
      productSlug: product.slug,
      quantity: 1,
    });

    if (result) {
      toast.success("Product Added To Your Cart!");
    } else {
      toast.error("Something Went Wrong!");
    }
  };
  return (
    <div className="group flex cursor-pointer flex-col gap-2 rounded-lg border-2 border-transparent bg-background p-2 pb-2 shadow-md transition-all duration-500 hover:-translate-y-2 hover:bg-primary hover:text-white">
      <Link
        to={`/products/${product.slug}`}
        className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-white transition-all duration-500 group-hover:bg-primary"
      >
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${product.image}`}
          className="h-4/5 w-4/5 object-contain object-center transition-all duration-300 group-hover:scale-105"
          alt={product.name}
        />
      </Link>
      <div className="flex w-full items-center justify-between gap-1.5">
        <Link to={`/products/${product.slug}`} className="space-y-0.5">
          <div className="text-sm font-bold">{product.name}</div>
          {product.Categories && (
            <div className="text-xs">{product.Categories.name}</div>
          )}
        </Link>
        <div
          onClick={handleCartProduct}
          className="flex size-7 items-center justify-center rounded-full bg-primary text-white"
        >
          <ShoppingCart size={16} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
