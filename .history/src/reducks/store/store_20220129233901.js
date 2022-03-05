import { createStore as reduxCreateStore, combineReducers } from "redux";

//Import reducers
import { ProductsReducer } from "../products/reducers";
import { UserReducer } from "../users/reducers";

export default function createStore() {
  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      users: UserReducer,
    })
  );
}
