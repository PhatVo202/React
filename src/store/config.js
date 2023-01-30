import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers/countReducer";
import { phoneReducer } from "./reducers/phoneReducer";
import { vocabularyReducer } from "./reducers/vocabularyReducer";
import { userReducer } from "./reducers/userReducer";

import { bookSticketReducer } from "./reducers/bookSticketReducer";

import { hookUserReducer } from "./reducers/hookUserReducer";
const rootReducer = combineReducers({
  countReducer: countReducer,
  phoneReducer: phoneReducer,
  vocabularyReducer,
  bookSticketReducer,
  userReducer,
  hookUserReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
