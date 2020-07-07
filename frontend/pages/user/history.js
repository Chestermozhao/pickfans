import React, { Component } from "react";
import "../../static/history.css";
import cookie from "react-cookies";
import Layout from "../../components/layout";
import NavBar from "../../components/navbar";
import UserSideBar from "../../components/userSidebar";
import _History from "../../components/userHistory";
import Footer from "../../components/footer";

const clearBtnStyle = {
  backgroundColor: "white",
  borderRadius: "10px"
};
const historyItems = [
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  },
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  },
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  },
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  },
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  },
  {
    video: "../static/demo1.mp4",
    pub: "見習網美小吳",
    time: "2020-01-04",
    title: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard"
  }
];

export class History extends Component {
  constructor() {
    super();
    this.state = { historyItems: [] };
  }

  componentDidMount() {
    this.setState({ historyItems: historyItems });
  }

  render() {
    const { historyItems } = this.state;
    return (
      <React.Fragment>
        <Layout title="User History" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <UserSideBar />
          <div className="ml-2" style={{ width: "2em" }}>
            <div style={{ position: "relative", top: "40%" }}>
              <button style={clearBtnStyle}>ChooseAll</button>
              <button className="mt-2" style={clearBtnStyle}>
                Remove
              </button>
            </div>
          </div>

          <_History historyItems={historyItems} />
        </div>

        <Footer isFixed={true} />
      </React.Fragment>
    );
  }
}

export default History;
