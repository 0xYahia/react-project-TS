import { useState, FC, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import About from "./components/About";
import Header from "./components/Header";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
import Menu from "./components/Menu";
import Home from "./components/Home";

import { Iitems } from "./types/Itypes";
import Login from "./components/Login";
import useMenu from "./hooks/useMenu";
import { ThemeProvider } from "./context/ThemeContext";

let pageSize = 3;

const App: FC<Iitems> = ({}) => {
  // ------------- States ------------------
  const { items, categories, currentCategory, setCurrentCategory, setItems } =
    useMenu();

  const [currentPage, setCurrentPage] = useState(1);

  const [theme, setTheme] = useState("light");

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

  const handleIncrement = useCallback((id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const handleDecrement = useCallback((id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  }, []);

  const handelReset = (): void => {
    const newCounters = items.map((item) => ({ ...item, count: 0 }));

    setItems(newCounters);
  };

  const handleDelete = useCallback((id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, inCart: false } : item
      )
    );
  }, []);

  return (
    <div className="w-[786px] m-auto">
      <ThemeProvider childern={undefined}>
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
            <Route path="/login" element={<Login />} />
            <Route path="/product/:productid/:country?" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
        {/* <ITI track="UI" /> */}
      </ThemeProvider>
    </div>
  );
};

export default App;
