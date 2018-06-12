import * as React from "react"

class Login extends React.Component {
  render() {
    return(
      <div className="login-form">
        <h1>Login</h1>
        <form action="/sessions" method="POST" charSet="UTF-8">
          <input name="authenticity_token" type="hidden"/>
          <input name="user[name]" type="text" placeholder="Enter your name" autoComplete="username"/>
          <input name="session[email]" type="text" placeholder="Enter your email" autoComplete="username"/>
          <input name="session[password]" type="password" placeholder="Enter your password" autoComplete="current-password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}


export default Login
