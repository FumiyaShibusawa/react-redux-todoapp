import * as React from "react"

class Signup extends React.Component {
  componentDidMount = () => {
    const csrfToken = $("meta[name='csrf-token']")[0].content;
    $("input[name='authenticity_token']").val(csrfToken);
  }
  render() {
    return(
      <div className="signup-form">
        <h1>Register</h1>
        <form action="/users" method="POST" charSet="UTF-8">
          <input name="authenticity_token" type="hidden"/>
          <input name="user[name]" type="text" placeholder="Enter your name" autoComplete="username"/>
          <input name="user[email]" type="text" placeholder="Enter your email" autoComplete="email"/>
          <input name="user[password]" type="password" placeholder="Enter your password" autoComplete="current-password"/>
          <button type="submit">Register</button>
        </form>
        <div className="goto-login" data-modal="popup">Already have your account?</div>
      </div>
    )
  }
}

export default Signup
