import React, { Component } from "react";
import "../static/index.css";
import axios from "axios";

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completeResult: [],
      barValue: "",
      isMainPage: props.isMainPage
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateBarValue = this.updateBarValue.bind(this);
    this.refreshCompleteContent = this.refreshCompleteContent.bind(this);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async refreshCompleteContent(e) {
    await this.sleep(100);
    this.setState({ completeResult: [] });
  }

  updateBarValue(e) {
    var choosed_item = e.target.innerHTML;
    this.setState({ completeResult: [], barValue: choosed_item });
  }

  handleChange(e) {
    var req_word = e.target.value;
    if (req_word) {
      axios
        .post("http://localhost:9200/wiki_prefix_search/_search/?size=5", {
          /* importance is set for phrase or word(no space in word):
               asc means word priority
               desc means phrase priority
            */
          sort: [{ importance: "asc" }],
          query: {
            prefix: {
              "word.keyword": req_word
            }
          }
        })
        .then(response => {
          let respList = response.data.hits.hits;
          this.setState({
            completeResult: respList,
            barValue: req_word
          });
          console.log(this.state.completeResult);
        })
        .catch(error => console.log(error.message));
    } else {
      this.setState({ completeResult: [], barValue: req_word });
    }
  }
  render() {
    const { completeResult, barValue, isMainPage } = this.state;
    return (
      <React.Fragment>
        <div className={!isMainPage ? "input-inline-center" : "input-center"}>
          <input
            type="text"
            className="input-style"
            value={barValue}
            onChange={this.handleChange}
            onBlur={this.refreshCompleteContent}
          />
          <button className="button">Search</button>
        </div>
        <div
          className={
            !isMainPage ? "inline-search-result-box" : "search-result-box"
          }
        >
          {completeResult.map((wordItem, index) => {
            return (
              <div key={index}>
                <p className="search-result-item" onClick={this.updateBarValue}>
                  {wordItem._source.word}
                </p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
