import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store/Store";
import { NoMatch } from "./pages/NoMatch";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { CategoryItemPage } from "./pages/Store/Item/CategoryItemPage";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/categories" element={<Store />} />
          <Route
            path="/categories/books"
            element={<CategoryItemPage currentName={"Books"} />}
          />
          <Route
            path="/categories/fruits"
            element={<CategoryItemPage currentName={"Fruits"} />}
          />
          <Route
            path="/categories/electronics"
            element={<CategoryItemPage currentName={"Electronics"} />}
          />
          <Route
            path="/categories/others"
            element={<CategoryItemPage currentName={"Others"} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
