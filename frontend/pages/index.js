import React, { Component } from "react";
import "../static/index.css";
import _Sidebar from "../components/sidebar";
import PickerIcon from "-!svg-react-loader!../images/picker_icon.svg";
import TitlePage from "-!svg-react-loader!../images/title_page.svg";
import SearchBar from "../components/searchbar";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export class Index extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Layout title="Fans Picker" />
        <NavBar isMainPage={true} />
        <_Sidebar />
        <p className="title-center mt-5">
          <PickerIcon className="pick-icon" />
          FansPicker
        </p>

        <SearchBar isMainPage={true} />
        <TitlePage className="center" />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
