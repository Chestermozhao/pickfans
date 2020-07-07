import SubIcon from "-!svg-react-loader!../images/subscribe.svg";

const HotChannels = props => (
  <>
    {props.hotchannels.map((item, index) => (
      <div className="d-flex my-3">
        <div className="col-lg-3 channel-img-box">
          <img className="channel-img" src={item.big_pc} />
        </div>
        <div className="channel-info-box mx-0 px-0">
          <p className="hotitems-title mx-0 px-0 my-0">{item.name}</p>
          <p className="mx-0 my-0 ">
            <span className="hotitems-pub">{item.subCount}位訂閱者</span>
            <span>&emsp;</span>
            <span className="hotitems-pub">{item.videoCount}部影片</span>
          </p>
          <p className="hotitems-desc mt-2">{item.description}</p>
        </div>
        <div className="col-lg-2">
          <button className="hot-sub-btn-box">
            {/* <SubIcon className="hot-sub-icon" /> */}
            Subscribe
          </button>
        </div>
      </div>
    ))}
  </>
);

export default HotChannels;
