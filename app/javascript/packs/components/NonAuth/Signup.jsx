import * as React from "react"
import { Field, reduxForm } from "redux-form"
import { BrowserRouter as Router, Link } from "react-router-dom"

class Signup extends React.Component {
  handleSubmit = (e) => {
    let email, password;
    for (let i = 0; i < e.target.children.length; i++) {
      if (e.target.children[i].name == "email") {
        email = e.target.children[i].value;
      }
      if (e.target.children[i].name == "password") {
        password = e.target.children[i].value;
      }
    }
    fetch("/users.json", {
      method: "POST",
      body: JSON.stringify({ user: { email: email, password: password } }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
    .then(response => response.json())
    .then(
      result => (console.log(result)),
      error => (console.log(error))
    )
  }

  render() {
    return(
      <Router>
        <div className="signup-form">
          <h1>Register</h1>
          <form onSubmit={ (e) => {
            e.preventDefault();
            this.handleSubmit(e);
          } }>
            <Field
            name="email"
            component="input"
            type="text"
            placeholder="Enter your email"
            />
            <Field
            name="password"
            component="input"
            type="password"
            placeholder="Enter your password"
            />
            <button type="submit">Register</button>
          </form>
          <div className="goto-login" data-modal="popup">Already have your account?</div>
        </div>
      </Router>
    )
  }
}


export default reduxForm({
  form: "login"
})(Signup)
