import { Col, Row, Container } from "react-bootstrap";
import { StoreItem } from "../../../components/StoreItem";
import storeItems from "../../../data/items.json";

type CategoryItemPageProps = {
  categoryName: string | null;
};

export const CategoryItemPage = ({ categoryName }: CategoryItemPageProps) => {
  const categoryItems = storeItems.filter(
    ({ category }) => category === categoryName
  );

  return (
    <>
      <Container fluid>
        <h1>{categoryName}</h1>
        <span>back</span>
      </Container>
      <Row md={2} xs={1} lg={3} className="g-3">
        {categoryItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
