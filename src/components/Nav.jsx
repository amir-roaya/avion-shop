import { useState } from "react";
import SearchResult from "./SearchResult";
import { Link } from "react-router";
import { useDebounce } from "react-use";

const Nav = ({ isSamePage }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  useDebounce(() => setDebouncedValue(searchValue), 500, [searchValue]);

  const [isMbSearchOpen, setIsMbSearchOpen] = useState(false);
  const [mbSearchValue, setMbSearchValue] = useState("");
  const [debouncedMbSearchValue, setDebouncedMbSearchValue] = useState("");
  useDebounce(() => setDebouncedMbSearchValue(mbSearchValue), 500, [
    mbSearchValue,
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="icons-wrapper">
        <div className="search">
          <svg
            onClick={() => {
              setIsSearchOpen((prevState) => !prevState);
              setSearchValue("");
            }}
          >
            <use href="#search"></use>
          </svg>

          <div
            className={`search__wrapper ${
              isSearchOpen ? "search__wrapper--open" : ""
            } ${searchValue ? "searching" : ""}`}
          >
            <div className="search__input-container">
              <input
                name="search"
                className="search__input"
                type="text"
                placeholder="Product Name ...?"
                autoComplete="off"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            <ul className="result-list">
              <SearchResult
                userSearch={debouncedValue}
                isSamePage={isSamePage}
              />
            </ul>
          </div>
        </div>

        <Link to="/" className="main-logo">
          Avion
        </Link>

        <div className="user-icons">
          <Link to="/shop-basket" className="user-basket">
            <svg>
              <use href="#shopping-cart"></use>
            </svg>
          </Link>

          <svg>
            <use href="#user-avatar"></use>
          </svg>
        </div>

        <div className="mobile-user-icons">
          <div className="mobile-search">
            <svg
              onClick={() => {
                setIsMbSearchOpen((prevState) => !prevState);
                setMbSearchValue("");
              }}
            >
              <use href="#search"></use>
            </svg>

            <div
              className={`mobile-search__wrapper ${
                isMbSearchOpen ? "mobile-search__wrapper--open" : ""
              } ${mbSearchValue ? "searching" : ""}`}
            >
              <div className="mobile-search__input-container">
                <input
                  name="search"
                  className="mobile-search__input"
                  type="text"
                  placeholder="Product Name ...?"
                  autoComplete="off"
                  value={mbSearchValue}
                  onChange={(e) => setMbSearchValue(e.target.value)}
                />
              </div>

              <ul className="mobile-result-list">
                <SearchResult
                  userSearch={debouncedMbSearchValue}
                  isSamePage={isSamePage}
                />
              </ul>
            </div>
          </div>

          <svg
            className="mobile-menu__icon"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
          >
            <use href={`${isMenuOpen ? "#close" : "#menu"}`}></use>
          </svg>
        </div>

        <div
          className={`mobile-menu-wrapper ${
            isMenuOpen && "mobile-menu-wrapper--open"
          }`}
        >
          <ul className="mobile-menu">
            <li className="mobile-menu__item">
              <h3 className="mobile-menu__title">Avion</h3>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Plant pots
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Ceramics
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Tables
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Chairs
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Crockery
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Tableware
              </a>
            </li>

            <li className="mobile-menu__item">
              <a href="#" className="mobile-menu__link">
                Cutlery
              </a>
            </li>
          </ul>

          <div className="mobile-menu__icons">
            <Link to="/shop-basket" className="user-basket">
              <svg>
                <use href="#shopping-cart"></use>
              </svg>
            </Link>

            <svg>
              <use href="#user-avatar"></use>
            </svg>
          </div>
        </div>
      </div>

      <ul className="menu">
        <li className="menu__list">
          <a href="#" className="menu__link">
            Plant pots
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Ceramics
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Tables
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Chairs
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Crockery
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Tableware
          </a>
        </li>

        <li className="menu__list">
          <a href="#" className="menu__link">
            Cutlery
          </a>
        </li>
      </ul>

      <div className={`cover ${isMenuOpen ? "cover--show" : ""}`}></div>
    </div>
  );
};

export default Nav;
