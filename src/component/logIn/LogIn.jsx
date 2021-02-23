import React, { Component } from "react";
import loginImg from "../../assets/image/login.png";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import history from "../../History.js";
import "./logIn.scss";
class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      email: "",
      emailFlag: false,
      emailHelperText: " ",
      password: "",
      passwordFlag: false,
      passwordHelperText: " ",
    };
  }
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  passwordPattern =
    "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  validateLogIn = (e) => {
    if (e.target.name === "email") {
      if (e.target.value.match(this.emailPattern)) {
        this.setState({
          email: e.target.value,
          emailFlag: false,
          emailHelperText: " ",
        });
      } else if (e.target.value.length < 1) {
        this.setState({
          emailFlag: true,
          emailHelperText: "Require",
        });
      } else {
        this.setState({
          emailFlag: true,
          emailHelperText: "Invalid email",
        });
      }
    }
    if (e.target.name === "password") {
      // if (e.target.value.match(this.passwordPattern)) {
      if (e.target.value.length > 4) {
        this.setState({
          password: e.target.value,
          passwordFlag: false,
          passwordHelperText: " ",
        });
      } else if (e.target.value.length < 1) {
        this.setState({
          passwordFlag: true,
          passwordHelperText: "Require",
        });
      } else {
        this.setState({
          passwordFlag: true,
          passwordHelperText:
            // "Combination of upper and lower case, number & spc. char.",
            "Minimum 5 char.",
        });
      }
    }
  };

  checkLogInAuthentication = () => {
    let logInEmailLengthFlag = true;
    let logInPasswordLengthFlag = true;
    if (this.state.email.length < 1) {
      logInEmailLengthFlag = false;
      this.setState({
        emailFlag: true,
        emailHelperText: "Require",
      });
    }
    if (this.state.password.length < 1) {
      logInPasswordLengthFlag = false;
      this.setState({
        passwordFlag: true,
        passwordHelperText: "Require",
      });
    }
    if (logInEmailLengthFlag && logInPasswordLengthFlag) {
      if (!this.state.emailFlag && !this.state.passwordFlag) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  logIn = () => {
    if (this.checkLogInAuthentication()) {
      let logInObj = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(logInObj);
      localStorage.setItem("adminId", "34hjj3");
      history.push("/dashboard/main");
    }
  };
  render() {
    return (
      <div className="login-container">
        <div className="login-picture">
          <img src={loginImg} alt="log-in-img" className="login-image" />
        </div>
        <div className="login-from-container">
          <div className="login-from">
            
            <Typography
              variant="h5"
              color="textPrimary"
              className="login-heading"
            >
              Admin Login
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              margin="dense"
              label="Email Id"
              name="email"
              value={this.state.email}
              error={this.state.emailFlag}
              helperText={this.state.emailHelperText}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
              onBlur={(e) => this.validateLogIn(e)}
              className="login-email"
              data-testid="loginEmail"

            />
            <TextField
              fullWidth
              variant="outlined"
              margin="dense"
              label="Password"
              name="password"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              error={this.state.passwordFlag}
              helperText={this.state.passwordHelperText}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
              onBlur={(e) => this.validateLogIn(e)}
              className="login-password"
              data-testid="loginPassword"
              InputProps={{
                // <-- toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      className="toggle-password-eye"
                      aria-label="toggle password visibility"
                      onClick={this.handleClickShowPassword}
                      data-testid="togglePasswordEye"
                    >
                      {this.state.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="forgot-password">
              <Typography
                variant="caption"
                color="textSecondary"
                className="forgot-password-text"
              >
                Forgot Password?
              </Typography>
            </div>
            <Button
              fullWidth
              onClick={() => this.logIn()}
              className="login-button"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
