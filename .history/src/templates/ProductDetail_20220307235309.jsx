import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";

const ProductDetail = () => {
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split("/product/")[1];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    db.collection("products").doc();
  }, []);
  return <section className="c-section-wrapin"></section>;
};

export default ProductDetail;
