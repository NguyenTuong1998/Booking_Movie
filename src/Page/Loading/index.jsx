import React, { Component } from "react";
import loading from "../../asset/loading8.gif";

class Loading extends Component {
  render() {
    return <div className="page__loading">
      <img src={loading} alt="loading" />       
    </div>;
  }
}

export default Loading;
