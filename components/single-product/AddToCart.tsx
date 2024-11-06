import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
  // remove key - vercel
  return (
    <Button key={productId} className="capitalize mt-8" size={"lg"}>
      Add to cart
    </Button>
  );
};
export default AddToCart;
