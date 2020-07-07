import React from "react";
import { Card } from "react-bootstrap";
import _Pagination from "./pagination";

const cardFocusStyle = {
  width: "20%",
  height: "42%",
  overflow: "scroll",
  border: "solid red"
};
const cardStyle = {
  width: "20%",
  height: "42%",
  overflow: "scroll"
};

const UserSubscribe = props => (
  <div>
    <div
      className="d-flex flex-wrap my-3 py-0  justify-content-center"
      style={{ width: "85%", height: "85.5%", marginLeft: "7.5%" }}
    >
      {props.subItems.map(item => (
        <Card
          className="ml-0 mx-3 my-3"
          style={false ? cardFocusStyle : cardStyle}
          //   onClick={this.props.toggleCard}
        >
          <img src={item.image} controls className="card-image" />
          <Card.Body style={{ padding: "0px", paddingTop: "3px" }}>
            <div className="container">
              <h5 className="ellipsis">
                <b>{item.name}</b>
              </h5>
              <div className="d-flex justify-content-between">
                <p className="card-text">{item.subCount}</p>
                <div
                  className="pr-1"
                  onClick={() => {
                    alert("Favortite");
                  }}
                >
                  &#9734;
                </div>
              </div>
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

export default UserSubscribe;
