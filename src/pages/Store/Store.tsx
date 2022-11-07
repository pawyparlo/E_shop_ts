// import categoryItem from "../../data/categories.json";
import { Col, Row } from "react-bootstrap";
import { CategoryItem } from "../../components/CategoryItem";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCTS } from "../../services/graphql";

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  description: string; // TODO
  slug: string;
}

interface CategoriesData {
  categories: CategoryProps[]
}

export const Store = () => {
  const { data: categoryItems, loading, error } = useQuery<CategoriesData | undefined>(GET_CATEGORIES);

  console.log(categoryItems);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="d-flex justify-content-center mb-2">
        <h1>Categories</h1>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {categoryItems?.categories.map((item, index) => (
          <Col key={index}>
            <CategoryItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
