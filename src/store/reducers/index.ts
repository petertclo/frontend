// reducers/index.ts

import { combineReducers } from "redux";
import cuisineReducer from "./cuisineTypeReducer";
import familiarOrNewReducer from "./familiarOrNewReducer";

const rootReducer = combineReducers({
  familiarOrNew: familiarOrNewReducer,
  cuisine: cuisineReducer,
});

export default rootReducer;
