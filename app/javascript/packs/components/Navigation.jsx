import * as React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"


const Buttons = () => (
  <ul className="buttons">
    <li className="login"><div data-modal="popup">Login</div></li>
  </ul>
)

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <header className={ this.props.jwt_authorized ? "" : "non-auth" }>
          <div className="inner">
            <nav>
              <div className="logo">
                <Link to="/"><i className="fa fa-home"></i></Link>
              </div>
              {
                this.props.jwt_authorized ?
                <ul><li className="user-name">F.Shibusawa</li></ul> :
                <Buttons/>
              }
            </nav>
          </div>
        </header>
      </Router>
    )
  }
}

export default Navigation
