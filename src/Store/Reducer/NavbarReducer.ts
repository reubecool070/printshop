import { Reducer } from "redux";

export interface NavbarAction {
  type: string;
  navbar: string[];
}

const NavbarReducer: Reducer<string[], NavbarAction> = (state = [], action) => {
  switch (action.type) {
    case "ADD_NAVBAR":
      return [...state, ...action.navbar];
    default:
      return state;
  }
};

export default NavbarReducer;
