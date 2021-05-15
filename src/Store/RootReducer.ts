import { combineReducers } from "redux";
import NavbarReducer from "./Reducer/NavbarReducer";
import DropDownReducer from "./Reducer/DropDownReducer";
import SampleReducer from "./Reducer/SampleReducer";
import TopHeaderReducer from "./Reducer/TopHeaderReducer";

export const RootReducer = combineReducers({
  navbar: NavbarReducer,
  dropdown: DropDownReducer,
  sample: SampleReducer,
  topHeader: TopHeaderReducer,
});
