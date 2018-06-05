import * as React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"


const Buttons = () => (
  <ul className="buttons">
    <li className="login"><Link to="/login">Login</Link></li>
  </ul>
)

const Navigation = () => (
  <Router>
    <header className={ localStorage.getItem("jwt") ? "" : "non-auth" }>
      <div className="inner">
        <nav>
          <div className="logo">
            <Link to="/"><i className="fa fa-home"></i></Link>
          </div>
          {
            localStorage.getItem("jwt") ?
            <ul><li className="user-name">F.Shibusawa</li></ul> :
            <Buttons/>
          }
        </nav>
      </div>
    </header>
  </Router>
)

export default Navigation
