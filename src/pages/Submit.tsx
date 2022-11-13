import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getTotalPrice } from "../utilities/getTotalPrice";
import { MEDIA_ENDPOINT } from "../App";

export const Submit = () => {
  const { cartItems } = useShoppingCart();

  const getItemPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const renderCartItems = () => {
    return cartItems.map((item) => {
      return (
        <Row className="d-flex align-items-center ps-4 pe-4 pt-3 pb-3 border-start border-end">
          <Col sm={4}>
            <img
              src={`${MEDIA_ENDPOINT}${item.image}`}
              className="border rounded"
              style={{
                width: "100px",
                height: "60px",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col sm={4}>{item.name}</Col>
          <Col sm={4} className="d-flex justify-content-start">
            {getTotalPrice([item])}
          </Col>
        </Row>
      );
    });
  };

  return (
    <Container>
      <Row className="border rounded-top p-4">
        <h1>Purchase Order</h1>
        <span>Order preview</span>
      </Row>
      <Row className="border-start border-end p-4">
        <span>My Products</span>
      </Row>
      {renderCartItems()}
      <Row>Total section</Row>
      <Row>
        <Row>
          <Col>Your Name</Col>
          <Col>First Name</Col>
          <Col>Last Name</Col>
        </Row>
      </Row>
      <Row>
        <Row>
          <Col>Your Email</Col>
          <Col>Email input</Col>
        </Row>
      </Row>
      <Row>
        <Row>
          <Col>Shipping address</Col>
          <Col>Street address input</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Street address input 2</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>City input</Col>
          <Col>State input</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Postal zip code</Col>
        </Row>
      </Row>
      <Row>
        <Button>Submit</Button>
      </Row>
    </Container>
  );
};
