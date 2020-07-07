import React, { Component } from "react";
import { Player, ControlBar } from "video-react";
import "../static/channelList.css";
import _Sidebar from "../components/sidebar";
import BigVideo from "../components/bigvideo";
import CommentsBox from "../components/commentsbox";
import VideoList from "../components/videolist";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const videoList = [
  {
    video: "../static/demo1.mp4",
    title: "demo1",
    youtuber: "3BlueBrown",
    viewsCount: "354萬",
    index: 1
  },
  {
    video: "../static/demo1.mp4",
    title: "demo1",
    youtuber: "3BlueBrown",
    viewsCount: "354萬",
    index: 2
  },
  {
    video: "../static/demo1.mp4",
    title: "demo1",
    youtuber: "3BlueBrown",
    viewsCount: "354萬",
    index: 3
  },
  {
    video: "../static/demo1.mp4",
    title: "demo1",
    youtuber: "3BlueBrown",
    viewsCount: "354萬",
    index: 4
  }
];

const _currentVideo = {
  video: "../static/demo1.mp4",
  index: 10,
  title: "current vedio",
  youtuber: {
    name: "3BlueBrown",
    subCount: "20.5萬",
    desc:
      "The formula is no mere coincidence.\
      Store: http://3b1b.co/store\
      Home page: https://www.3blue1brown.com"
  },
  viewsCount: "354萬"
};

const _comments = [
  {
    name: "Chester",
    created: "7 months ago",
    content: "I like this video~",
    agreeCount: 5,
    disAgreeCount: 0,
    avatar:
      "https://yt3.ggpht.com/a/AGF-l7-qILhXeXVAiZG-f3HE_IahumVebqfJe2hXhA=s48-c-k-c0xffffffff-no-rj-mo"
  },
  {
    name: "Lisa",
    created: "8 months ago",
    content: "I dislike this video~",
    agreeCount: 10,
    disAgreeCount: 20,
    avatar:
      "https://yt3.ggpht.com/a/AGF-l78M16S92OkHbYIMnBOpvMNzvnnW4aRdesL_xA=s48-c-k-c0xffffffff-no-rj-mo"
  }
];

export class channelList extends Component {
  constructor() {
    super();
    this.state = {
      channelName: "",
      videoList: [],
      currentVideo: {},
      comments: []
    };
  }

  componentDidMount() {
    var _channelName = decodeURIComponent(
      window.location.search.match("q=.+|youtuber=.+")
    );

    var _channelName = _channelName.split("=")[1];
    this.setState({
      channelName: _channelName,
      videoList: videoList,
      currentVideo: _currentVideo,
      comments: _comments
    });
  }

  render() {
    const { channelName, videoList, currentVideo, comments } = this.state;

    return (
      <React.Fragment>
        <Layout title="Chester's Channel List" />

        <NavBar />

        <_Sidebar />
        <p className="title-center mt-5">
          <img
            className="big-pc mr-3"
            src="https://yt3.ggpht.com/a/AGF-l78WRSVDCTysZpO8vGdwdrvpm6z-AiXKL-I4Gw=s48-c-k-c0xffffffff-no-rj-mo"
          />
          {channelName}'s Channel List
        </p>

        <div className="mt-5 center d-flex">
          <div className="col-lg-8 mr-1">
            <BigVideo currentVideo={currentVideo} />
          </div>
          <div className="video-list-box">
            <VideoList videoList={videoList} />
          </div>
        </div>
        <CommentsBox comments={comments} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default channelList;
