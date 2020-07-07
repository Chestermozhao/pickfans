import PickerIcon from "-!svg-react-loader!../images/picker_icon.svg";
import "../static/index.css";

const Logo = props => (
  <>
    <a className="logo-link" href="/">
      <div className="nav-bar-logo">
        <PickerIcon className="pick-icon" />
        FansPicker
      </div>
    </a>
  </>
);

export default Logo;
