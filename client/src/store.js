import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';

const getToken = () => {
  const token = localStorage.getItem('usertoken');
  if (token) {
      setAuthToken(token);
      const decodedToken = jwt_decode(token);
      return decodedToken;
  }
  return {};
}
const initialState = {
  user: getToken()
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);

export default store;


