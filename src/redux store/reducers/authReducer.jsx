const initialState = {
  isRegistered: false,
  errors: "",
  isLoading: false,
  loginErrors: "",
  isLoggedIn: false,
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_REGISTERED": {
      return { ...state, isRegistered: action.payload };
    }
    case "IS_LOGGED_IN": {
      return { ...state, isLoggedIn: action.payload };
    }
    case "USER_REGISTER_ERROR": {
      return { ...state, errors: action.payload };
    }
    case "IS_LOADING": {
      return { ...state, isLoading: action.payload };
    }
    case "USER_LOGIN_ERROR": {
      return { ...state, loginErrors: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
