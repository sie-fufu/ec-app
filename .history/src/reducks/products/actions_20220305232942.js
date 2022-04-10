export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const deleteProductsAction = (products) => {
  return {
    type: "DELETE_PRODUCT",
    payload: products,
  };
};
export const _PRODUCTS = "FETCH_PRODUCTS";
export const fetchProductsAction = (products) => {
  return {
    type: "FETCH_PRODUCTS",
    payload: products,
  };
};
