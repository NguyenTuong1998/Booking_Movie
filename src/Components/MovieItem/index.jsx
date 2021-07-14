import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class MovieItem extends Component {
    render() {
        const { hinhAnh, tenPhim, trailer, maPhim } = this.props.data;
        return (
          <div className="item">
            <div className="img">
              <img src={hinhAnh}/>
              <a
                href={trailer}
                data-lity
              >
                <div className="video">
                  <div className="img-play">
                    <img src="./Images/play-video.png" alt="playbtn" />
                  </div>
                </div>
              </a>
            </div>
            <div className="info">
              <span className="content">{tenPhim}</span>
              <Link to={`/detail/${maPhim}`}>
                <span className="btn-hover">MUA VÉ</span>
              </Link>
            </div>
          </div>
        );
    }
}

export default connect() (MovieItem);