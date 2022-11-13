import React from "react";
import { createContext, useContext, useState, ReactNode } from "react";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../services/graphql";

type CategoriesProviderProps = {
  children: ReactNode;
};

export type CategoryProps = {
  id: number;
  name: string;
  image: string;
  description: string; // TODO
  slug: string;
};

type CategoryObjectProps = {
  categories: CategoryProps[];
};

type CategoriesData = {
  categoriesData: CategoryObjectProps;
  categoriesLoading: any;
  categoriesError: any;
};

const CategoriesContext = createContext({} as CategoriesData);

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  const {
    data: categoriesData,
    error: categoriesError,
    loading: categoriesLoading,
  } = useQuery(GET_CATEGORIES);

  const value = {
    categoriesData: categoriesData,
    categoriesError: categoriesError,
    categoriesLoading: categoriesLoading,
  };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
