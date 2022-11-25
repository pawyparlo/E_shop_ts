import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { getTotalPrice } from "../utilities/getTotalPrice";
import { MEDIA_ENDPOINT } from "../App";
import { Input } from "../ReusableComponents/Input";

export const Submit = () => {
  const { cartItems } = useShoppingCart();

  const getItemPrice = (price: number, quantity: number) => {
    return price * quantity;
  };

  const renderCartItems = () => {
    return cartItems.map((item) => {
      return (
        <Row className="d-flex align-items-center ps-4 pe-4 pt-3 pb-3 border-start border-end border-bottom">
          <Col sm={6}>
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
          <Col sm={2} className="d-flex justify-content-start">
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
      <Row className="ps-4 pe-4 pt-3 pb-5 border-start border-end">
        <Col sm={9}></Col>
        <Col sm={3} className="d-flex justify-content-start">
          Total section {getTotalPrice(cartItems)}
        </Col>
      </Row>
      <Row className="ps-4 pe-4 pt-3 pb-5 border-start border-end">
        <Col sm={4}>Your Name</Col>
        <Col sm={4}>
          <Input label="First Name" />
        </Col>
        <Col sm={4}>
          <Input label="Last Name" />
        </Col>
      </Row>
      <Row className="ps-4 pe-4 pt-3 pb-5 border-start border-end">
        <Col sm={4}>Your Email</Col>
        <Col sm={8}>
          <Input
            label="example@example.com"
            placeholder="ex: example@example.com"
          />
        </Col>
      </Row>
      <Row className="ps-4 pe-4 pt-3 pb-5 border-start border-end">
        <Col sm={4}>Shipping Address</Col>
        <Col sm={8}>
          <Row className="pb-4" fluid>
            <Input label="Street Address" />
          </Row>
          <Row className="pb-4" fluid>
            <Input label="Street Address Line 2" />
          </Row>
          <Row className="pb-4" fluid>
            <Col sm={6}>
              <Input label="City" />
            </Col>
            <Col sm={6}>
              <Input label="State / Province" />
            </Col>
          </Row>
          <Row fluid>
            <Input label="Postal / Zip Code" />
          </Row>
        </Col>
      </Row>
      <Row className="ps-4 pe-4 pt-5 pb-5 border rounded">
        <Row sm={6} className="d-flex justify-content-center">
          <Button size="lg">Submit</Button>
        </Row>
      </Row>
    </Container>
  );
};

//https://www.jotform.com/form-templates/product-purchase-order-form
