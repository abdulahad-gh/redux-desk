import { createStore } from "redux";
import counterReducer from "./Services/CounterReducer/CounterReducer";

const store = createStore(counterReducer)
export default store;