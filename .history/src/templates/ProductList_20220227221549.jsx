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

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 && products.map((product) => <ProductCard />)}
      </div>
    </section>
  );
};

export default ProductList;
