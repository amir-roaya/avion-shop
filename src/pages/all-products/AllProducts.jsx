import "./allProducts.css";
import { Link } from "react-router";
import products from "../../modules/product";
import { useState, useEffect } from "react";
import ScrollBar from "../../components/ScrollBar";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const ShowProducts = ({ filteredProducts }) => {
  if (filteredProducts.length) {
    return filteredProducts.map(({ id, mainHref, mainSrc, name, price }) => (
      <div key={id} className="product">
        <a href={`${mainHref}/${id}`} className="product__img">
          <img src={mainSrc} alt={name} />
        </a>

        <h4 className="product__title">{name}</h4>

        <p className="product__price">£{price}</p>
      </div>
    ));
  } else {
    return <p className="not-found-note">Nothing Found !</p>;
  }
};

const AllProducts = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "all products",
    price: "all",
    sort: "all sort",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    document.title = "Products";
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (filters.type && filters.type !== "all products") {
      updatedProducts = updatedProducts.filter(
        (product) => product.type.toLowerCase() === filters.type
      );
    }

    if (filters.price && filters.price !== "all") {
      const [min, max] = filters.price.split(" - ");

      updatedProducts = updatedProducts.filter((product) => {
        if (filters.price === "250 +") {
          return product.price > 250;
        } else {
          return product.price >= Number(min) && product.price <= Number(max);
        }
      });
    }

    if (filters.sort === "cheapest") {
      updatedProducts = updatedProducts.sort((prevValue, currValue) => {
        return prevValue.price - currValue.price;
      });
    } else if (filters.sort === "expensivest") {
      updatedProducts = updatedProducts.sort((prevValue, currValue) => {
        return prevValue.price - currValue.price;
      });
      updatedProducts.reverse();
    } else if (filters.sort === "newest") {
      updatedProducts = updatedProducts.reverse();
    }

    setFilteredProducts(updatedProducts);
  }, [filters]);

  return (
    <>
      <div className="scrollbar">
        <ScrollBar />
      </div>

      <header className="header">
        <Nav isSamePage={false} />

        <div className="header__bottom"></div>
      </header>

      <main className="main">
        <div className="container">
          <div className="categories">
            <button
              className={`filters ${isFiltersOpen ? "filters--open" : ""}`}
              onClick={() => setIsFiltersOpen((prevState) => !prevState)}
            >
              Filters
              <svg>
                <use href="#caret-down"></use>
              </svg>
              <div className="filters__submenu">
                <div className="product-type">
                  <h5 className="product-type__title">Product type</h5>

                  <ul className="product-type-menu">
                    <li className="product-type-menu__item">
                      <label className="product-type-menu__label">
                        <input
                          name="product-type"
                          value="All Products"
                          className="type-menu-input"
                          type="radio"
                          checked={filters.type === "all products"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              type: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="product-type-menu__name">All Products</p>
                        <span className="product-type-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="product-type-menu__item">
                      <label className="product-type-menu__label">
                        <input
                          name="product-type"
                          value="Furniture"
                          className="type-menu-input"
                          type="radio"
                          checked={filters.type === "furniture"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              type: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="product-type-menu__name">Furniture</p>
                        <span className="product-type-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="product-type-menu__item">
                      <label className="product-type-menu__label">
                        <input
                          name="product-type"
                          value="Nesting Tables"
                          className="type-menu-input"
                          type="radio"
                          checked={filters.type === "nesting tables"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              type: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="product-type-menu__name">
                          Nesting Tables
                        </p>
                        <span className="product-type-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="product-type-menu__item">
                      <label className="product-type-menu__label">
                        <input
                          name="product-type"
                          value="Light Fittings"
                          className="type-menu-input"
                          type="radio"
                          checked={filters.type === "light fittings"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              type: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="product-type-menu__name">
                          Light Fittings
                        </p>
                        <span className="product-type-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="product-type-menu__item">
                      <label className="product-type-menu__label">
                        <input
                          name="product-type"
                          value="Accessories"
                          className="type-menu-input"
                          type="radio"
                          checked={filters.type === "accessories"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              type: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="product-type-menu__name">Accessories</p>
                        <span className="product-type-menu__checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div className="price">
                  <h5 className="price__title">Price</h5>

                  <ul className="price-menu">
                    <li className="price-menu__item">
                      <label className="price-menu__label">
                        <input
                          value="All"
                          name="product-price"
                          className="price-menu-input"
                          type="radio"
                          checked={filters.price === "all"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              price: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="price-menu__name">All</p>
                        <span className="price-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="price-menu__item">
                      <label className="price-menu__label">
                        <input
                          value="0 - 100"
                          name="product-price"
                          className="price-menu-input"
                          type="radio"
                          checked={filters.price === "0 - 100"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              price: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="price-menu__name">0 - 100</p>
                        <span className="price-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="price-menu__item">
                      <label className="price-menu__label">
                        <input
                          value="101 - 250"
                          name="product-price"
                          className="price-menu-input"
                          type="radio"
                          checked={filters.price === "101 - 250"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              price: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="price-menu__name">101 - 250</p>
                        <span className="price-menu__checkmark"></span>
                      </label>
                    </li>

                    <li className="price-menu__item">
                      <label className="price-menu__label">
                        <input
                          value="250 +"
                          name="product-price"
                          className="price-menu-input"
                          type="radio"
                          checked={filters.price === "250 +"}
                          onChange={(e) =>
                            setFilters((prevState) => ({
                              ...prevState,
                              price: e.target.value.toLowerCase(),
                            }))
                          }
                        />
                        <p className="price-menu__name">250 +</p>
                        <span className="price-menu__checkmark"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </button>

            <select
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  sort: e.target.value.toLowerCase(),
                }))
              }
              id="sorting-select"
            >
              <option value="All Sort">All Sort</option>
              <option value="Cheapest">Cheapest</option>
              <option value="Expensivest">Expensivest</option>
              <option value="Newest">Newest</option>
            </select>
          </div>

          <div className="products">
            <ShowProducts filteredProducts={filteredProducts} />
          </div>

          <Link to="/all-products" className="products__link">
            View collection
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AllProducts;
