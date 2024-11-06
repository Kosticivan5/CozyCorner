import Link from "next/link";
import { Button } from "../ui/button";
import { TiShoppingCart } from "react-icons/ti";

const CartButton = async () => {
  const itemsInCart = 0;

  return (
    <Button
      asChild
      variant={"outline"}
      size={"icon"}
      className="flex items-center justify-center relative"
    >
      <Link href={"/cart"}>
        <div>
          <span className="absolute -top-2 -right-2 bg-primary text-white dark:text-secondary rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {itemsInCart}
          </span>
          <TiShoppingCart />
        </div>
      </Link>
    </Button>
  );
};
export default CartButton;
