import React, { Component } from "react";
import cookie from "react-cookies";
import LoginBtns from "./loginbtns";
import SearchBar from "./searchbar";
import Logo from "./logo";
import AboutIcon from "-!svg-react-loader!../images/about_us.svg";
import UserIcon from "-!svg-react-loader!../images/user.svg";
import "../static/index.css";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMainPage: props.isMainPage,
      userName: cookie.load("userName") || ""
    };

    this.updateUserName = this.updateUserName.bind(this);
  }

  updateUserName(userName) {
    this.setState({ userName: userName });
  }

  render() {
    const { isMainPage, userName } = this.state;
    const visitText = "Hello Visitor, Login and pick your idol now!";
    const userText = " Welcome Back to Fans Picker!";
    return (
      <div className="nav-bar">
        {isMainPage ? "" : <Logo />}
        <div className="nav-bar-btns pt-2">
          {!isMainPage ? (
            ""
          ) : (
            <span className="nav-bar-info">
              {userName ? userName + userText : visitText}
            </span>
          )}
          {isMainPage ? (
            ""
          ) : (
            <div className="search-bar-layout">
              <SearchBar isMainPage={isMainPage} />
            </div>
          )}
          <button className="nav-bar-btn">
            <a href="/about">
              <AboutIcon className="about-icon" />
              About
            </a>
          </button>
          {userName ? (
            <button className="nav-bar-btn">
              <a href="/user/profile">
                <UserIcon className="about-icon" />
                User
              </a>
            </button>
          ) : (
            ""
          )}
          <LoginBtns
            updateUserName={this.updateUserName}
            className="login-btn"
          />
        </div>
      </div>
    );
  }
}

export default NavBar;
