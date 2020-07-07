import React from "react";
import { Card } from "react-bootstrap";

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

const UserFavorite = props => (
  <div
    className="d-flex flex-wrap my-3 py-0  justify-content-center"
    style={{ width: "85%", height: "85.5%", marginLeft: "7.5%" }}
  >
    {props.subItems.map(item => (
      <Card
        className="ml-0 mx-3 my-4"
        style={false ? cardFocusStyle : cardStyle}
        //   onClick={this.props.toggleCard}
      >
        <img src={item.image} controls className="card-image" />
        <Card.Body style={{ padding: "0px", paddingTop: "3px" }}>
          <div className="container">
            <h5 className="ellipsis">
              <b>{item.name}</b>
            </h5>

            <p className="card-text">{item.subCount}</p>
          </div>
        </Card.Body>
      </Card>
    ))}
  </div>
);

export default UserFavorite;
