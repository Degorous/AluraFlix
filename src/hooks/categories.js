// import { createContext } from "react";

import { useEffect, useState } from "react";

// export const CategoriesContext = createContext();
// CategoriesContext.displayName = "Categories";

const url = 'http://localhost:5050/categories';

export async function categoriesList() {
  const response = await fetch(url);
  const data = await response.json();
  return data
}

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const data = await categoriesList();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return { categories };
}