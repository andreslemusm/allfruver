import { Button } from "@components/lib";
import { HiShoppingCart } from "react-icons/hi";

export const ShoppingCart = (): React.ReactElement => (
  <Button leftIcon={HiShoppingCart} size="sm">
    1
  </Button>
);
