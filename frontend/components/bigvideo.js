import React, { Component } from "react";
import "../static/video.css";
import { Player, ControlBar } from "video-react";
import SubIcon from "-!svg-react-loader!../images/subscribe.svg";

export class BigVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { currentVideo: { youtuber: {} } };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentVideo !== this.props.currentVideo) {
      this.setState({ currentVideo: nextProps.currentVideo });
    }
  }

  render() {
    const { currentVideo } = this.state;
    return (
      <React.Fragment>
        <div className="big-video-layout">
          <Player
            ref={player => {
              this.player = player;
            }}
            controls={false}
            // autoPlay
          >
            <source src={currentVideo.video} type="video/mp4" />
            <ControlBar autoHide={false} />
          </Player>
          <div className="main-title">{currentVideo.title}</div>
          <div>{currentVideo.viewsCount} views</div>
          <hr />
          <div className="d-flex">
            <div className="col-lg-1">
              <img
                className="big-pc"
                src="https://yt3.ggpht.com/a/AGF-l78WRSVDCTysZpO8vGdwdrvpm6z-AiXKL-I4Gw=s48-c-k-c0xffffffff-no-rj-mo"
              ></img>
            </div>
            <div className="col-lg-9">
              <div>{currentVideo.youtuber.name}</div>
              <div>{currentVideo.youtuber.subCount}</div>
              <div>{currentVideo.youtuber.desc}</div>
            </div>
            <div>
              <button className="sub-btn">
                <SubIcon className="sub-icon mr-2" />
                subscribe
              </button>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default BigVideo;
