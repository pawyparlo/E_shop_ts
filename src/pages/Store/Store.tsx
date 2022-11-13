// import categoryItem from "../../data/categories.json";
import { Col, Row } from "react-bootstrap";
import { CategoryItem } from "../../components/CategoryItem";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCTS } from "../../services/graphql";
import { useCategories } from "../../context/CategoriesContext";

export const Store = () => {
  const { categoriesData, categoriesError, categoriesLoading } =
    useCategories();
  if (categoriesLoading) return <div>Loading...</div>;
  if (categoriesError) return <div>Error...</div>;

  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <h1>Categories</h1>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {categoriesData?.categories.map((item, index) => (
          <Col key={index}>
            <CategoryItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
