import * as React from "react"

class Signup extends React.Component {
  // handleSubmit = (e) => {
  //   const userParams = { authenticity_token: "", user: { name: "", email: "", password: "" } }
  //   for (let i = 0; i < e.children.length; i++) {
  //     if (e.children[i].name == "authenticity_token") {
  //       userParams["authenticity_token"] = e.children[i].value
  //     }
  //     if (e.children[i].name == "name") {
  //       userParams["user"]["name"] = e.children[i].value
  //     }
  //     if (e.children[i].name == "email") {
  //       userParams["user"]["email"] = e.children[i].value
  //     }
  //     if (e.children[i].name == "password") {
  //       userParams["user"]["password"] = e.children[i].value
  //     }
  //   }
  //   fetch("/users.json", {
  //     method: "POST",
  //     body: JSON.stringify(userParams),
  //     headers: new Headers({
  //       "Content-Type": "application/json"
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(
  //     result => {
  //       document.cookie = `jwt_token=${result["jwt_token"]}`
  //       document.location.href = "/todo_lists"
  //     },
  //     error => (console.log(error))
  //   )
  // }
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
