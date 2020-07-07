import HotIcon from "-!svg-react-loader!../images/hot_side.svg";
import HistoryIcon from "-!svg-react-loader!../images/history_side.svg";

const IconObj = {
  hotList: <HotIcon className="hot-icon" />,
  history: <HistoryIcon className="hot-icon" />
};

const HotTitle = props => (
  <>
    <p className="title-content">
      {IconObj[props.iconType]} {props.title}
    </p>
  </>
);

export default HotTitle;
