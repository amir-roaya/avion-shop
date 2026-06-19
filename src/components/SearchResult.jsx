import products from "../modules/product.js";

const SearchResult = ({ userSearch, isSamePage }) => {
  const searchValue = userSearch.trim().toLowerCase();

  if (searchValue) {
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );

    if (searchedProducts.length > 0) {
      return searchedProducts.map(({ id, mainHref, name }) => (
        <li key={id} className="result-list__item">
          <a
            className="result-list__link"
            href={`${!isSamePage ? mainHref : "."}/${id}`}
          >
            {name}
          </a>
        </li>
      ));
    }
  }
};

export default SearchResult;
