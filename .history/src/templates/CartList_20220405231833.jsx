import React from "react";
import List from "@mui/material/List";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInCart } from "../reducks/users/selectors";
import CartListItem from "../components/Products";
import { GreyButton, PrimaryButton } from "../components/UIkit";

const CartList = () => {
  const selector = useSelector((state) => state);
  const productsInCart = getProductsInCart(selector);

  return (
    <section className="c-section-wrapin">
      <h2 className="u-text__headline">ショッピングカート</h2>
      <List>
        {productsInCart.length > 0 &&
          productsInCart.map((product) => (
            <CartListItem key={product.cartId} product={product} />
          ))}
      </List>
      <div className="module-spacer--medium" />
      <div className="p-grid__column">
            <PrimaryButton label={"レジへ進む"} onClick={} />
            <div className="" module-spacer-extra-small />
            <GreyButton label={"ショッピングを続ける"} onClick={}/>
      </div>
    </section>
  );
};

export default CartList;
