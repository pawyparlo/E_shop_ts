import { useShoppingCart } from "../context/ShoppingCartContext";
import { Stack, Button } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { MEDIA_ENDPOINT } from "../App";

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export const CartItem = ({
  id,
  name,
  price,
  quantity,
  image,
}: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={`${MEDIA_ENDPOINT}${image}`}
        style={{
          width: "125px",
          height: "75px",
          objectFit: "cover",
        }}
      />
      <div className="me-auto">
        <div>
          {name}{" "}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{
                fontSize: ".65rem",
              }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div
          className="text-muted"
          style={{
            fontSize: "75.rem",
          }}
        >
          {formatCurrency(price)}
        </div>
      </div>
      <div>{formatCurrency(price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
