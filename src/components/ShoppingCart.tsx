import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router";

type ShoppingCartProps = {
  isOpen: boolean;
};

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, setIsOpen } = useShoppingCart();

  const navigate = useNavigate();

  const submitOrder = () => {
    setIsOpen(false);
    navigate("submit")
  }

  const getTotalPrice = () => {
    return formatCurrency(
      cartItems.reduce((total, cartItem) => {
        return total + (cartItem.price || 0) * cartItem.quantity;
      }, 0)
    );
  };

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">Total {getTotalPrice()}</div>
          <Button variant="primary" onClick={submitOrder}>Order</Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
