import Product from "@/types/product";

interface FeaturedSwitchProps {
  product: Product;
}

import { Switch } from "@/components/ui/switch";

import { EditProduct } from "@/api/useProducts";

const FeaturedSwitch: React.FC<FeaturedSwitchProps> = ({ product }) => {
  const { editProduct } = EditProduct();

  async function handleUpdate() {
    const updatedProduct = {
      ...product,
      isFeatured: product.isFeatured === "true" ? "false" : "true",
    };
    const result = await editProduct(product.slug, updatedProduct);

    if (result) {
      console.log("success");
    }
  }

  return (
    <Switch
      checked={product.isFeatured === "true"}
      onCheckedChange={handleUpdate}
    />
  );
};

export default FeaturedSwitch;
