import React from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
function TimeShowTime(props) {
  let history = useHistory();

  const handleClickFilmShowTime = (maLichChieu) => {
    if (localStorage.getItem("User")) {
      history.push({ pathname: `/detail-ticketroom/${maLichChieu} ` });
    } else {
      Swal.fire({
        text: "Bạn cần phải đăng nhập",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đăng nhập",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push({ pathname: "/signin" });
        }
      });
    }
  };

  const renderTimeShowTime = () => {
    return props.data.lichChieuPhim.map((item, index) => {
      // console.log(props.data);
      if (index <= 5) {
        return (
          <div className="col-4 timeShowItem px-3">
            <div
              className="item"
              onClick={() => handleClickFilmShowTime(item.maLichChieu)}
            >
              <span style={{ color: "orange", fontSize: 18, fontWeight: 700 }}>
                {new Date(item.ngayChieuGioChieu).getHours() +
                  ":" +
                  new Date(item.ngayChieuGioChieu).getMinutes()}
              </span>

              <span style={{ fontSize: 14, opacity: 0.8, fontWeight: 600 }}>
                ~
                {new Date(item.ngayChieuGioChieu).getHours() +
                  2 +
                  ":" +
                  new Date(item.ngayChieuGioChieu).getMinutes()}
              </span>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="row timeShow ml-4 my-2">{renderTimeShowTime()}</div>
  );
}

export default TimeShowTime;
