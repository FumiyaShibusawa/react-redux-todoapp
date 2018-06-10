import * as React from "react"
import Navigation from "../../components/Navigation"
import MainVisual from "./MainVisual"

class NonAuth extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wall-paper">
        <Navigation/>
        <main className="wrapper">
          <MainVisual/>
        </main>
      </div>
    )
  }
}

export default NonAuth
