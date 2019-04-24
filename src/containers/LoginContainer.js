import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import LoginForm from '../components/login/LoginForm';
import { loginActions } from '../actions/login.actions';
import { Alert } from "react-bootstrap";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.passwordOnchange = this.passwordOnchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      username: "",
      password: "",
      errors: {username: "", password: ""}
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  usernameOnChange = (e) => {
    const username = e.target.value;
    this.setState({
        username
    })
  }
  
  passwordOnchange = (e) => {
    const password = e.target.value;
    this.setState({
        password
    })
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-form">
          { this.props.error.status ? <Alert dismissible variant="danger">Invalid Credentials</Alert> : '' }
          { this.props.user.firstname ? <Alert dismissible variant="primary">Login Success</Alert> : '' }
          <LoginForm
              username={this.state.username}
              password={this.state.password}
              usernameOnChange={this.usernameOnChange}
              passwordOnchange={this.passwordOnchange}
              handleSubmit={this.handleSubmit}
              validateForm={this.validateForm}
            />
          </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {
  login: PropTypes.func,
  loading: PropTypes.bool,
  user: PropTypes.object,
  error: PropTypes.object
};

function mapStateToProps(state) {
  const { loading, user, error } = state.login;
  return {
    loading,
    user,
    error
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators({
    login: loginActions.login
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
