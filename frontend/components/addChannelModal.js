import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    this.setState({
      show: this.props.show
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show !== this.props.show) {
      this.setState({ show: nextProps.show });
    }
  }

  closeModal = () => {
    this.props.closeModal();
  };

  render() {
    const { show } = this.state;
    const modalStyle = {
      maxWidth: "659px"
    };
    return (
      <div
        className={"modal " + (show ? "d-block" : "fade")}
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog  modal-dialog-centered"
          role="document"
          style={modalStyle}
        >
          <div className="modal-content border-0">
            <form>
              <div style={{ marginLeft: "35px", marginTop: "18px" }}>
                <p className="modal_title">
                  Subscribe Channel by <b>youtube url</b>
                </p>
                <p>
                  <input
                    type="url"
                    name="addChannel"
                    className="add-form-input"
                    required
                  />
                </p>
              </div>
              <div className="modal-footer border-top-0 justify-content-center">
                <div className="cancel-btn-box w-100">
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="cancel-btn mx-3"
                      data-dismiss="modal"
                      onClick={this.closeModal}
                    >
                      Cancel
                    </button>
                    <input
                      type="submit"
                      value="Subscribe"
                      className="add-form-btn"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
