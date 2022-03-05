import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import reducers
import { ProductsReducer } from "../products/reducers";
import { UsersReducer } from "../users/reducers";
import { createLogger } from "redux-logger";

export default function createStore(history) {
  const logger = createLogger({
    collapsed: true
    diff: true
  })

  return reduxCreateStore(
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history), thunk)
  );
}
