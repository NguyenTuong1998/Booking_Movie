import React, { Component } from "react";
import MobileImg from "../../asset/mobile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../../asset/slide1.jpg";
import Slider2 from "../../asset/slide2.jpg";
import Slider3 from "../../asset/slide3.jpg";
import Slider4 from "../../asset/slide8.jpg";
import Slider5 from "../../asset/slide10.jpg";
import Slider6 from "../../asset/slide11.jpg";
import Slider7 from "../../asset/slide12.jpg";
import Slider8 from "../../asset/slide13.jpg";
import Slider9 from "../../asset/slide14.jpg";
import Slider10 from "../../asset/slide15.jpg";
import Slider11 from "../../asset/slide16.jpg";
import Roll from "react-reveal/Roll";

class Application extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div id="ungdung" className="application">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 appli-left">
              <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
              <p>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn">App miễn phí - Tải về ngay!</button>
              <span>
                TIX có hai phiên bản <a href="#!">IOS</a> và{" "}
                <a href="#!">Android</a>{" "}
              </span>
            </div>
            <Roll>
              <div className="col-lg-6 appli-right">
                <div className="app  position-relative">
                  <div className="mobile">
                    <img src={MobileImg} alt="Mobile" />
                  </div>
                  <Slider className="slider" {...settings}>
                    <div className="item">
                      <img src={Slider1} alt="slider1" />
                    </div>
                    <div className="item">
                      <img src={Slider2} alt="slider2" />
                    </div>
                    <div className="item">
                      <img src={Slider3} alt="slider3" />
                    </div>
                    <div className="item">
                      <img src={Slider4} alt="slider4" />
                    </div>
                    <div className="item">
                      <img src={Slider5} alt="slider5" />
                    </div>
                    <div className="item">
                      <img src={Slider6} alt="slider6" />
                    </div>
                    <div className="item">
                      <img src={Slider7} alt="slider7" />
                    </div>
                    <div className="item">
                      <img src={Slider8} alt="slider8" />
                    </div>
                    <div className="item">
                      <img src={Slider9} alt="slider9" />
                    </div>
                    <div className="item">
                      <img src={Slider10} alt="slider10" />
                    </div>
                    <div className="item">
                      <img src={Slider11} alt="slider11" />
                    </div>
                  </Slider>
                </div>
              </div>
            </Roll>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
