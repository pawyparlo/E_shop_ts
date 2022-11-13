import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getTotalPrice } from "../utilities/getTotalPrice";
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
    navigate("submit");
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
          <div className="ms-auto fw-bold fs-5">
            Total {getTotalPrice(cartItems)}
          </div>
          <Button variant="primary" onClick={submitOrder}>
            Order
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
