import { CartProduct } from "@/types/cart-product";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { DeleteCartProduct, EditCartProduct } from "@/api/useCartProduct";

interface CartProductItemProps {
  item: CartProduct;
}

const CartProductItem = ({ item }: CartProductItemProps) => {
  const { editCartProduct } = EditCartProduct();
  const { deleteCartProduct } = DeleteCartProduct();
  const parsePrice =
    item && parseInt(item.Product!.price.replace(/\./g, ""), 10);
  const countSubtotal = item.quantity * parsePrice;
  const displaySubtotal = new Intl.NumberFormat("de-DE").format(countSubtotal);

  const handleIncrease = async () => {
    editCartProduct({
      id: item.id,
      accountId: item.accountId,
      productSlug: item.productSlug,
      quantity: item.quantity + 1,
    });
  };

  const handleDecrease = async () => {
    if (item.quantity === 0) {
      deleteCartProduct(item.id!.toString());
    } else {
      editCartProduct({
        id: item.id,
        accountId: item.accountId,
        productSlug: item.productSlug,
        quantity: item.quantity - 1,
      });
    }
  };

  return (
    <div key={item.id} className="flex w-full flex-wrap gap-6 py-6">
      <figure className="size-32 rounded-lg border-2 lg:size-48">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${item.Product?.image}`}
          alt=""
        />
      </figure>
      <div className="flex flex-grow flex-col justify-center gap-4">
        <p className="text-xl font-semibold lg:text-3xl lg:font-bold">
          {item.Product?.name}
        </p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="font-medium lg:text-xl">
            Price : Rp {item.Product?.price}
          </div>
          <div className="mt-2 flex items-center gap-5">
            <Button
              variant={"secondary"}
              size={"icon"}
              className="border border-primary"
              onClick={handleDecrease}
            >
              <Minus className="lg:text-3xl" />
            </Button>
            <span className="flex w-4 text-lg font-medium">
              {item.quantity}
            </span>
            <Button size={"icon"} onClick={handleIncrease}>
              <Plus className="lg:text-3xl" />
            </Button>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div className="hidden lg:block lg:text-lg">
            Stock : {item.Product?.stock}
          </div>
          <div className="text-xl font-semibold lg:text-2xl">
            Rp {displaySubtotal}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProductItem;
