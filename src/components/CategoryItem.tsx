import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CategoryProps } from "../context/CategoriesContext";
import { MEDIA_ENDPOINT } from "../App";

export const CategoryItem = ({
  name,
  // description,
  image,
}: CategoryProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
        // For now hardcoded
        src={`${MEDIA_ENDPOINT}${image}`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {/* <Card.Text>{description}</Card.Text> */}
        <Button
          className="w-100"
          variant="primary"
          onClick={() => navigate(`${name.toLowerCase()}`)}
        >
          Select category
        </Button>
      </Card.Body>
    </Card>
  );
};
