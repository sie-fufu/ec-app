import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductCard } from "../components/Products";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row"></div>
    </section>
  );
};

export default ProductList;
