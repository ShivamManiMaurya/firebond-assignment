import { combineReducers } from "redux";
import boolStateRed from "./boolStateRed";
import setOptionsReducer from "./setOptionsRed";

export const reducers = combineReducers({
    boolStateRed,
    setOptionsReducer,
});
