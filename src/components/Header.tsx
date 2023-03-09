import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar flex justify-between">
      <h1>Burgger Menu</h1>
      <ul>
        <li>
          <Link to="/" className="btn btn-ghost mr-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="btn btn-ghost mr-2">
            About
          </Link>
        </li>
        <li>
          <Link to="about/company" className="btn btn-ghost mr-2">
            About Company
          </Link>
        </li>
        <li>
          <Link to="about/team" className="btn btn-ghost mr-2">
            About Team
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
