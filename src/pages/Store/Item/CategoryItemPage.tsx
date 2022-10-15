import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../../../components/StoreItem";
import storeItems from "../../../data/items.json";

type CategoryItemPageProps = {
  currentName: string | null;
};

export const CategoryItemPage = ({ currentName }: CategoryItemPageProps) => {
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <h1>{currentName}</h1>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
