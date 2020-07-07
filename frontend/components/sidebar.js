import React, { Component } from "react";
import "../static/index.css";
import PinIcon from "-!svg-react-loader!../images/pin.svg";
import HotIcon from "-!svg-react-loader!../images/hot_side.svg";
import HistoryIcon from "-!svg-react-loader!../images/history_side.svg";
import SubIcon from "-!svg-react-loader!../images/subscribe_side.svg";
import FavIcon from "-!svg-react-loader!../images/fav_side.svg";
import Link from "next/link";

const subscribeList = ["見習網美小吳", "阿滴英文"];
const favortieList = ["狠愛演"];

export class _Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      subList: [],
      showSub: false,
      showSidebar: true,
      showFav: false
    };
    this.showSubList = this.showSubList.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.showFavList = this.showFavList.bind(this);
  }

  showFavList() {
    this.setState({ showFav: !this.state.showFav });
  }

  showSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }
  showSubList() {
    this.setState({ showSub: !this.state.showSub });
  }

  componentDidMount() {
    this.setState({
      subList: subscribeList,
      favList: favortieList
    });
  }

  render() {
    const { subList, favList, showSidebar, showFav, showSub } = this.state;
    return (
      <React.Fragment>
        <PinIcon className="pin-icon" onClick={() => this.showSidebar()} />
        {showSidebar ? (
          <div className="sidebar">
            <a className="side-link" href="/hotlist">
              <div className="side-item">
                <HotIcon className="side-icons" />
                Hotlist
              </div>
            </a>
            <a className="side-link" href="/history">
              <div className="side-item">
                <HistoryIcon className="side-icons" />
                History
              </div>
            </a>
            <div className="side-item" onClick={() => this.showSubList()}>
              <SubIcon className="side-icons" />
              Subscribed
            </div>
            {showSub
              ? subList.map((topsub, index) => (
                  <div key={index} className="sub-item">
                    <a className="side-link" href={"/channelList?q=" + topsub}>
                      {topsub}
                    </a>
                  </div>
                ))
              : ""}

            <div className="side-item" onClick={() => this.showFavList()}>
              <FavIcon className="side-icons" />
              Favortie
            </div>
            {showFav
              ? favList.map((topfav, index) => (
                  <div key={index} className="sub-item">
                    <a className="side-link" href={"/channelList?q=" + topfav}>
                      {topfav}
                    </a>
                  </div>
                ))
              : ""}
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default _Sidebar;
