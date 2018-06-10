export const submitSignUpForm = (e) => {
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
        dispatch(submitSignUpFormSuccess(result))
      },
      error => (dispatch(submitSignUpFormFailed(error)))
    )
  }
}

const submitSignUpFormSuccess = (result) => ({
  type: "SIGNUP",
  result: result
})
const submitSignUpFormFailed = (errors) => ({
  type: "SIGNUP_FAILED",
  errors: errors
})
