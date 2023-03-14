import axios from "axios";
import { useState, useEffect, FC } from "react";
import AddToCart from "./AddToCart";
import Loader from "./Loader";

interface Iitems {
  id: number;
  name: string;
  price: number;
  category: number;
  inCart: boolean;
}
interface ICategory {
  id: number;
  name: string;
}

let pageSize = 3;

const Menu: FC = () => {
  // States
  const [categories, setCategories] = useState<ICategory[]>([]);

  const [items, setItems] = useState<Iitems[]>([]);

  const [currentCategory, setCurrentCategory] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  // const [noOfPage, noOfPage] = useState(null);

  let noOfPage = 1;

  const changeCurrentCategory = (id: number) => {
    setCurrentCategory(id);
    setCurrentPage(1);
  };

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // Effects
  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("cool interval");
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalID);
  //     console.log("cool");
  //   };
  // }, [currentCategory]);

  useEffect(() => {
    // fetch("http://localhost:3000/menu")
    //   .then((res) => res.json())
    //   .then((data) => setItems(data));
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

  // handdler
  const addToCartHandle = (id: number) => {
    const newitems = items.map((item) =>
      item.id === id ? { ...item, inCart: !item.inCart } : item
    );
    setItems(newitems);
  };

  // Filter
  let itemsToRender =
    currentCategory === 0
      ? items
      : items.filter((item) => item.category === currentCategory);

  // Pagination
  noOfPage = Math.ceil(itemsToRender.length / pageSize);

  const pages = Array(noOfPage)
    .fill(0)
    .map((item, i) => i + 1);
  const start = currentPage * pageSize - pageSize;
  const end = start + pageSize;

  itemsToRender = itemsToRender.slice(start, end);
  //UI
  return (
    <>
      <div className="grid grid-cols-3 mt-3">
        <div className="col-span-1">
          <div className="btn-group btn-group-vertical">
            {categories.map((category) => (
              <button
                onClick={() => changeCurrentCategory(category.id)}
                className={`btn ${
                  category.id === currentCategory ? "btn-active" : ""
                }`}
                key={category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* Menu */}
        <div className="col-span-2">
          {/* TODO: to fix loader */}
          {items.length === 0 && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
          {items.length !== 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemsToRender.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <AddToCart
                        inCart={item.inCart}
                        id={item.id}
                        addToCartHandle={addToCartHandle}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* Pagination */}
      {pages.length > 1 && (
        <div className="btn-group flex justify-center">
          {pages.map((page) => (
            <button
              onClick={() => changeCurrentPage(page)}
              key={page}
              className={`btn ${page === currentPage ? "btn-active" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;
