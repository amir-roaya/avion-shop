import "./home.css";
import { useEffect } from "react";
import products from "../../modules/product";
import { Link } from "react-router";
import ScrollBar from "../../components/ScrollBar";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const ShowLatestProducts = () => {
  const latestProducts = products.slice(-4);

  if (latestProducts.length > 0) {
    return latestProducts.map(({ id, mainHref, mainSrc, name, price }) => (
      <div key={id} className="latest-product">
        <a href={`${mainHref}/${id}`} className="latest-product__img">
          <img src={mainSrc} alt={name} />
        </a>
        <h4 className="latest-product__title">{name}</h4>
        <p className="latest-product__price">£{price}</p>
      </div>
    ));
  } else {
    return <p className="not-found-note">No products available.</p>;
  }
};

const Home = () => {
  useEffect(() => {
    document.title = "Avion";
  }, []);

  return (
    <>
      <div className="scrollbar">
        <ScrollBar />
      </div>

      <header className="header">
        <Nav isSamePage={false} />

        <div className="header-content-mobile">
          <h2 className="header-content-mobile__title">
            Luxury homeware for people who love timeless design quality
          </h2>

          <p className="header-content-mobile__desc">
            With our new collection, view over 400 bespoke pieces from homeware
            through to furniture today
          </p>

          <Link to="/all-products" className="header-content-mobile__link">
            View collection
          </Link>
        </div>

        <div className="hero-block">
          <div className="header-content">
            <div className="header-content__top">
              <h2 className="header-content__title">
                Luxury homeware for people who love timeless design quality
              </h2>

              <p className="header-content__desc">
                Shop the new Spring 2022 collection today
              </p>
            </div>

            <Link to="/all-products" className="header-content__link">
              View collection
            </Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="home-brand">
          <div className="container">
            <h3 className="home-brand__title">
              What makes our brand different
            </h3>

            <div className="home-brand-differences">
              <div className="home-brand-difference">
                <svg>
                  <use href="#delivery"></use>
                </svg>

                <h4 className="home-brand-difference__title">
                  Next day as standard
                </h4>

                <p className="home-brand-difference__desc">
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>

              <div className="home-brand-difference">
                <svg>
                  <use href="#checkmark-outline"></use>
                </svg>

                <h4 className="home-brand-difference__title">
                  Made by true artisans
                </h4>

                <p className="home-brand-difference__desc">
                  Handmade crafted goods made with real passion and craftmanship
                </p>
              </div>

              <div className="home-brand-difference">
                <svg>
                  <use href="#purchase"></use>
                </svg>

                <h4 className="home-brand-difference__title">
                  Unbeatable prices
                </h4>

                <p className="home-brand-difference__desc">
                  For our materials and quality you won’t find better prices
                  anywhere
                </p>
              </div>

              <div className="home-brand-difference">
                <svg>
                  <use href="#sprout"></use>
                </svg>

                <h4 className="home-brand-difference__title">
                  Recycled packaging
                </h4>

                <p className="home-brand-difference__desc">
                  We use 100% recycled to ensure our footprint is more
                  manageable
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <div className="products__wrapper">
              <ShowLatestProducts />
            </div>

            <Link to="/all-products" className="products-section__link">
              View collection
            </Link>
          </div>
        </section>

        <section className="idea">
          <div className="container">
            <div className="idea__wrapper">
              <div className="idea-content">
                <div className="idea-content__top">
                  <h3 className="idea-content__title">
                    It started with a small idea
                  </h3>

                  <p className="idea-content__desc">
                    A global home-brand with local beginnings, our story begain
                    in a small studio in South London in early 2014
                  </p>
                </div>

                <Link to="/all-products" className="idea-content__link">
                  View collection
                </Link>
              </div>

              <div className="idea__img">
                <img src={`${import.meta.env.BASE_URL}images/image-block.png`} alt="Image-Block" />
              </div>
            </div>
          </div>
        </section>

        <section className="home-club">
          <h2 className="home-club__title">
            Join the club and get the benefits
          </h2>

          <p className="home-club__desc">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>

          <div className="home-club__benefits">
            <p className="home-benefit">
              <svg>
                <use href="#checkmark-outline"></use>
              </svg>
              Exclusive offers
            </p>

            <p className="home-benefit">
              <svg>
                <use href="#checkmark-outline"></use>
              </svg>
              Free events
            </p>

            <p className="home-benefit">
              <svg>
                <use href="#checkmark-outline"></use>
              </svg>
              Large discounts
            </p>
          </div>

          <div className="home-email-sign-up">
            <input
              id="home-email-sign-up-input"
              type="text"
              placeholder="your@email.com"
            />

            <button className="home-email-sign-up__btn">Sign up</button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
