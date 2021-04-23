import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as loginAction from '../../redux/login/loginAction'

class LoginPage extends React.Component {
  componentDidMount() {
    this.props.actions.getUserAuth()
  }

  render() {
    return (
      <div>
        Login Page: {this.props.loggedUser ? this.props.loggedUser.name : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedUser: state.loggedUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
