import { legacy_createStore as createStore } from "redux";
import reducerRoot from "../reducers/reducerRoot";

const store = createStore(
  reducerRoot,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
