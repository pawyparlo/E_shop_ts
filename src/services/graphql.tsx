import { gql } from "@apollo/client";

export const ProductFragment = gql`
  fragment ProductFragment on ProductType {
    id
    category {
      name
    }
    name
    image
    description
    price
    available
  }
`;

export const OrderFragment = gql`
  fragment OrderFragment on OrderType {
    firstName
    lastName
    email
    address
    city
    paid
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  ${ProductFragment}
  query getProduct($productId: ID!) {
    product(productId: $productId) {
      ...ProductFragment
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY_NAME = gql`
  ${ProductFragment}
  query getProductByCategoryName($input: String!) {
    productsByCategory(categoryName: $input) {
      ...ProductFragment
    }
  }
`;

export const GET_PRODUCTS = gql`
  ${ProductFragment}
  query getProduct {
    products {
      ...ProductFragment
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      image
      slug
    }
  }
`;

export const GET_ORDER = gql`
  ${OrderFragment}
  ${ProductFragment}
  query getOrder($orderId: ID!) {
    order(orderId: $orderId) {
      ...OrderFragment
      items {
        quantity
        product {
          ...ProductFragment
        }
      }
    }
  }
`;

export const GET_ORDERS = gql`
  ${OrderFragment}
  ${ProductFragment}
  query getOrders {
    order {
      ...OrderFragment
      items {
        quantity
        product {
          ...ProductFragment
        }
      }
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation createOrder($input: OrderCreateInput!) {
    createOrder(orderInput: $input) {
      completed
    }
  }
`;
