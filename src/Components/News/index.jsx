import React, { Component } from "react";
import new1 from "../../asset/news/new1.png";
import new2 from "../../asset/news/new2.png";
import new3 from "../../asset/news/new3.png";
import new4 from "../../asset/news/new4.png";
import new5 from "../../asset/news/new5.png";
import new6 from "../../asset/news/new6.png";
import new7 from "../../asset/news/new7.png";
import new8 from "../../asset/news/new8.png";
import new9 from "../../asset/news/new9.png";
import new10 from "../../asset/news/new10.png";
import new11 from "../../asset/news/new11.png";
import new12 from "../../asset/news/new12.png";
import new13 from "../../asset/news/new13.jpg";
import new14 from "../../asset/news/new14.jpg";
import new15 from "../../asset/news/new15.jpg";
import new16 from "../../asset/news/new16.jpg";
import new17 from "../../asset/news/new17.jpg";
import new18 from "../../asset/news/new18.png";
import new19 from "../../asset/news/new19.jpg";
import new20 from "../../asset/news/new20.png";
import new21 from "../../asset/news/new21.jpg";
import new22 from "../../asset/news/new22.jpg";
import new23 from "../../asset/news/new23.jpg";
// import Fade from "react-reveal/Fade";
class News extends Component {
  render() {
    return (
      
        <div class="News">
          <div class="top"></div>

          <div class="container">

            <div class="main">
              <nav>
                <div class="nav" role="tablist">
                  <a
                    class="nav-link active"
                    role="tab"
                    data-toggle="tab"
                    id="nav-home-tab"
                    href="#nav-home"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Điện ảnh 24h
                  </a>
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    id="nav-profile-tab"
                    role="tab"
                    href="#review"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Review
                  </a>
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    role="tab"
                    id="nav-contact-tab"
                    href="#km"
                    aria-controls="km"
                    aria-selected="false"
                  >
                    Khuyến mãi
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="newTop">
                    <div class="row">
                      <div class="col-xl-6 col-md-6 col-12">
                        <div class="item">
                          <img src={new1} alt="" />
                          <h1>
                            “Bóc tem” tổ hợp giải trí mới toanh của giới Hà
                            Thành
                          </h1>
                          <p>
                            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi
                            sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                            thức khai trương tại 360 Giải Phóng!
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6 col-12 col-sm-12">
                        <div class="item">
                          <img src={new2} alt="" />
                          <h1>
                            Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2
                            tuần công chiếu
                          </h1>
                          <p>
                            Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia
                            nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh
                            thu phòng vé. Dàn ngôi sao “bạc tỷ”
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="newBottom">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new3} alt="" />
                          <h1>
                            NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                            TRANG PHỤ...
                          </h1>
                          <p>
                            Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68
                            đã chính thức phát động cuộc thi.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new4} alt="" />
                          <h1>
                            [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm
                            kinh dị Antebellum: Bẫy Thực Tại
                          </h1>
                          <p>
                            Không đi theo lối mòn máu me, hù dọa mà đầu tư khai
                            thác những mảng tối của xã hội.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 newRight">
                        <div class="row">
                          <img src={new5} alt="" />
                          <p>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng...
                          </p>
                        </div>
                        <div class="row">
                          <img src={new7} alt="" />
                          <p>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </p>
                        </div>
                        <div class="row">
                          <img src={new6} alt="" />
                          <p>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </p>
                        </div>
                        <div class="row">
                          <img src={new5} alt="" />
                          <p>
                            6 đạo diễn tỉ đô làm nên thành công của những bom
                            tấn đình đám nhất Hollywood
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="newTop">
                    <div class="row">
                      <div class="col-xl-6 col-md-6 col-12">
                        <div class="item">
                          <img src={new8} alt="" />
                          <h1>
                            Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                            liên kết
                          </h1>
                          <p>
                            Điểm nhấn của phim kinh dị năm 2020 chính là Tàn
                            Tích Quỷ Ám
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6 col-12 col-sm-12">
                        <div class="item">
                          <img src={new9} alt="" />
                          <h1>Review: Dinh Thự Oan Khuất (Ghost Of War)</h1>
                          <p>
                            Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ
                            Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở
                            lại phòng vé!
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="newBottom">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new10} alt="" />
                          <h1>
                            NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                            TRANG PHỤ...
                          </h1>
                          <p>
                            Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68
                            đã chính thức phát động cuộc thi.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new11} alt="" />
                          <h1>American Sniper - Chính nghĩa hay phi nghĩa?</h1>
                          <p>
                            Không đi theo lối mòn máu me, hù dọa mà đầu tư khai
                            thác những mảng tối của xã hội.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 newRight">
                        <div class="row">
                          <img src={new12} alt="" />
                          <p>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng...
                          </p>
                        </div>
                        <div class="row">
                          <img src={new13} alt="" />
                          <p>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </p>
                        </div>
                        <div class="row">
                          <img src={new14} alt="" />
                          <p>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </p>
                        </div>
                        <div class="row">
                          <img src={new15} alt="" />
                          <p>
                            6 đạo diễn tỉ đô làm nên thành công của những bom
                            tấn đình đám nhất Hollywood
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="km"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div class="newTop">
                    <div class="row">
                      <div class="col-xl-6 col-md-6 col-12">
                        <div class="item">
                          <img src={new16} alt="" />
                          <h1>
                            “Bóc tem” tổ hợp giải trí mới toanh của giới Hà
                            Thành
                          </h1>
                          <p>
                            Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi
                            sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                            thức khai trương tại 360 Giải Phóng!
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-md-6 col-12 col-sm-12">
                        <div class="item">
                          <img src={new17} alt="" />
                          <h1>
                            Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2
                            tuần công chiếu
                          </h1>
                          <p>
                            Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia
                            nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh
                            thu phòng vé. Dàn ngôi sao “bạc tỷ”
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="newBottom">
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new18} alt="" />
                          <h1>
                            NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ
                            TRANG PHỤ...
                          </h1>
                          <p>
                            Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68
                            đã chính thức phát động cuộc thi.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="item">
                          <img src={new19} alt="" />
                          <h1>
                            [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm
                            kinh dị Antebellum: Bẫy Thực Tại
                          </h1>
                          <p>
                            Không đi theo lối mòn máu me, hù dọa mà đầu tư khai
                            thác những mảng tối của xã hội.
                          </p>
                          <div class="icon">
                            <i class="fa fa-thumbs-up">
                              <span>1</span>
                            </i>
                            <i class="fa fa-comment-alt">
                              <span>0</span>
                            </i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 newRight">
                        <div class="row">
                          <img src={new20} alt="" />
                          <p>
                            Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim
                            đứng...
                          </p>
                        </div>
                        <div class="row">
                          <img src={new21} alt="" />
                          <p>
                            Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                            Christopher Nolan
                          </p>
                        </div>
                        <div class="row">
                          <img src={new22} alt="" />
                          <p>
                            Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng
                            phòng vé' xứ Hàn
                          </p>
                        </div>
                        <div class="row">
                          <img src={new23} alt="" />
                          <p>
                            6 đạo diễn tỉ đô làm nên thành công của những bom
                            tấn đình đám nhất Hollywood
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
     
    );
  }
}

export default News;
