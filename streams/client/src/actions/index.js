import streams from "../apis";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// 新建API POST 方法， 传入表格内容并异步存到数据库
export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};
