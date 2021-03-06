import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 mb-8 font-semibold shadow-md text-white bg-gray-800">
      <nav>
        <ul className="flex">
          <li>
            <Link to="/" className="m-3 font-semibold tracking-wide uppercase">
              동주와 교헌
            </Link>
          </li>
          <li>
            <NavLink to="/lovegraphy" className="nav--btn">
              사랑 일대기
            </NavLink>
          </li>
          <li>
            <NavLink to="/memorandum" className="nav--btn">
              각서
            </NavLink>
          </li>
          <li>
            <NavLink to="/pokemon" className="nav--btn">
              포켓몬
            </NavLink>
          </li>
          <li className="ml-auto">
            <img
              src="image/red-heart.svg"
              className="w-6 h-6"
              alt="heart icon"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
