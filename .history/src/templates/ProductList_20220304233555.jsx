import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ProductCard } from "../components/Products";
import { fetchProducts } from "../reducks/products/operations";
import { getProducts } from "../reducks/products/selectors";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const products = getProducts(selector);
  const theme = createTheme;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 &&
          products.map((product) => (
            <ThemeProvider theme={theme}>
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                images={product.images}
                price={product.price}
              />
            </ThemeProvider>
          ))}
      </div>
    </section>
  );
};

export default ProductList;
