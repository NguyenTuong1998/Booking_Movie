import React from "react";
const Oder = () => {
  return (
    <div class="container">
      <div class="buyticket">
        <div class="booking d-flex">
          <div class="movie">
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="3,5"
              >
                Phim
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a class="dropdown-item" href="#">
                  Sám Hối (C18)
                </a>
                <a class="dropdown-item" href="#">
                  Cậu Vàng (C18)
                </a>
                <a class="dropdown-item" href="#">
                  Chị Mười 3: 3 Ngày Sinh Tử (C18)
                </a>
              </div>
            </div>
          </div>
          <div class="location">
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="3,5"
              >
                Rạp
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a class="dropdown-item" href="#">
                  BHD Star Bitexco
                </a>
                <a class="dropdown-item" href="#">
                  BHD Star Vincom 3/2
                </a>
                <a class="dropdown-item" href="#">
                  BHD Star Vincom Thảo Điền
                </a>
                <a class="dropdown-item" href="#">
                  BHD Star Vincom Phạm Hùng
                </a>
                <a class="dropdown-item" href="#">
                  Lotte Cinema Cantavil
                </a>
              </div>
            </div>
          </div>
          <div class="date-seeing">
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle choose"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="3,5"
              >
                Ngày xem
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a class="dropdown-item" href="#">
                  Hôm nay
                </a>
                <a class="dropdown-item" href="#">
                  Ngày mai
                </a>
              </div>
            </div>
          </div>
          <div class="time">
            <div class="dropdown">
              <button
                type="button"
                class="btn dropdown-toggle"
                id="dropdownMenuOffset"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-offset="3,5"
              >
                Suất chiếu
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                <a class="dropdown-item" href="#">
                  10:45
                </a>
                <a class="dropdown-item" href="#">
                  17:00
                </a>
                <a class="dropdown-item" href="#">
                  21:00
                </a>
              </div>
            </div>
          </div>
          <button class="btn btn-dark bookin">Mua vé </button>
        </div>
      </div>
    </div>
  );
};

export default Oder;
