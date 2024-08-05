import { createStore } from "redux";
import { allReducers } from "./reducers/AllReducers.js";

const store = createStore(
    allReducers
);
store.getState()
export default store;