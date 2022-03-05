//Import reducers
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });

  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(logger, routerMiddleware(history), thunk)
  );
}
