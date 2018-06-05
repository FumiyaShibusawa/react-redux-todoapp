import * as React from "react"
import { Field, reduxForm } from "redux-form"
import { BrowserRouter as Router, Link } from "react-router-dom"

class Signup extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    return(
      <Router>
        <div className="signup-form">
          <h1>Register</h1>
          <form onSubmit={ (e) => {
            e.preventDefault();
            this.handleSubmit(e.target);
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
            type="text"
            placeholder="Enter your password"
            />
            <button type="submit">Register</button>
          </form>
          <Link className="goto-login" to="/login">Already have your account?</Link>
        </div>
      </Router>
    )
  }
}


export default reduxForm({
  form: "login"
})(Signup)
