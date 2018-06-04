import * as React from "react"
import { Field, reduxForm } from "redux-form"

class Signup extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    return(
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
      </div>
    )
  }
}


export default reduxForm({
  form: "login"
})(Signup)
