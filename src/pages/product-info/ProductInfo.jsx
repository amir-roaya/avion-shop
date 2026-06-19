import "./product-info.css";
import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLoaderData } from "react-router";
import products from "../../modules/product";
import ScrollBar from "../../components/ScrollBar";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const ShowFeatures = ({ features }) => (
  <>
    {features?.map((feature) => (
      <li key={feature} className="features-list__item">
        {feature}
      </li>
    ))}
  </>
);

const ShowProductInfo = ({
  mainProduct: {
    mainSrc,
    name,
    price,
    description,
    features,
    dimensions,
    quantity,
  },
  decreaseProductCount,
  increaseProductCount,
  addProductToBasket,
  isToastOpen,
}) => {
  return (
    <div className="main-product">
      <div className="main-product__img">
        <img src={mainSrc} alt={name} />
      </div>

      <div className="main-product__content">
        <div className="main-product__wrapper">
          <h2 className="main-product__name">{name}</h2>
          <p className="main-product__price">£{price}</p>
        </div>

        <div className="main-product__wrapper">
          <h5 className="main-product__desc-title">Description</h5>
          <p className="main-product__desc">{description}</p>

          {features?.length > 0 && (
            <ul className="features-list">
              <ShowFeatures features={features} />
            </ul>
          )}
        </div>

        <div className="main-product__wrapper">
          <h5 className="main-product__dime-title">Dimensions</h5>

          <table className="main-product__table">
            <thead>
              <tr className="main-product__tr">
                <th className="main-product__th">Height</th>
                <th className="main-product__th">Width</th>
                <th className="main-product__th">Depth</th>
              </tr>
            </thead>

            <tbody>
              <tr className="main-product__tr">
                <td className="main-product__td">{dimensions?.height}</td>
                <td className="main-product__td">{dimensions?.width}</td>
                <td className="main-product__td">{dimensions?.depth}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="main-product-amount">
          <div className="main-product__quantity">
            <h5 className="main-product__quan-title">Quantity</h5>

            <div className="main-product__quantity-btn">
              <button
                className="main-product__quantity-minus"
                onClick={() => decreaseProductCount()}
              >
                -
              </button>
              <span className="main-product__quantity-main">{quantity}</span>
              <button
                className="main-product__quantity-plus"
                onClick={() => increaseProductCount()}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="main-product__link"
            onClick={() => addProductToBasket()}
            disabled={isToastOpen}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ShowSameProducts = ({ sameProducts }) => {
  return sameProducts.map(({ id, mainSrc, name, price }) => (
    <div key={id} className="same-product">
      <a href={`${id}`} className="same-product__img">
        <img src={mainSrc} alt={name} />
      </a>

      <h4 className="same-product__title">{name}</h4>
      <p className="same-product__price">£{price}</p>
    </div>
  ));
};

const ProductInfo = () => {
  const [mainProduct, setMainProduct] = useState(useLoaderData());
  const [basket, setBasket] = useState([]);
  const [sameProducts, setSameProducts] = useState([]);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    document.title = `${mainProduct.name}`;
  }, [mainProduct.name]);

  useEffect(() => {
    const localBasket = JSON.parse(localStorage.getItem("basket"));
    localBasket && setBasket(localBasket);
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    if (mainProduct?.type) {
      setSameProducts(products.filter((p) => p.type === mainProduct.type));
    }
  }, [mainProduct.type]);

  const decreaseProductCount = useCallback(() => {
    if (mainProduct.quantity > 1) {
      setMainProduct((prevState) => ({
        ...prevState,
        quantity: prevState.quantity - 1,
      }));
    }
  }, [mainProduct.quantity]);

  const increaseProductCount = useCallback(() => {
    setMainProduct((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
    }));
  }, []);

  const showToast = useCallback(() => {
    setIsToastOpen(true);

    if (progressRef.current) {
      let progressWidth = 0;
      const progressInterval = setInterval(() => {
        progressRef.current.style.width = `${progressWidth}%`;
        progressWidth += 3;

        if (progressWidth > 110) {
          setIsToastOpen(false);
          progressRef.current.style.width = `0`;
          clearInterval(progressInterval);
        }
      }, 60);
    }
  }, []);

  const addProductToBasket = useCallback(() => {
    setBasket((prevState) => {
      const mainProductIndex = prevState.findIndex(
        (product) => product.id === mainProduct.id
      );

      if (mainProductIndex === -1) {
        return [...prevState, mainProduct];
      } else {
        return prevState.map((product) =>
          product.id === mainProduct.id
            ? { ...product, quantity: product.quantity + mainProduct.quantity }
            : product
        );
      }
    });

    showToast();
  }, [mainProduct, showToast]);

  return (
    <>
      <div className="scrollbar">
        <ScrollBar />
      </div>

      <header className="header">
        <Nav isSamePage={true} />

        {mainProduct?.id ? (
          <ShowProductInfo
            mainProduct={mainProduct}
            decreaseProductCount={decreaseProductCount}
            increaseProductCount={increaseProductCount}
            addProductToBasket={addProductToBasket}
            isToastOpen={isToastOpen}
          />
        ) : (
          <p className="loding-note">Loading product info...</p>
        )}
      </header>

      <main className="main">
        <section className="same-products">
          <div className="container">
            <h2 className="same-products__title">You might also like</h2>

            <div className="same-products__wrapper">
              {sameProducts.length ? (
                <ShowSameProducts sameProducts={sameProducts} />
              ) : (
                <p className="loding-note">Loading product...</p>
              )}
            </div>

            <Link to="/all-products" className="same-products__link">
              View collection
            </Link>
          </div>
        </section>

        <section className="brand">
          <div className="container">
            <h3 className="brand__title">What makes our brand different</h3>

            <div className="brand-differences">
              <div className="brand-difference">
                <svg>
                  <use href="#delivery"></use>
                </svg>

                <h4 className="brand-difference__title">
                  Next day as standard
                </h4>

                <p className="brand-difference__desc">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>

              <div className="brand-difference">
                <svg>
                  <use href="#checkmark-outline"></use>
                </svg>

                <h4 className="brand-difference__title">
                  Made by true artisans
                </h4>

                <p className="brand-difference__desc">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>

              <div className="brand-difference">
                <svg>
                  <use href="#purchase"></use>
                </svg>

                <h4 className="brand-difference__title">Unbeatable prices</h4>

                <p className="brand-difference__desc">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>

              <div className="brand-difference">
                <svg>
                  <use href="#sprout"></use>
                </svg>

                <h4 className="brand-difference__title">Recycled packaging</h4>

                <p className="brand-difference__desc">
                  We use 100% recycled to ensure our footprint is more
                  manageable
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="club">
          <div className="club__wrapper">
            <h2 className="club__title">Join the club and get the benefits</h2>

            <p className="club__desc">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop up stores and more
            </p>

            <div className="email-sign-up">
              <input
                id="email-sign-up-input"
                type="text"
                placeholder="your@email.com"
              />

              <button className="email-sign-up__btn">Sign up</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <div className={`toast ${isToastOpen ? "toast--open" : ""}`}>
        <p>Added To Cart!</p>
        <div className="progress-bar">
          <div className="progress" ref={progressRef}></div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
