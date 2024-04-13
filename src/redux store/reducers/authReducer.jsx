const initialState = {
  isRegistered: false,
  errors: "",
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_REGISTERED": {
      return { ...state, isRegistered: action.payload };
    }
    case "USER_REGISTER_ERROR": {
      return { ...state, errors: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
