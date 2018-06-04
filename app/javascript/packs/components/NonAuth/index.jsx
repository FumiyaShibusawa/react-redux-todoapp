import * as React from "react"
import MainVisual from "./MainVisual"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const NonAuth = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ MainVisual }/>
      <Route path="login" component={ Login }/>
      <Route path="signup" component={ Signup }/>
    </Switch>
  </Router>
)

export default NonAuth
