import React, { Component } from "react";
import "../static/index.css";
import "../static/hotlist.css";
import Layout from "../components/layout";
import _Sidebar from "../components/sidebar";
import HotTitle from "../components/hottitle";
import VideoItemList from "../components/videoItemList";
import HotChannels from "../components/hotChannels";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const hotchannels = [
  {
    big_pc:
      "https://yt3.ggpht.com/a/AGF-l78lX3SRZNek_OuC3H8JNl9p5-FMV9QuFbhTAg=s176-c-k-c0x00ffffff-no-rj-mo",
    name: "見習網美小吳",
    subCount: "57.2萬",
    videoCount: "175",
    description:
      "大家好我是小吳，謝謝你來這個頻道。 記得要訂閱開鈴鐺才能第一時間看最新影片喔！ ▴合作邀約: fongwuwu@gmail.com ..."
  }
];

const hotitems = [
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
    this.state = { hotitems: [], hotchannels: [] };
  }

  componentDidMount() {
    this.setState({
      hotitems: hotitems,
      hotchannels: hotchannels
    });
  }

  render() {
    const { hotitems, hotchannels } = this.state;
    return (
      <React.Fragment>
        <Layout title="Fans Picker Hotlist" />
        <NavBar isMainPage={false} />
        <div className="d-flex">
          <_Sidebar className="col-lg-2" />
          <div className="hotvideo-box col-lg-10">
            <HotTitle iconType={"hotList"} title={"HotChannels"} />
            <HotChannels hotchannels={hotchannels} />
            <hr className="my-2 sep-line mr-5" />
            <HotTitle iconType={"hotList"} title={"HotVideos"} />
            <VideoItemList hotitems={hotitems} />
            <hr className="mt-2 mb-5 sep-line mr-5" />
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Hotlist;
