import React, { Component } from "react";
import pageNotFound from "../../asset/pagenull.jpg";
import {Link} from 'react-router-dom';
class PageNotFound extends Component {
  render() {
    return (
      <div className="page">
        <div className="img">
          <img src={pageNotFound} alt="PageNotFound" />
        </div>
        <div className="button">
            <Link to="/">
                <button>Home Page</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
