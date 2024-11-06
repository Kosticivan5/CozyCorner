import { FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

const FavoriteToggleButton = ({ productId }: { productId: string }) => {
  // need to remove the key - vercel
  return (
    <Button
      key={productId}
      variant={"outline"}
      size={"icon"}
      className="p-2 cursor-pointer"
    >
      <FaHeart />
    </Button>
  );
};
export default FavoriteToggleButton;
