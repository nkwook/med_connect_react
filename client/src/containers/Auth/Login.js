import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {


  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/main");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/main"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      id: this.state.id,
      password: this.state.password
    };
    // console.log(1326);

    console.log(userData);
    this.props.loginUser(userData);
    //this.props.history.push("/main");
  };


  render() {
    const { errors } = this.state;
    console.log("login");
    return (
      <AuthContent title="로그인">
        <InputWithLabel
          label="아이디"
          name="id"
          placeholder="아이디"
          onChange={this.onChange}
          value={this.state.id}
          error={errors.id}
          id="id"
          type="id"
          className={classnames("", {
            invalid: errors.email || errors.emailnotfound
          })}
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={this.onChange}
          value={this.state.password}
          error={errors.password}
          id="password"
          type="password"
          className={classnames("", {
            invalid: errors.password || errors.passwordincorrect
          })}
        />
        <Link to="/main">
          <AuthButton onClick={this.onSubmit}>Login</AuthButton>
        </Link>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  
  errors: state.errors
});

export default connect(
  mapStateToProps,
   { loginUser }
)(Login);