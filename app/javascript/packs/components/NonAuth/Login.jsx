import * as React from "react"

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
          <input name="email" type="text" placeholder="Enter your email" autoComplete="username"/>
          <input name="password" type="password" placeholder="Enter your password" autoComplete="current-password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}


export default Login
