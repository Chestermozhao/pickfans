import React, { Component } from "react";
import "../../static/subscribe.css";
import cookie from "react-cookies";
import Modal from "../../components/addChannelModal";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import UserSideBar from "../../components/userSidebar";
import UserSubscribe from "../../components/userSub";
import Footer from "../../components/footer";

const clearBtnStyle = {
  backgroundColor: "white",
  borderRadius: "10px"
};
const subItems = [
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

export class Subscribe extends Component {
  constructor() {
    super();
    this.state = { subItems: [], modalShow: false };

    this.showModel = this.showModel.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ modalShow: false });
  }

  showModel() {
    this.setState({ modalShow: !this.state.modalShow });
  }

  componentDidMount() {
    this.setState({ subItems: subItems });
  }

  render() {
    const { modalShow, subItems } = this.state;
    return (
      <React.Fragment>
        <Layout title="User subscribe" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <UserSideBar />
          <div className="ml-2" style={{ width: "2em" }}>
            <div style={{ position: "relative", top: "40%" }}>
              <button style={clearBtnStyle} onClick={() => this.showModel()}>
                Add
              </button>
              <button className="mt-2" style={clearBtnStyle}>
                ChooseAll
              </button>
              <button className="mt-2" style={clearBtnStyle}>
                Remove
              </button>
            </div>
          </div>
          <UserSubscribe subItems={subItems} />
        </div>
        <Modal show={modalShow} closeModal={this.closeModal} />
        {modalShow ? <div class="mask"></div> : ""}
        <Footer isFixed={true} />
      </React.Fragment>
    );
  }
}

export default Subscribe;
