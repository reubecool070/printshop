import { Dispatch } from "redux";

export const GET_TOP_HEADER_SUCCESS = "GET_TOP_HEADER_SUCCESS";
export const ADD_TOP_HEADER_SUCCESS = "ADD_TOP_HEADER_SUCCESS";

export interface GetTopHeaderSuccess {
  type: typeof GET_TOP_HEADER_SUCCESS;
  payload: any;
}

export interface AddTopHeaderSuccess {
  type: typeof ADD_TOP_HEADER_SUCCESS;
  payload: any;
}

export type HeaderDispatchTypes = GetTopHeaderSuccess | AddTopHeaderSuccess;

export const GetTopHeader =
  (data: any) => async (dispatch: Dispatch<HeaderDispatchTypes>) => {
    try {
      // const serializedState = localStorage.getItem("state");
      // if (serializedState === null) {
      //   return undefined;
      // } else {
      //   return JSON.parse(serializedState);
      // }
      dispatch({
        type: GET_TOP_HEADER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      // console.log({ error });
    }
  };

export const AddTopHeader =
  (data: any) => async (dispatch: Dispatch<HeaderDispatchTypes>) => {
    try {
      // const serializedState = JSON.stringify(data);
      // localStorage.setItem("state", serializedState);
      dispatch({
        type: ADD_TOP_HEADER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("object");
    }
  };
