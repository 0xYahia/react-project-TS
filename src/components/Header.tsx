import { Link, NavLink } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import { FC } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export interface headerProps {
  itemsInCart: any;
}

const Header: FC<headerProps> = ({ itemsInCart }) => {
  return (
    <div className="bg-cyan-200 p-2 text-slate-900">
      <header className="navbar m-auto flex justify-between">
        <h1>Burgger Menu</h1>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? "font-bold " : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="menu"
              className={({ isActive }) => (isActive ? "font-bold" : "")}
            >
              Menu
            </NavLink>
          </li>
          <li>
            <Link to="cart">
              <div className="relative">
                <CartIcon />
                {itemsInCart !== 0 && (
                  <div className="absolute -top-1 -right-3 badge badge-xs">
                    {itemsInCart}
                  </div>
                )}
              </div>
            </Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
