import * as React from "react"
import Signup from "./Signup"
import Login from "./Login"

const MainVisual = () => (
  <div>
    <div className="modal">
      <Login/>
    </div>
    <div className="main-visual">
      <div className="inner">
        <div className="message">
          <h2>Simple Todo App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <Signup/>
      </div>
    </div>
    <div className="features">
      <div className="inner">
        <h2>This sample is built with...</h2>
        <div className="features-grid">
          <section>
            <h3>React</h3>
            <img src="assets/react.svg"/>
            <p>UI view built solely with React components.</p>
          </section>
          <section>
            <h3>Redux</h3>
            <img src="assets/redux.svg"/>
            <p>UI view built solely with React components.</p>
          </section>
          <section>
            <h3>JWT</h3>
            <img src="assets/jwt.svg"/>
            <p>UI view built solely with React components.</p>
          </section>
        </div>
      </div>
    </div>
    <div className="contribute">
      <section>
        <h2>Give a PR to improve this sample!</h2>
        <a href="https://github.com/FumiyaShibusawa/react-redux-todoapp" target="_blank">
          https://github.com/FumiyaShibusawa/react-redux-todoapp
        </a>
      </section>
    </div>
  </div>
)

export default MainVisual
