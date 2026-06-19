import products from "../modules/product";

const productInfoLoader = ({ params }) => {
  const { id } = params;
  const mainProduct = products.find((product) => product.id === +id);

  if (!mainProduct) {
    throw Error(`Product with ID ${id} not found`);
  }
  return mainProduct;
};

export default productInfoLoader;
