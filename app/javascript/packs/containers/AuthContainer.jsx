import * as React from "react"
import TodoListContainer from "../containers/TodoListContainer"
import Navigation from "../components/Navigation"
import MainVisual from "../components/NonAuth/MainVisual"
import { connect } from "react-redux"
import { submitSignUpForm } from "../actions/SignUpActions"


const mapStateToProps = state => ({
  jwt_authorized: state.signup
})


const mapDispatchToProps = dispatch => ({
  submitSignUpForm: (e) => {
    dispatch(submitSignUpForm(e))
  }
})

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={ this.props.jwt_authorized ? "" : "wall-paper" }>
        <Navigation jwt_authorized={ this.props.jwt_authorized }/>
        <main className="wrapper">
          {
            this.props.jwt_authorized ?
            <TodoListContainer /> :
            <MainVisual handleSignUp={ this.props.submitSignUpForm } />
          }
        </main>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)
