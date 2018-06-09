import * as React from "react"

class SignUp extends React.Component {
  render() {
    return(
        <div className="signup-form">
          <h1>Register</h1>
          <form onSubmit={ (e) => {
            e.preventDefault();
            this.props.handleSignUp(e);
          } }>
            <input name="email" type="text" placeholder="Enter your email" autoComplete="username"/>
            <input name="password" type="password" placeholder="Enter your password" autoComplete="current-password"/>
            <button type="submit">Register</button>
          </form>
          <div className="goto-login" data-modal="popup">Already have your account?</div>
        </div>
    )
  }
}

export default SignUp
