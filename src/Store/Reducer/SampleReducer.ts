import { GET_POST_SUCCESS, PostDispatchTypes } from "../Action/SampleAction";

interface InitialStateI {
  posts?: any;
}

const initialState: InitialStateI = {
  posts: [],
};

const SampleReducer = (
  state: InitialStateI = initialState,
  action: PostDispatchTypes
): InitialStateI => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        posts: action.payload,
      };

    default:
      return state;
  }
};

export default SampleReducer;
