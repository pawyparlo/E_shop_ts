import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { Router } from "./Router";

export const MEDIA_ENDPOINT = "http://localhost:8000/media/";

// TODO: Rethink context structure

function App() {
  return (
    <ShoppingCartProvider>
      <CategoriesProvider>
        <Navbar />
        <Container className="mb-4">
          <Router />
        </Container>
      </CategoriesProvider>
    </ShoppingCartProvider>
  );
}

export default App;
