import { Player, ControlBar } from "video-react";

const VideoItemList = props => (
  <>
    {props.hotitems.map((item, index) => (
      <div className="d-flex my-3">
        <div className="col-lg-3">
          <Player>
            <source src={item.videoPath} type="video/mp4" />
            <ControlBar autoHide={true} />
          </Player>
        </div>
        <div className="video-info-box mx-0 px-0">
          <p className="hotitems-title mx-0 px-0 my-0">{item.videoTitle}</p>
          <p className="mx-0 my-0 ">
            <span className="hotitems-pub">{item.videoPub}</span>
            <span>&emsp;</span>
            <span className="hotitems-pub">{item.videoViews}次觀看</span>
            <span>&emsp;</span>
            <span className="hotitems-pub">{item.videoPubTime}</span>
          </p>
          <p className="hotitems-desc mt-2">{item.videoDesc}</p>
        </div>
      </div>
    ))}
  </>
);

export default VideoItemList;
