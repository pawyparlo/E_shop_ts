import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store/Store";
import { Submit } from "./pages/Submit";
import { NoMatch } from "./pages/NoMatch";
import { CategoryItemPage } from "./pages/Store/Item/CategoryItemPage";
import { useCategories } from "./context/CategoriesContext";

export const Router = () => {
  const { categoriesData, categoriesError, categoriesLoading } =
    useCategories();

  const renderCategoriesRoutes = () => {
    return categoriesData?.categories.map(({ name, slug }) => (
      <Route
        path={`/categories/${slug}`}
        element={<CategoryItemPage categoryName={`${name}`} />}
      />
    ));
  };

  if (categoriesLoading) return <div>Loading...</div>;
  if (categoriesError) return <div>Error...</div>;

  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/categories" element={<Store />} />
      {renderCategoriesRoutes()}
      <Route path="/about" element={<About />} />
      <Route path="/submit" element={<Submit />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
