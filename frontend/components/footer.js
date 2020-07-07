import React, { Component } from "react";
import "../static/footer.css";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { isFixed: props.isFixed };
  }
  render() {
    const { isFixed } = this.state;
    return (
      <div className={isFixed ? "footer-box" : ""}>
        {isFixed ? (
          ""
        ) : (
          <div className="d-flex justify-content-center mb-2">
            <i className="fab fa-facebook-square" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
          </div>
        )}

        <div className="col-lg-6 text-center mx-auto">
          © 2020 FansPicker Copyrights
        </div>
      </div>
    );
  }
}

export default Footer;
