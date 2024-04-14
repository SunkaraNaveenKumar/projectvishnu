import axios from "axios";
import { userRegisterURL, userLogInURL } from "../../utils/StaticURLs";

const baseURL = import.meta.env.VITE_API_KEY;

export const asyncIsRegistered = (formData) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
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
        console.log("isRegisteredError : ", error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
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
export const setIsLoading = (userState) => {
  return {
    type: "IS_LOADING",
    payload: userState,
  };
};

export const asyncUserLogIn = (formData) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    axios
      .post(`${baseURL}${userLogInURL}`, formData)
      .then((res) => {
        const { data } = res;
        if (data.errors) {
          dispatch(setLoginError(data));
        } else {
          localStorage.setItem("token", data?.token);
          dispatch(setIsUserLogIn(true));
          dispatch(setLoginError({ errors: "" }));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };
};

export const setLoginError = (userState) => {
  return {
    type: "USER_LOGIN_ERROR",
    payload: userState.errors,
  };
};

export const setIsUserLogIn = (isLoggedIn) => {
  return {
    type: "IS_LOGGED_IN",
    payload: isLoggedIn,
  };
};
