import { Reducer } from "redux";

export interface DropdownAction {
  type: string;
  dropdown: string[];
}

const DropDownReducer: Reducer<string[], DropdownAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case "ADD_DROPDOWN":
      return [...state, ...action.dropdown];
    default:
      return state;
  }
};

export default DropDownReducer;
