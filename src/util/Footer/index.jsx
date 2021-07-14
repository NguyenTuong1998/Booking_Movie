import React, { Component } from "react";
import icon from "../../asset/Footer/icon_0.png";
import icon1 from "../../asset/Footer/icon_1.png";
import icon2 from "../../asset/Footer/icon_2.png";
import icon3 from "../../asset/Footer/icon_3.png";
import icon4 from "../../asset/Footer/icon_4.png";
import icon5 from "../../asset/Footer/icon_5.png";
import icon6 from "../../asset/Footer/icon_6.png";
import icon7 from "../../asset/Footer/icon_7.png";
import icon8 from "../../asset/Footer/success.png";
import icon9 from "../../asset/Footer/zion.png";

import { animateScroll as scroll } from "react-scroll";
class Footer extends Component {
  render() {
    return (
      <footer>
        <section class="footer-top pt-3">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 tx">
                <h1>EdricNguyen</h1>
                <div class="item">
                  <div class="col">
                    <a href="">FAQ</a>
                    <a href="">Brand Guidelines</a>
                  </div>
                  <div class="col">
                    <a href="">Thỏa thuận sử dụng</a>
                    <a href="">chính sách bảo mật</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <h1>ĐỐI TÁC</h1>
                <div class="row">
                  <div class="item-logo">
                    <img src={icon} />
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                    <img src={icon4} />
                  </div>
                </div>
                <div class="row">
                  <div class="item-logo">
                    <img src={icon5} />
                    <img src={icon6} />
                    <img src={icon7} />
                    <img src={icon2} />
                    <img src={icon4} />
                  </div>
                </div>
                {/* <div class="row">
                  <div class="item-logo">
                    <img src="./img/Tuong/logo-cinema/icon_5.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_6.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_7.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_8.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_9.png" alt="" />
                  </div>
                </div>
                <div class="row">
                  <div class="item-logo">
                    <img src="./img/Tuong/logo-cinema/icon_10.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_11.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_12.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_13.png" alt="" />
                    <img src="./img/Tuong/logo-cinema/icon_14.png" alt="" />
                  </div>
                </div> */}
              </div>
              <div class="col-lg-4 social">
                <div class="item-social col-6">
                  <h1>MOBILE APP</h1>
                  <i class="fab fa-apple"></i>
                  <i class="fab fa-android"></i>
                </div>
                <div class="item-social">
                  <h1>SOCIAL</h1>
                  <i class="fab fa-facebook"></i>
                  <i class="fab fa-twitter-square"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr class="hrFooter" />
        <section class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-xl-2 col-md-2 col-sm-12 col-12">
                <div class="img">
                  <img src={icon9} alt="" />
                </div>
              </div>
              <div class="col-xl-8 col-md-8 col-sm-12 col-12 profile">
                <h1>WEBSITE BOOKING MOVIE OF ME </h1>
                <p>
                  Địa chỉ: Võ Duy Ninh, Phường 22, Quận Bình Thạnh, Tp. Hồ Chí
                  Minh, Việt Nam.
                </p>
                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                <p>
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                </p>
                <p>Số Điện Thoại (Hotline): 0973 960 036</p>
                <p>
                  Email: <span>nguyentuong230698@gmail.com</span>
                </p>
              </div>
              <div class="col-xl-2 col-md-2 col-sm-12 col-12">
                <img src={icon8} alt="" />
              </div>
            </div>
          </div>
          <a
          style={{color: "#000", }}
            href="#"
            onClick={() => {
              scroll.scrollToTop();
            }}
          
          >
            <div className="back_to_top">
              <i class="fas fa-arrow-up"></i>
            </div>
          </a>
        </section>
      </footer>
    );
  }
}

export default Footer;
