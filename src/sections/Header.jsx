import Nav from "../components/NavList";
import { Link } from "react-scroll";
const Header = ({ menu, toggleMenu }) => {
  return (
    <header className="flex w-full justify-between items-center px-4 md:px-8">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className=""
      >
        <svg
          version="1.1"
          viewBox="0 0 2048 1000"
          width="130"
          height="130"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(544,7)"
            d="m0 0h33l31 3 31 6 27 8 25 10 23 11 17 10 15 10 12 9 11 9 10 9 8 7 10 10 7 8 10 12 12 16 11 17 10 18 12 25 10 27 7 26 5 28 2 19v50l-3 25-5 26-7 24-7 20-9 20-12 23-14 22-14 18-1 3 43 30 43 30 60 42 6 4 18-4 8-1h10l15 2 15 5 14 8 12 10 11 14 8 16 4 15 1 8v12l-2 14-5 15-6 11-7 9-8 9-14 10-16 7-13 3-8 1h-12l-17-3-15-6-14-9-10-9-9-12-8-16-4-15-1-7v-18l-15-11-16-11-43-30-63-44-20-14-7-5-5 2-14 9-18 10-23 11-27 10-26 7-27 5h-3l1 192 9 7 9 8 9 12 7 14 4 14 1 5v23l-4 17-8 17-8 10-6 7-12 9-16 8-14 4-6 1h-20l-14-3-13-5-12-7-10-9-8-8-8-13-5-11-4-17v-22l4-17 8-17 11-14 9-8 9-6 1-191-15-2-26-6-26-8-24-10-16-8-20-11-16-11-5 2-28 19-43 29-33 22-16 11-43 29-24 16-2 16-5 16-7 14-9 11-8 8-14 9-11 5-15 4-8 1h-12l-14-2-12-4-14-7-10-8-10-10-9-14-5-11-4-16v-25l4-16 8-16 8-11 10-10 14-9 11-5 15-4 9-1h10l14 2 15 5 6 3 5-2 14-10 36-24 43-29 33-22 19-13 21-14-4-6-13-18-11-18-9-16-12-27-10-30-6-25-4-26-2-28v-19l2-27 4-26 6-25 10-30 11-25 12-22 11-17 11-15 13-16 14-15 11-11 11-9 12-10 17-12 20-12 23-12 27-11 19-6 24-6 25-4zm4 84-21 2-25 5-20 6-20 8-20 10-17 11-12 9-13 11-12 11-7 8-10 12-12 17-12 21-7 15-9 25-6 25-3 23v40l3 22 6 26 7 20 9 20 10 18 12 17 9 11 9 10 16 16 14 11 17 12 24 13 25 10 24 7 23 4 9 1h43l27-4 23-6 24-9 16-8 16-9 17-12 11-9 12-11 11-11 9-11 13-18 9-15 12-25 10-30 5-25 2-19v-33l-3-25-6-25-7-21-10-22-13-22-14-19-12-13-6-7-8-7-14-12-21-14-16-9-17-8-22-8-25-6-20-3-14-1zm-452 602-10 2-9 6-6 9-2 6v11l3 8 6 8 8 5 8 2 11-1 8-4 5-4 5-8 2-7v-9l-4-11-4-5-10-6zm897 0-9 2-8 5-6 7-3 7-1 10 3 10 4 6 7 6 7 3 10 1 10-3 6-4 6-7 3-7 1-8-2-10-6-9-8-6-5-2zm-440 193-8 3-9 8-4 8-1 4v10l3 9 8 9 8 4 4 1h10l10-4 8-7 4-8 1-4v-11l-4-9-7-8-8-4-3-1z"
            fill="#45EEA9"
          />
          <path
            transform="translate(547,191)"
            d="m0 0h26l19 3 20 6 17 8 15 10 11 9 13 13 11 15 9 16 7 18 4 17 2 16v19l-3 21-6 20-10 21-10 14-11 13-12 11-16 11-15 8-20 7-14 3-19 2h-10l-19-2-20-5-17-7-16-9-12-9-13-12-11-13-9-14-8-16-6-18-3-15-1-9v-24l3-19 6-20 8-17 12-18 11-12 10-10 15-11 19-10 17-6 18-4z"
            fill="#45EEA9"
          />
          <path
            transform="translate(1510,270)"
            d="m0 0h82l6 4 3 4 1 11v56l-1 18-4 6-4 2-17 2 16 44 14 39-1 2h-27l-3-4-23-65-6-16v-19h27v-61l-34 1-1 163-4 1h-23l-1-1z"
            fill="#47EEAA"
          />
          <path
            transform="translate(1295,270)"
            d="m0 0h28v164h38v-164h28v178l-4 6-6 3-8 1h-60l-9-2-5-4-2-5z"
            fill="#45EEA9"
          />
          <path
            transform="translate(1104,269)"
            d="m0 0h39l22 1 6 4 3 4 1 50-3 1h-25l-1-1v-35l-33 1v34l9 9 8 7 10 10 8 7 10 10 8 7 6 7 2 4v60l-6 7-11 2h-57l-9-2-5-4-2-4v-52h28v38h34l-1-37-18-18-8-7-10-10-8-7-14-14-3-7v-55l4-6 6-3z"
            fill="#45EEA9"
          />
          <path
            transform="translate(1959,269)"
            d="m0 0h28l3 9 26 136 8 43-1 1h-27l-3-16-3-21h-35l-1 11-4 25-1 1h-25l-2-1 1-9 25-129 9-47zm13 46-11 66-2 16h27l-2-17-10-62z"
            fill="#46EEA9"
          />
          <path
            transform="translate(1726,269)"
            d="m0 0h15l3 7 20 73 17-62 5-17 9-1h10l10 1-2 9-24 76-6 18-4 14-1 70-1 1h-27l-1-70-6-21-12-36-18-58v-3z"
            fill="#46EEA9"
          />
        </svg>
      </Link>

      <div
        className="hamburger text-green text-3xl md:hidden z-40"
        id="hamBurger"
      >
        <button onClick={toggleMenu}>
          {menu ? (
            <i className="fa-solid fa-x"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>
      </div>

      <nav
        className={`md:flex md:static md:h-auto absolute h-screen md:bg-transparent  ${
          menu ? "flex" : "hidden"
        } bg-white top-0 z-30 items-center right-0 md:w-auto w-80 text-green justify-center`}
      >
        <ul className="md:flex md:gap-8 px-6 text-center z-30">
          {Nav.map((item, index) => {
            const { nav, to, offset } = item;
            return (
              <Link
                key={index}
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                onClick={toggleMenu}
                className="navlist block uppercase font-mono py-1 my-5 md:py-0 px-1 md:text-white relative cursor-pointer"
              >
                {nav}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
