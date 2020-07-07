import React, { Component } from "react";
import "../../static/profile.css";
import cookie from "react-cookies";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import UserSideBar from "../../components/userSidebar";
import _Profile from "../../components/profile";
import Footer from "../../components/footer";

export class Profile extends Component {
  constructor() {
    super();
    this.state = { googleId: "" };
  }

  componentDidMount() {
    this.setState({ googleId: cookie.load("googleId") });
  }

  render() {
    const { googleId } = this.state;
    return (
      <React.Fragment>
        <Layout title="User profile" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <UserSideBar />

          <_Profile googleId={googleId} />
        </div>
        <Footer isFixed={true} />
      </React.Fragment>
    );
  }
}

export default Profile;
