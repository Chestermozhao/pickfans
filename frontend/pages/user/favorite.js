import React, { Component } from "react";
import "../../static/subscribe.css";
import cookie from "react-cookies";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import UserSideBar from "../../components/userSidebar";
import UserFavorite from "../../components/userFav";
import Footer from "../../components/footer";

const clearBtnStyle = {
  backgroundColor: "white",
  borderRadius: "10px"
};
const favItems = [
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  },
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  },
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  },
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  },
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  },
  {
    image:
      "https://yt3.ggpht.com/a/AATXAJx3vdB6X5O1cK9ZlBmX3IVcuE0oHT8-l2w02k3R=s288-c-k-c0xffffffff-no-rj-mo",
    name: "卡提諾狂新聞",
    subCount: "92.5萬",
    videoCount: 417
  }
];

export class Favortie extends Component {
  constructor() {
    super();
    this.state = { favItems: [] };
  }

  componentDidMount() {
    this.setState({ favItems: favItems });
  }

  render() {
    const { favItems } = this.state;
    return (
      <React.Fragment>
        <Layout title="User subscribe" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <UserSideBar />
          <div className="ml-2" style={{ width: "2em" }}>
            <div style={{ position: "relative", top: "40%" }}>
              <button className="mt-2" style={clearBtnStyle}>
                ChooseAll
              </button>
              <button className="mt-2" style={clearBtnStyle}>
                Remove
              </button>
            </div>
          </div>
          <UserFavorite subItems={favItems} />
        </div>

        <Footer isFixed={true} />
      </React.Fragment>
    );
  }
}

export default Favortie;
