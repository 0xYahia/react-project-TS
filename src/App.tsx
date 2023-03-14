import { useState, useEffect, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import About from "./components/About";
import Header from "./components/Header";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import Home from "./components/Home";
import axios from "axios";

interface Iitems {
  id: number;
  name: string;
  price: number;
  category: number;
  inCart: boolean;
  count: number;
}
interface ICategory {
  id: number;
  name: string;
}

let pageSize = 3;

const App: FC = () => {
  // ------------- States ------------------
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [items, setItems] = useState<Iitems[]>([]);

  const [currentCategory, setCurrentCategory] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  let noOfPage = 1;

  // ------------- Handdler ------------------
  const changeCurrentCategory = (id: number) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const addToCartHandle = (id: number) => {
    const newitems = items.map((item) =>
      item.id === id ? { ...item, inCart: !item.inCart, count: 1 } : item
    );
    setItems(newitems);
  };

  const handleIncrement = (id: number): void => {
    const newCounters = items.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setItems(newCounters);
  };

  const handleDecrement = (id: number): void => {
    const newCounters = items.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    setItems(newCounters);
  };

  const handelReset = (): void => {
    const newCounters = items.map((item) => ({ ...item, count: 0 }));

    setItems(newCounters);
  };

  const handleDelete = (id: number): void => {
    const newCounters = items.filter((item) => item.id !== id);
    setItems(newCounters);
  };

  // ------------- Effects ------------------
  useEffect(() => {
    async function getMenu() {
      try {
        const { data } = await axios.get("http://localhost:3000/menu");
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

  return (
    <div className="w-[786px] m-auto">
      <BrowserRouter>
        <Header
          itemsInCart={items.filter((item: Iitems) => item.inCart).length}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <Cart
                counters={items.filter((item) => item.inCart)}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                handelReset={handelReset}
              />
            }
          />
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route
            path="/menu"
            element={
              <Menu
                items={items}
                categories={categories}
                pageSize={pageSize}
                currentCategory={currentCategory}
                currentPage={currentPage}
                noOfPage={noOfPage}
                addToCartHandle={addToCartHandle}
                changeCurrentCategory={changeCurrentCategory}
                changeCurrentPage={changeCurrentPage}
              />
            }
          />
          <Route path="/product/:productid/:country?" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ITI track="UI" /> */}
    </div>
  );
};

export default App;
