import React, { Component } from "react";
import "../static/channelList.css";
import CommentInputBar from "./comment_input_bar";
import CommentIcon from "-!svg-react-loader!../images/comments.svg";
import LikeIcon from "-!svg-react-loader!../images/like.svg";
import DislikeIcon from "-!svg-react-loader!../images/dislike.svg";

const avatar =
  "https://lh3.googleusercontent.com/-EGvCIP0eeC4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdXj1IFcup7tPyW9VNdeNFdE5VePg/s88/photo.jpg";

export class CommentsBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [], avatar: avatar, responseActive: [] };
    this.setResponseBar = this.setResponseBar.bind(this);
  }

  setResponseBar = index => {
    console.log(index);
    var nextResponseActive = this.state.responseActive;
    for (var i = 0; i < this.state.responseActive.length; i++) {
      if (i == index) {
        nextResponseActive[index] = !this.state.responseActive[index];
      }
    }
    this.setState({
      responseActive: nextResponseActive
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments !== this.props.comments) {
      var nextResponseActive = new Array();
      for (var i = 0; i < nextProps.comments.length; i++) {
        nextResponseActive.push(false);
      }
      this.setState({
        comments: nextProps.comments,
        responseActive: nextResponseActive
      });
      console.log(nextResponseActive.length);
    }
  }

  render() {
    const { comments, avatar, responseActive } = this.state;
    return (
      <React.Fragment>
        <div className="comment-box mb-4 mt-2">
          <CommentIcon className="comment-icon" />
          Comments:
          <CommentInputBar avatar={avatar} />
          {comments.map((comment, index) => (
            <React.Fragment>
              <div className="d-flex mt-4">
                <div className="mr-3">
                  <img className="pc" src={comment.avatar} />
                </div>
                <div className="">
                  <div>
                    {comment.name}
                    <span className="ml-3 comment-created">
                      {comment.created}
                    </span>
                  </div>
                  <div>{comment.content}</div>
                </div>
              </div>
              <div className="like-box">
                <LikeIcon className="like-icon" />
                <span className="like-count">{comment.agreeCount}</span>
                <DislikeIcon className="dislike-icon" />
                <span className="like-count">{comment.disAgreeCount}</span>
                <span
                  className="responseBtn"
                  onClick={() => this.setResponseBar(index)}
                >
                  回覆
                </span>
                {responseActive[index] ? (
                  <CommentInputBar avatar={avatar} />
                ) : (
                  <></>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CommentsBox;
