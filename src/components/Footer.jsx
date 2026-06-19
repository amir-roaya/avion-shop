const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__lists">
            <ul className="footer-menu">
              <li className="footer-menu__list">
                <h4 className="footer-menu__title">Menu</h4>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  New arrivals
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Best sellers
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Recently viewed
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Popular this week
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  All products
                </a>
              </li>
            </ul>

            <ul className="footer-menu">
              <li className="footer-menu__list">
                <h4 className="footer-menu__title">Categories</h4>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Crockery
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Furniture
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Homeware
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Plant pots
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Chairs
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Crockery
                </a>
              </li>
            </ul>

            <ul className="footer-menu">
              <li className="footer-menu__list">
                <h4 className="footer-menu__title">Our company</h4>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  About us
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Vacancies
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Contact us
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Privacy
                </a>
              </li>

              <li className="footer-menu__list">
                <a href="#" className="footer-menu__link">
                  Returns policy
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-email">
            <h4 className="footer-email__title">Join our mailing list</h4>

            <div className="footer-email__sign-up">
              <input
                type="text"
                id="footer-email-input"
                placeholder="your@email.com"
              />

              <button className="footer-email__btn">Sign up</button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright {new Date().getFullYear()} Avion LTD
          </p>

          <div className="footer__icons">
            <svg>
              <use href="#logo-linkedin"></use>
            </svg>

            <svg>
              <use href="#logo-facebook"></use>
            </svg>

            <svg>
              <use href="#logo-instagram"></use>
            </svg>

            <svg>
              <use href="#logo-skype"></use>
            </svg>

            <svg>
              <use href="#logo-twitter"></use>
            </svg>

            <svg>
              <use href="#logo-pinterest"></use>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
