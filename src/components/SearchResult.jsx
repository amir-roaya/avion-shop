import { Link } from "react-router";
import products from "../modules/product.js";

const SearchResult = ({ userSearch }) => {
  const searchValue = userSearch.trim().toLowerCase();

  if (searchValue) {
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );

    if (searchedProducts.length > 0) {
      return searchedProducts.map(({ id, name }) => (
        <li key={id} className="result-list__item">
          <Link
            className="result-list__link"
            to={`/product-info/${id}`}
          >
            {name}
          </Link>
        </li>
      ));
    }
  }
};

export default SearchResult;
