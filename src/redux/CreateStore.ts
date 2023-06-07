import createSagaMiddleware from "redux-saga";
import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import rootSaga from "../saga";
import MenuReducer from "./menu/MenuRedux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = () => {
  const middlewares: any = [];
  const enhancers: any = [];

  const middleware: any = createSagaMiddleware();
  middlewares.push(middleware);
  enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)));

  const sagaMiddleware = () => middlewares;

  const reducer = combineReducers({
    MenuReducer,
  });

  const store = configureStore({
    reducer,
    middleware: sagaMiddleware,
  });
  middleware.run(rootSaga);

  return {
    store,
    reducer,
  };
};

export default store;
