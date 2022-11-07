import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CategoryProps } from "../pages/Store/Store"


export const CategoryItem = ({
  name,
  // description,
  image,
}: CategoryProps) => {
  const navigate = useNavigate();
  console.log(`http://127.0.0.1:8000/${image}`)
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
        src={`http://localhost:8000/${image}`}
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
