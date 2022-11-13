import { CartItemProps } from "../components/CartItem";
import { formatCurrency } from "./formatCurrency";

export const getTotalPrice = (cartItems: CartItemProps[]) => {
  return formatCurrency(
    cartItems.reduce((total, cartItem) => {
      return total + (cartItem.price || 0) * cartItem.quantity;
    }, 0)
  );
};
