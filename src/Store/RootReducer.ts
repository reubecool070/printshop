import { combineReducers } from "redux";
import NavbarReducer from "./Reducer/NavbarReducer";
import DropDownReducer from "./Reducer/DropDownReducer";
import SampleReducer from "./Reducer/SampleReducer";

export const RootReducer = combineReducers({
  navbar: NavbarReducer,
  dropdown: DropDownReducer,
  sample: SampleReducer,
});
