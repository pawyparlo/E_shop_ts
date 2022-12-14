import { Col, Row, Button } from "react-bootstrap";
import { StoreItem } from "../../../components/StoreItem";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_CATEGORY_NAME } from "../../../services/graphql";

type CategoryItemPageProps = {
  categoryName: string | null;
};
// TODO Type Query

export const CategoryItemPage = ({ categoryName }: CategoryItemPageProps) => {
  const navigate = useNavigate();
  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useQuery(GET_PRODUCT_BY_CATEGORY_NAME, {
    variables: {
      input: categoryName,
    },
  });

  if (productsLoading) return <div>Loading...</div>;
  if (productsError) return <div>Error...</div>;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{categoryName}</h1>
        <Button
          style={{ width: "50px", height: "40px" }}
          className="d-flex align-items-center justify-content-center"
          onClick={() => navigate("/categories")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </Button>
      </div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {productsData?.productsByCategory.map((item: any) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
