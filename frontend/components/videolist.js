import React, { Component } from "react";
import "../static/video.css";
import { Player, ControlBar } from "video-react";
import PinIcon from "-!svg-react-loader!../images/pin.svg";

export class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = { videoList: [] };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videoList !== this.props.videoList) {
      this.setState({ videoList: nextProps.videoList });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="videos-list-border">
          <p className="video-list-title">Videos List</p>
          {this.state.videoList.map((item, index) => (
            <div key={index} className="mt-3 d-flex">
              <div className="video-list-sm">
                <Player>
                  <source src={item.video} type="video/mp4" />
                  <ControlBar autoHide={true} />
                </Player>
              </div>

              <div className="ml-4 mt-2 video-list-info">
                <a
                  href={
                    "/channelList?videoId=" +
                    item.index +
                    "&youtuber=" +
                    item.youtuber
                  }
                  className="video-list-link"
                >
                  <p>Title: {item.title}</p>
                  <p>Pub: {item.youtuber}</p>
                  <p>Views: {item.viewsCount}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default VideoList;
