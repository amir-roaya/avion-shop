import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import ShopBasket from "./pages/shop-basket/ShopBasket";
import AllProducts from "./pages/all-products/AllProducts";
import ProductInfo from "./pages/product-info/ProductInfo";
import productInfoLoader from "./loaders/productInfoLoader";
import Error from "./components/Error";
import NotFound from "./components/NotFound";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "shop-basket", element: <ShopBasket /> },
          { path: "all-products", element: <AllProducts /> },
          {
            path: "product-info/:id",
            element: <ProductInfo />,
            loader: productInfoLoader,
            errorElement: <Error />,
          },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );

  return <RouterProvider router={router} />;
};

export default App;
