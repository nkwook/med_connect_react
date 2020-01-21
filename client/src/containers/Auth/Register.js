import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'components/Auth';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";



class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  // componentDidMount() {
  //   // If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/main");
  //   }
  // }


  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }


  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
//   onSubmit = e => {
//     e.preventDefault();
//     const newUser = {
//       username: this.state.username,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2
//     };
//     console.log(newUser);
//     this.props.registerUser(newUser, this.props.history);
//   };

  onSubmit= e=>{
    e.preventDefault();
    const newUser = {
              username: this.state.username,
              email: this.state.email,
              password: this.state.password,
              password2: this.state.password2
            };
            console.log(newUser);
            this.props.history.push("/auth/login");

  }

  render() {
    console.log("register");
    const { errors } = this.state;
    return (
      <AuthContent title="회원가입">
        <form onSubmit={this.onSubmit}>

          <InputWithLabel
            label="병원 명"
            name="hospital"
            placeholder="병원 명"
            onChange={this.onChange}
            value={this.state.hospital}
            error={errors.hospital}
            id="hospital"
            type="hospital"
            // className={classnames("", {
            //   invalid: errors.username
            // })}
          />
          <InputWithLabel
            label="전공"
            name="major"
            placeholder="전공"
            onChange={this.onChange}
            value={this.state.major}
            error={errors.major}
            id="major"
            type="major"
            // className={classnames("", {
            //   invalid: errors.username
            // })}
          />
                   <InputWithLabel
            label="면허 번호"
            name="license"
            placeholder="면허 번호"
            onChange={this.onChange}
            value={this.state.license}
            error={errors.license}
            id="license"
            type="license"
            // className={classnames("", {
            //   invalid: errors.username
            // })}
          />
          <InputWithLabel
            label="아이디"
            name="id"
            placeholder="아이디"
            onChange={this.onChange}
            value={this.state.id}
            error={errors.id}
            id="email"
            type="text"
            // className={classnames("", {
            //   invalid: errors.email
            // })}

          />

          <InputWithLabel
            label="비밀번호"
            name="password"
            placeholder="비밀번호"

            onChange={this.onChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            type="password"
            // className={classnames("", {
            //   invalid: errors.password
            // })}

          />
          <InputWithLabel
            label="비밀번호 확인"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            id="password2"
            // className={classnames("", {
            //   invalid: errors.password2
            // })}

          />
          <AuthButton onClick={this.onSubmit}>회원가입</AuthButton>
          <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
        </form>
      </AuthContent>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  newUser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  newUser: state.newUser
});

export default Register;
// export default connect(
//   mapStateToProps,
//   // { registerUser }
// )(withRouter(Register));