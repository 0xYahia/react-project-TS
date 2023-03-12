import { useState, FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./components/Cart";
import About from "./components/About";
import AboutCopmany from "./components/AboutCopmany";
import Header from "./components/Header";
import AboutTeam from "./components/AboutTeam";
import Product from "./components/Product";
import ErrorPage from "./components/ErrorPage";
// import ITI from "./components/ITI";
import Menu from "./components/Menu";

const App: FC = () => {
  const [counters, seCounters] = useState([
    { id: 1, name: "Burger", count: 0 },
    { id: 2, name: "Frise", count: 0 },
    { id: 3, name: "Cola", count: 0 },
  ]);

  const handleIncrement = (id: number): void => {
    const newCounters = counters.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    seCounters(newCounters);
  };

  const handleDecrement = (id: number): void => {
    const newCounters = counters.map((item) =>
      item.id === id ? { ...item, count: item.count - 1 } : item
    );
    seCounters(newCounters);
  };
  const handelReset = (): void => {
    const newCounters = counters.map((item) => ({ ...item, count: 0 }));

    seCounters(newCounters);
  };

  const handleDelete = (id: number): void => {
    const newCounters = counters.filter((item) => item.id !== id);
    seCounters(newCounters);
  };
  return (
    <div className="w-[786px] m-auto">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Cart
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleDelete={handleDelete}
                handelReset={handelReset}
                counters={counters}
              />
            }
          />
          <Route path="/about">
            <Route index element={<About />} />
            {/* <Route path="company" element={<AboutCopmany />} />
            <Route path="team" element={<AboutTeam />} /> */}
          </Route>
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:productid/:country?" element={<Product />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <ITI track="UI" /> */}
    </div>
  );
};

export default App;
