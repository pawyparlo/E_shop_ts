import categoryItem from "../../data/categories.json";
import { Col, Row } from "react-bootstrap";
import { CategoryItem } from "../../components/CategoryItem";

export const Store = () => {
  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <h1>Categories</h1>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {categoryItem.map((item, index) => (
          <Col key={index}>
            <CategoryItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
