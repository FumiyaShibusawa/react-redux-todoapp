const signup = (state = false, action) => {
  switch (action.type) {
    case "SIGNUP":
      return action.result.jwt_authorized
    default:
      return state
  }
};

export default signup
