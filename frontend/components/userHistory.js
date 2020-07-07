import React from "react";
import { Card } from "react-bootstrap";
import _Pagination from "./pagination";

const cardFocusStyle = {
  width: "20%",
  height: "45%",
  overflow: "scroll",
  border: "solid red"
};
const cardStyle = {
  width: "20%",
  height: "45%",
  overflow: "scroll"
};

const _History = props => (
  <div>
    <div
      className="d-flex flex-wrap my-3 py-0 justify-content-center"
      style={{ height: `85%` }}
    >
      {props.historyItems.map(item => (
        <Card
          className="ml-0 mr-3 my-3"
          style={false ? cardFocusStyle : cardStyle}
          //   onClick={this.props.toggleCard}
        >
          <video
            src={item.video}
            controls
            className="card-video"
            style={{ height: "60%" }}
          />
          <Card.Body style={{ padding: "0px", paddingTop: "20px" }}>
            <div className="container">
              <h5 className="ellipsis">
                <b>{item.title}</b>
              </h5>
              <p className="card-text">
                {item.pub}&emsp;{item.time}
              </p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
    <div className="d-flex justify-content-center ">
      <_Pagination activeNum={1} totalNum={1} />
    </div>
  </div>
);

export default _History;
