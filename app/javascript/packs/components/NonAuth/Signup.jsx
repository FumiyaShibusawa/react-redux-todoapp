import * as React from "react"

// Error Boundaries only for demo
class DemoErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch = (error, errorInfo)  => {
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="signup-form">
          <p>Something went wrong.</p>
          <details style={{ whiteSpace: "pre-wrap" }} >
            { this.state.error && this.state.error.toString() }
            <br/>
            { this.state.errorInfo.componentStack }
          </details>
          <button type="button" onClick={ () =>
            this.setState({ error: null, errorInfo: null })
          }>close error messages</button>
        </div>
      )
    }
    return this.props.children;
  }
}

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: "",
      error: null,
      errorInfo: null
    }
  }
  render() {
    // where it throws error has to be outside of return so Error Boundaries can recognize it.
    if (this.state.trigger == "error!") {
      throw new Error("error!");
      this.setState({ trigger: "" });
    }
    return(
      <div className="signup-form">
        <h1>Register</h1>
        <form action="/users" method="POST" charSet="UTF-8">
          <input name="authenticity_token" type="hidden"/>
          <input name="user[name]" type="text" placeholder="Enter your name" autoComplete="username" onChange={ e => {
            this.setState({ trigger: e.target.value });
          }}/>
          <input name="user[email]" type="text" placeholder="Enter your email" autoComplete="email"/>
          <input name="user[password]" type="password" placeholder="Enter your password" autoComplete="current-password"/>
          <button type="submit">Register</button>
        </form>
        <div className="goto-login" data-modal="popup">Already have your account?</div>
      </div>
    )
  }
}

function SignupWithErrorBoundary() {
  return(
    <DemoErrorBoundary>
      <Signup/>
    </DemoErrorBoundary>
  )
}

export default SignupWithErrorBoundary
