import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 24px auto",
      height: 320,
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: 400,
      width: 400,
    },
  },
  detail: {
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 16px auto",
      height: "auto",
      width: 320,
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 auto",
      height: "auto",
      width: 400,
    },
  },
}));

const ProductDetail = () => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const path = selector.router.location.pathname;
  const id = path.split("/product/")[1];

  const [product, setProduct] = useState(null);

  useEffect(() => {
    db.collection("products")
      .doc(id)
      .get.then((doc) => {
        const data = doc.data();
        setProduct(data);
      });
  }, []);
  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}></div>
          <div className={classes.detail}></div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
