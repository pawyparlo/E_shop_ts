import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type CategoryItemProps = {
  name: string;
  description: string;
  imgUrl: string;
};

export const CategoryItem = ({
  name,
  description,
  imgUrl,
}: CategoryItemProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
        src={imgUrl}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
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
