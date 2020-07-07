import React, { Component } from "react";
import "../static/index.css";
import "../static/hotlist.css";
import Layout from "../components/layout";
import _Sidebar from "../components/sidebar";
import HotTitle from "../components/hottitle";
import VideoItemList from "../components/videoItemList";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const historyitems = [
  {
    videoPath: "../static/demo1.mp4",
    videoTitle: "【小吳 】憑什麼加入見習網美小吳？網路霸凌事件回覆及聲明Dcard",
    videoPub: "見習網美小吳",
    videoViews: "38萬",
    videoPubTime: "2019-12-31",
    videoDesc:
      "關於Dcard上的討論聲明這支影片剪得很趕.... 但希望大家都能重視網路留言的影響力我們不會讓任何人退出可以1.5倍速看事件始末， ..."
  }
];

export class Hotlist extends Component {
  constructor() {
    super();
    this.state = { historyitems: [] };
  }

  componentDidMount() {
    this.setState({
      historyitems: historyitems
    });
  }

  render() {
    const { historyitems } = this.state;
    return (
      <React.Fragment>
        <Layout title="Fans Picker Hotlist" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <_Sidebar className="col-lg-2" />
          <div className="hotvideo-box col-lg-10">
            <HotTitle iconType={"history"} title={"HistoryVideo"} />
            <VideoItemList hotitems={historyitems} />
            <hr className="mt-2 mb-5 sep-line mr-5" />
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Hotlist;
