import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/CartIcon";
import { FC } from "react";
interface headerProps {
  itemsInCart: any;
}

const Header: FC<headerProps> = ({ itemsInCart }) => {
  return (
    <div className="bg-cyan-200 p-2 text-slate-900">
      <header className="navbar m-auto flex justify-between">
        <h1>Burgger Menu</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="" className="btn btn-ghost mr-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" className="btn btn-ghost mr-2">
              About
            </Link>
          </li>
          <li>
            <Link to="menu" className="btn btn-ghost mr-2">
              Menu
            </Link>
          </li>
          <li>
            <Link to="cart" className="btn btn-ghost mr-2">
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
        </ul>
      </header>
    </div>
  );
};

export default Header;
