import "./shop-basket.css";
import { useMemo, useState, useEffect, useCallback } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const ShowBasketProducts = ({
  basket,
  decreaseProductCount,
  increaseProductCount,
}) => {
  if (basket.length) {
    return basket.map(({ id, mainSrc, name, caption, price, quantity }) => (
      <div key={id} className="basket-product">
        <div className="basket-product__info">
          <div className="basket-product__img">
            <img src={mainSrc} alt={name} />
          </div>

          <div className="basket-product__content">
            <h4 className="basket-product__title">{name}</h4>
            <p className="basket-product__desc">{caption}</p>
            <p className="basket-product__price">£{price}</p>
          </div>
        </div>

        <div className="basket-product__quantity">
          <button
            className="basket-product__quantity-minus"
            onClick={() => decreaseProductCount(id)}
          >
            -
          </button>

          <span className="basket-product__quantity-main">{quantity}</span>

          <button
            className="basket-product__quantity-plus"
            onClick={() => increaseProductCount(id)}
          >
            +
          </button>
        </div>

        <div className="basket-product__total-price">£{price * quantity}</div>
      </div>
    ));
  } else {
    return <p className="basket__empty-note">Your Basket Is Empty :(</p>;
  }
};

const ShowTotalPrice = ({ basket }) => {
  const totalPrice = useMemo(() => {
    return basket.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0,
    );
  }, [basket]);

  return <h3>£{totalPrice.toLocaleString()}</h3>;
};

const ShowMbBasketProducts = ({
  basket,
  decreaseProductCount,
  increaseProductCount,
}) => {
  if (basket.length) {
    return basket.map(({ id, mainSrc, name, caption, price, quantity }) => (
      <div key={id} className="mobile-basket-product">
        <div className="mobile-basket-product__img">
          <img src={mainSrc} alt={name} />
        </div>

        <div className="mobile-basket-product__info">
          <h4 className="mobile-basket-product__title">{name}</h4>
          <p className="mobile-basket-product__desc">{caption}</p>
          <p className="mobile-basket-product__price">£{price * quantity}</p>

          <div className="mobile-basket-product__quantity">
            <button
              className="mobile-basket-product__quantity-minus"
              onClick={() => decreaseProductCount(id)}
            >
              -
            </button>

            <span className="mobile-basket-product__quantity-main">
              {quantity}
            </span>

            <button
              className="mobile-basket-product__quantity-plus"
              onClick={() => increaseProductCount(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    ));
  } else {
    return <p className="basket__empty-note">Your Basket Is Empty :(</p>;
  }
};

const ShopBasket = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    document.title = "Shop basket";
  }, []);

  useEffect(() => {
    const localBasket = JSON.parse(localStorage.getItem("basket"));
    localBasket && setBasket(localBasket);
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const decreaseProductCount = useCallback((id) => {
    setBasket((prevState) =>
      prevState
        .map((product) =>
          product.id === id && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        )
        .filter((product) => product.quantity > 0),
    );
  }, []);

  const increaseProductCount = useCallback((id) => {
    setBasket((prevState) =>
      prevState.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  }, []);

  return (
    <>
      <header className="header">
        <Nav />
      </header>

      <main className="basket-main">
        <div className="container">
          <div className="basket">
            <div className="basket__titles">
              <h6 className="basket__title">Product</h6>
              <h6 className="basket__title">Quantity</h6>
              <h6 className="basket__title">Total</h6>
            </div>

            <div className="basket__wrapper">
              <ShowBasketProducts
                basket={basket}
                decreaseProductCount={decreaseProductCount}
                increaseProductCount={increaseProductCount}
              />
            </div>

            <div className="basket__bottom">
              <p className="basket__point">
                Taxes and shipping are calculated at checkout
              </p>

              <div className="basket__checkout">
                <div className="basket__total-price">
                  <h4>Subtotal</h4>
                  <ShowTotalPrice basket={basket} />
                </div>

                <button className="basket__checkout-btn">Go to checkout</button>
              </div>
            </div>
          </div>

          <div className="mobile-basket">
            <h3 className="mobile-basket__title">Your shopping cart</h3>

            <div className="mobile-basket__wrapper">
              <ShowMbBasketProducts
                basket={basket}
                decreaseProductCount={decreaseProductCount}
                increaseProductCount={increaseProductCount}
              />
            </div>

            <div className="mobile-basket__bottom">
              <div className="mobile-basket__total-price">
                <h4>Subtotal</h4>
                <ShowTotalPrice basket={basket} />
              </div>

              <p className="mobile-basket__point">
                Taxes and shipping are calculated at checkout
              </p>

              <button className="mobile-basket__checkout-btn">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ShopBasket;
