import { useState } from "react";
import { v4 as uuid } from "uuid";
import AddToCart from "./AddToCart";

const Menu = () => {
  const [categories, setCategories] = useState([
    { id: uuid(), name: "All" },
    { id: uuid(), name: "Burger" },
    { id: uuid(), name: "Fries" },
    { id: uuid(), name: "Cola" },
  ]);

  const [items, setItems] = useState([
    {
      id: uuid(),
      name: "Small Burger",
      price: 50,
      inCart: false,
      category: categories[1].id,
    },
    {
      id: uuid(),
      name: "Medium Burger",
      price: 60,
      inCart: false,
      category: categories[1].id,
    },
    {
      id: uuid(),
      name: "Large Burger",
      price: 70,
      inCart: false,
      category: categories[1].id,
    },
    {
      id: uuid(),
      name: "Small Fries",
      price: 20,
      inCart: false,
      category: categories[2].id,
    },
    {
      id: uuid(),
      name: "Medium Fries",
      price: 30,
      inCart: false,
      category: categories[2].id,
    },
    {
      id: uuid(),
      name: "Large Fries",
      price: 40,
      inCart: false,
      category: categories[2].id,
    },
    {
      id: uuid(),
      name: "Small Cola",
      price: 5,
      inCart: false,
      category: categories[3].id,
    },
    {
      id: uuid(),
      name: "Medium Cola",
      price: 10,
      inCart: false,
      category: categories[3].id,
    },
    {
      id: uuid(),
      name: "Large Cola",
      price: 15,
      inCart: false,
      category: categories[3].id,
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].id);

  const changeCurrentCategory = (id: string) => {
    setCurrentCategory(id);
  };

  const addToCartHandle = (id: string) => {
    const newitems = items.map((item) =>
      item.id === id ? { ...item, inCart: !item.inCart } : item
    );
    setItems(newitems);
  };

  // Filter
  const itemsToRender =
    currentCategory === categories[0].id
      ? items
      : items.filter((item) => item.category === currentCategory);

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
        <div className="col-span-2">
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
        </div>
      </div>
    </>
  );
};

export default Menu;
