import React, { Component } from "react";
import cookie from "react-cookies";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "432197292645-96fe4is20g37ettkn64fp31uiuirrbvl.apps.googleusercontent.com";

class LoginBtns extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: cookie.load("loginAccessToken") ? true : false,
      accessToken: cookie.load("loginAccessToken")
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  updateUserInfo(userName, userEmail, googleId) {
    console.log(userName, userEmail, googleId);
  }

  login(response) {
    console.log(response);
    if (response.accessToken) {
      const googleId = response.googleId;
      const userName = response.Rt.Ad;
      const userEmail = response.Rt.Au;

      cookie.save("loginAccessToken", response.accessToken);
      cookie.save("userName", userName);
      cookie.save("googleId", googleId);
      this.updateUserInfo(userName, userEmail, googleId);
      this.props.updateUserName(userName);

      this.setState({
        isLogined: true,
        accessToken: response.accessToken
      });
    }
  }

  logout(response) {
    cookie.remove("loginAccessToken");
    cookie.remove("userName");
    cookie.remove("googleId");
    this.props.updateUserName("");
    this.setState(state => ({
      isLogined: false,
      accessToken: ""
    }));
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    return (
      <div className="login-btn">
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
          />
        )}
        {/* {this.state.accessToken ? (
          <h5>
            Your Access Token: <br />
            <br /> {this.state.accessToken}
          </h5>
        ) : null} */}
      </div>
    );
  }
}

export default LoginBtns;
