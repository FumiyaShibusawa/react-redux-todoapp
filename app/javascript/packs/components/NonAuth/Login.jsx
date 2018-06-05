import * as React from "react"
import { Field, reduxForm } from "redux-form"

class Login extends React.Component {
  handleSubmit = (values) => {
    console.log(values)
  }

  render() {
    return(
      <div className="login-form">
        <h1>Login</h1>
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
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: "login"
})(Login)
