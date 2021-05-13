import { Dispatch } from "redux";

export const GET_POST_SUCCESS = "GET_POST_SUCCESS";

export interface GetPostSuccess {
  type: typeof GET_POST_SUCCESS;
  payload: any;
}

export type PostDispatchTypes = GetPostSuccess;

export const GetPosts =
  (data: any) => async (dispatch: Dispatch<PostDispatchTypes>) => {
    try {
      dispatch({
        type: GET_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log({ error });
    }
  };
