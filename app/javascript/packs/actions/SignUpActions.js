export const submitSignupForm = (e) => {
  return dispatch => {
    let email, password;
    for (let i = 0; i < e.target.children.length; i++) {
      if (e.target.children[i].name == "email") {
        email = e.target.children[i].value;
      }
      if (e.target.children[i].name == "password") {
        password = e.target.children[i].value;
      }
    }
    fetch("/users", {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({ "Content-Type": "application/json" })
    })
    .then(response => response.json())
    .then(
      result => {
        localStorage.setItem("jwt", "hogefuga")
        dispatch(submitSignupFormSuccess(result))
      },
      error => (dispatch(submitSignupFormFailed(error)))
    )
  }
}

const submitSignupFormSuccess = (result) => ({
  type: "SIGNUP",
  result: result
})
const submitSignupFormFailed = (errors) => ({
  type: "SIGNUP_FAILED",
  errors: errors
})
