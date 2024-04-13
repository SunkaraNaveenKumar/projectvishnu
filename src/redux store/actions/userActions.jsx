import axios from "axios";
import { userRegisterURL } from "../../utils/StaticURLs";

const baseURL = import.meta.env.VITE_API_KEY;

export const asyncIsRegistered = (formData) => {
  return (dispatch) => {
    axios
      .post(`${baseURL}${userRegisterURL}`, formData)
      .then((res) => {
        const { data } = res;
        console.log("data : ", data);
        if (data.errors) {
          dispatch(setIsErrors(data));
        } else {
          dispatch(setIsRegistered(data));
          dispatch(setIsErrors({ errors: "" }));
        }
      })
      .catch((error) => {
        dispatch(setIsRegistered({ isRegistered: false }));
      });
  };
};

export const setIsErrors = (userState) => {
  return {
    type: "USER_REGISTER_ERROR",
    payload: userState.errors,
  };
};

export const setIsRegistered = (userState) => {
  return {
    type: "IS_REGISTERED",
    payload: userState.isRegistered,
  };
};
