import React, { Component } from "react";
import { connect } from "react-redux";
import CinemaDetail from "../../../Components/CinemaDetail";
import Comment from "../../../Components/Comment";
import {
  fetchMovieDetail,
  fetchMovieDetailShowTime,
} from "../../../redux/actions/movie";
import Loading from "../../Loading";
import * as scroll from "react-scroll";

class MovieDetail extends Component {
  state={
    isLoading:true,
  }
  renderLogo = () => {
    console.log(this.props.movieDetailShowTime);

    return this.props.movieDetailShowTime.heThongRapChieu?.map(
      (item, index) => {
        return (
          <a
            class={index === 0 ? "nav-link show active" : "nav-link show"}
            id="v-pills-home-tab"
            data-toggle="pill"
            href={`#${item.maHeThongRap}`}
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            <img src={item.logo} alt="#" />
          </a>
        );
      }
    );
  };

  renderCinema = () => {
    return this.props.movieDetailShowTime.heThongRapChieu?.map(
      (item, index) => {
        console.log(item);
        return (
          <div
            class={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
            id={item.maHeThongRap}
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <div className="rap">
              <CinemaDetail data={item}/>
            </div>
          </div>
        );
      }
    );
  };
  render() {
    const { hinhAnh, tenPhim, trailer, moTa, ngayKhoiChieu } =
      this.props.movieDetails;

    let dateTime = ngayKhoiChieu;
    const day = new Date(dateTime);
    const month = day.getMonth() + 1;
    if(this.state.isLoading) {
      return <Loading/>
    }
    return (
      <div className="img-hinhanh container">
        {/* <div
          className="detail-top row"
          // style={{ backgroundImage: `url(${this.props.movieDetails.hinhAnh})` }}
        > */}
        <div className="row">
          <div className="background-img col-lg-3">
            <img src={hinhAnh} alt="img" />
          </div>
          <div className="nameMovie col-lg-9">
            {/* <h1>{this.props.movieDetails.tenPhim}</h1> */}
            <div className="row">
              <h3>C13</h3>
              <h2 className="name">{tenPhim}</h2>
            </div>
            <div className="row">
              <p>
                Ngày khởi chiếu:{" "}
                {day.getDate() + "/" + month + "/" + day.getFullYear()}{" "}
              </p>
            </div>
            <div className="row">
              <p>Thời lượng: 120 phút</p>
            </div>
            <div className="row">
              <p>
                Mô tả: <span>{moTa}</span>{" "}
              </p>
            </div>
            {/* <div className="row thoiLuong">
              <h1>{this.props.movieDetails.lichChieu.thoiLuong}</h1>
            </div> */}
            <div className="row button-detail">
              <div className="trailer">
                <a href={trailer} data-lity>
                  <button>Xem Trailer</button>
                </a>
              </div>
              <div className="booking">
                <scroll.Link
                  style={{ cursor: "pointer" }}
                  to="myTabContent"
                  offset={-160}
                  smooth={true}
                  duration={1000}
                  
                >
                  <button>Mua Vé</button>
                </scroll.Link>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-bottom">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#now">
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#coming">
                Đánh Giá
              </a>
            </li>
          </ul>
          <div className="tab-bottom">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="now">
                <div class="row">
                  <div class="col-3">
                    <div
                      class="nav flex-column nav-pills logo"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      {this.renderLogo()}
                    </div>
                  </div>
                  <div class="col-9">
                    <div class="tab-content" id="v-pills-tabContent">
                      {this.renderCinema()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show" id="coming">
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchMovieDetail(id));
    this.props.dispatch(fetchMovieDetailShowTime(id));
    setTimeout(() => {
      this.setState({isLoading:false})
    }, 3000);
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetails: state.movie.movieDetail,
    movieDetailShowTime: state.movie.movieDetailShowTime,
  };
};

export default connect(mapStateToProps)(MovieDetail);
