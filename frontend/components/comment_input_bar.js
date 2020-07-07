import React, { Component } from "react";
import "../static/comment.css";

export class commentInputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { commentContent: "發表您的評論", state: false };

    this.initInputContent = this.initInputContent.bind(this);
    this.backToInitial = this.backToInitial.bind(this);
    this.deliverComment = this.deliverComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var nextCommentContent = e.target.value;
    this.setState({ commentContent: nextCommentContent });
    console.log(nextCommentContent);
  }

  deliverComment = () => {
    console.log("留言成功");
    // 重刷頁面 reload page
  };

  backToInitial = () => {
    this.setState({
      state: false,
      commentContent: "發表您的評論"
    });
  };

  initInputContent = () => {
    this.setState({
      state: true,
      commentContent: ""
    });
  };

  render() {
    const { commentContent, state } = this.state;
    console.log(commentContent);
    return (
      <React.Fragment>
        <div className="inputBox d-flex">
          <img className="comment-avatar" src={this.props.avatar} />

          <input
            className="inputContent ml-3 bottom-line"
            contenteditable="true"
            onClick={() => this.initInputContent()}
            onChange={this.handleChange}
            value={commentContent}
          />
          {/* {commentContent}
          </div> */}
        </div>

        {state ? (
          <div className="btns">
            <button onClick={() => this.backToInitial()}>取消</button>
            <button
              onClick={() => {
                this.deliverComment();
              }}
              className={
                commentContent == "發表您的評論"
                  ? "blueBackground"
                  : "plainBackground"
              }
            >
              評論
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </React.Fragment>
    );
  }
}

export default commentInputBar;
