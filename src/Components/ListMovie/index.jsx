import React, { Component } from "react";
import { connect } from "react-redux";
import MovieItem from "../MovieItem";
import Slider from "react-slick";

class ListMovie extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 2,
      className: "slides",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,          
          },
        },
      ],
    };
    return (
      <section className="movielist" id="showtimes">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#now">
                Đang chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#coming">
                Sắp chiếu
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="now">
              <Slider {...settings}>
                {this.props.movieList.map((item) => {
                  return <MovieItem data={item} />;
                })}
              </Slider>
            </div>
            <div className="tab-pane fade show" id="coming">
              <Slider {...settings}>
                {this.props.movieListComMing.map((item) => {
                  return <MovieItem data={item} />;
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    movieListComMing: state.movie.movieListComMing,
  };
};

export default connect(mapStateToProps)(ListMovie);
