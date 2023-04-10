// reducers/index.ts

import { combineReducers } from "redux";
import familiarOrNewReducer from "./familiarOrNewReducer";
import cuisineReducer from "./cuisineTypeReducer";

const rootReducer = combineReducers({
  familiarOrNew: familiarOrNewReducer,
  cuisine: cuisineReducer,
});

export default rootReducer;
