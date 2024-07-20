import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  subTotal: number;
}

export default function OrderSummary({ subTotal }: OrderSummaryProps) {
  const formatedSubtotal = new Intl.NumberFormat("de-DE").format(subTotal);
  const formatedTax = new Intl.NumberFormat("de-DE").format(
    (subTotal * 2) / 100,
  );
  const formatedTotal = new Intl.NumberFormat("de-DE").format(
    subTotal + (subTotal * 2) / 100,
  );
  return (
    <div className="flex w-full basis-[35%] flex-col gap-8">
      <div className="flex flex-col gap-4 rounded-lg border-2 border-primary border-slate-300 p-6">
        <h3 className="text-xl font-bold lg:text-2xl">Order Summary</h3>
        <div className="flex items-center justify-between">
          <p className="text-slate-500">Subtotal</p>
          <h3 className="text-base font-medium lg:text-lg">
            Rp {formatedSubtotal}
          </h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-slate-500">TAX (2%)</p>
          <h3 className="text-lg font-medium lg:text-lg">Rp {formatedTax}</h3>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold text-primary">TOTAL</p>
          <h3 className="text-2xl font-bold lg:text-3xl">Rp {formatedTotal}</h3>
        </div>
        <Button className="mt-2 h-12 border border-primary text-lg font-medium">
          Beli
        </Button>
      </div>
    </div>
  );
}
