import { useState } from "react";
import { ICategory, Iitems } from "../types/Itypes";
import { useEffect } from "react";
import axios from "axios";
const useMenu = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [items, setItems] = useState<Iitems[]>([]);

  const [currentCategory, setCurrentCategory] = useState(0);

  // ------------- Effects ------------------
  useEffect(() => {
    // async function getMenu() {
    //   try {
    //     const { data } = await axios.get("http://localhost:3000/menu");
    //     setItems(data);
    //   } catch (error) {
    //     // Handle error
    //   }
    // }

    async function getMenu() {
      try {
        const { data } = await axios.get(
          currentCategory === 0
            ? `http://localhost:3000/menu`
            : `http://localhost:3000/menu?category=${currentCategory}`
        );
        setItems(data);
      } catch (error) {
        // Handle error
      }
    }
    async function getCategory() {
      try {
        const { data } = await axios.get("http://localhost:3000/categories");
        setCategories(data);
      } catch (error) {
        // Handle error
      }
    }

    getMenu();
    getCategory();
  }, []);

  return {
    items,
    categories,
    currentCategory,
    setCurrentCategory,
    setItems,
  };
};

export default useMenu;
