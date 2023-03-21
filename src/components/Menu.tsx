import { FC } from "react";
import AddToCart from "./AddToCart";
import Loader from "./Loader";

export interface menuProps {
  currentCategory: number;
  changeCurrentCategory: (id: number) => void;
  pageSize: number;
  addToCartHandle: (id: number) => void;
  noOfPage: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  categories: {}[];
  items: {}[];
}
const Menu: FC<menuProps> = ({
  currentCategory,
  changeCurrentCategory,
  pageSize,
  addToCartHandle,
  noOfPage,
  currentPage,
  changeCurrentPage,
  categories,
  items,
}) => {
  // Filter
  let itemsToRender =
    currentCategory === 0
      ? items
      : items.filter((item: any) => item.category === currentCategory);
  // Filter in backend

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
            {categories.map((category: any) => (
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
                {itemsToRender.map((item: any) => (
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
