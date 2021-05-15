import {
  ADD_TOP_HEADER_SUCCESS,
  HeaderDispatchTypes,
} from "../Action/TopHeaderAction";

interface InitialStateI {
  top_header?: any;
}

const initialState: InitialStateI = {
  top_header: [],
};

const TopHeaderReducer = (
  state: InitialStateI = initialState,
  action: HeaderDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case ADD_TOP_HEADER_SUCCESS:
      return { ...state, top_header: [...state.top_header, action.payload] };
    default:
      return state;
  }
};

export default TopHeaderReducer;
