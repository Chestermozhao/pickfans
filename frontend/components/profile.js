import React, { Component } from "react";
import "../static/profile.css";
import EditIcon from "-!svg-react-loader!../images/edit.svg";
import GrassIcon from "-!svg-react-loader!../images/grass.svg";
import FlowerIcon from "-!svg-react-loader!../images/flower.svg";
import MushIcon from "-!svg-react-loader!../images/mushroom.svg";
import ChickIcon from "-!svg-react-loader!../images/chick.svg";
import ChickenIcon from "-!svg-react-loader!../images/chicken.svg";
import PhoenixIcon from "-!svg-react-loader!../images/phoenix.svg";

const fansLevelTag = {
  1: <GrassIcon className="icon-size" />,
  2: <FlowerIcon className="icon-size" />,
  3: <MushIcon className="icon-size" />,
  4: <ChickIcon className="icon-size" />,
  5: <ChickenIcon className="icon-size" />,
  6: <PhoenixIcon className="icon-size" />
};

const userInfo = {
  Name: "Chester",
  FansLevel: fansLevelTag[6],
  Videos: 0,
  Channels: 0
};

export class _Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { googleId: props.googleId, userInfo: userInfo, isVip: false };
  }
  render() {
    const { googleId, isVip, userInfo } = this.state;
    const infoItem = ["Name", "Videos", "Channels", "FansLevel"];
    return (
      <div className="profile-box">
        <div className="profile-content-box">
          {isVip ? (
            <div className="avatar-box">
              <img
                className="profile-image mt-3"
                src="https://cdn.caiyunapp.com/user/avatar/5d43f9b7e2cef6000f6b6668"
              />
            </div>
          ) : (
            <img
              className="profile-image mt-3"
              src="https://cdn.caiyunapp.com/user/avatar/5d43f9b7e2cef6000f6b6668"
            />
          )}
          <div>
            <button className="edit-btn my-1">
              <EditIcon className="edit-icon" />
              Upload
            </button>
          </div>
          <hr className="mt-1 sep-line" />
          {infoItem.map((item, index) => (
            <>
              <div key={index} className="d-flex ml-5 profile-box-left">
                <div className="col-lg-4 mx-0 px-0 profile-content">
                  {item}：
                </div>
                <div className="col-lg-5 mx-0 px-0 profile-content-text">
                  {userInfo[item]}
                </div>
              </div>
              <hr className="sep-line" />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default _Profile;
