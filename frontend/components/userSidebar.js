import React, { Component } from "react";
import "../static/userSidebar.css";
import cookie from "react-cookies";
import UserIcon from "-!svg-react-loader!../images/profile-icon.svg";
import HistoryIcon from "-!svg-react-loader!../images/history_side.svg";
import SubIcon from "-!svg-react-loader!../images/subscribe_side.svg";
import FavIcon from "-!svg-react-loader!../images/fav_side.svg";
import CustomizeVideo from "-!svg-react-loader!../images/customize-video.svg";

export class UserSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-1 col-md-1 col-sm-2 px-0 sidebar-box">
          <div className="list-box">
            <a href="/user/profile" className="sidebar-link">
              <div className="icon d-block text-center mt-1">
                <UserIcon className="manage-icon" />
              </div>
              <div className="text-center link-box">Profile</div>
            </a>
          </div>

          <div className="list-box">
            <a href="/user/history" className="sidebar-link">
              <div className="icon d-block text-center mt-1">
                <HistoryIcon className="manage-icon" />
              </div>
              <div className="text-center link-box">History</div>
            </a>
          </div>

          <div className="list-box">
            <a href="/user/subscribe" className="sidebar-link">
              <div className="icon d-block text-center">
                <SubIcon className="manage-icon" />
              </div>
              <div className="text-center link-box mt-1">Subscribe</div>
            </a>
          </div>

          <div className="list-box">
            <a href="/user/favorite" className="sidebar-link">
              <div className="icon d-block text-center mt-1">
                <FavIcon className="manage-icon" />
              </div>
              <div className="text-center link-box">Favorite</div>
            </a>
          </div>
          <div className="list-box disable">
            {/* <a href="/user/customVideo" className="sidebar-link disable"> */}
            <div className="icon d-block text-center mt-1 disable">
              <CustomizeVideo className="manage-icon disable" />
            </div>
            <div className="text-center link-box">MyVideos</div>
            {/* </a> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserSideBar;
