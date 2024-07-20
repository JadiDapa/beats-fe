import OrderSummary from "@/components/App/Cart/OrderSummary";
import { GetCartProductsByAccountId } from "@/api/useCartProduct";
import DataLoading from "@/components/Dashboard/DataLoading";
import ErrorState from "@/components/Dashboard/ErrorState";
import useAuthStore from "@/lib/store/authStore";
import CartProductItem from "@/components/App/Cart/CartProductItem";

const Cart = () => {
  const { userData } = useAuthStore();

  const { cartProducts, isLoading, error } = GetCartProductsByAccountId(
    userData?.id?.toString(),
  );

  if (isLoading) return <DataLoading />;
  if (error) return <ErrorState />;

  const total = cartProducts.reduce((accumulator, item) => {
    if (item) {
      const parsePrice = parseInt(item.Product!.price.replace(/\./g, ""), 10);
      const countSubtotal = item.quantity * parsePrice;
      return accumulator + countSubtotal;
    }
    return accumulator;
  }, 0);

  return (
    <section className="px-6 pb-12 pt-12 lg:px-24 lg:pt-24">
      <div className="flex flex-col gap-6">
        <h1 className="max-w-fit border-b-4 border-primary text-4xl font-semibold lg:text-5xl">
          Your Product Cart
        </h1>
        <div className="flex flex-col gap-24 lg:flex-row">
          <div className="flex w-full basis-[65%] flex-col gap-6">
            <section className="w-full divide-y-2">
              {cartProducts.map((item) => (
                <CartProductItem key={item.id} item={item} />
              ))}
            </section>
          </div>
          <OrderSummary subTotal={total} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
