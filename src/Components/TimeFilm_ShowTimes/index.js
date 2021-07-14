import React from "react";
import { connect } from "react-redux";
import { actFetchMaLichChieuFilmShowTime } from "../ShowTimes/module/action";
// import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function TimeFilmShowTime(props) {
  // console.log(props.Time);

  let history = useHistory();
  const handleClickFilmShowTime = (maLichChieu) => {
    let user = localStorage.getItem("User");
    if (user) {
      history.push({ pathname: `/detail-ticketroom/${maLichChieu}` });
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
  return (
    <div className="ml-4 my-2">
      <div
        className="thoiGianChieu px-3"
        onClick={() => handleClickFilmShowTime(props.Time.maLichChieu)}
      >
        <p>
          <span>
            {new Date(props.Time.ngayChieuGioChieu).getHours()}:
            {new Date(props.Time.ngayChieuGioChieu).getMinutes()}
          </span>
          ~{new Date(props.Time.ngayChieuGioChieu).getHours() + 2}:
          {new Date(props.Time.ngayChieuGioChieu).getMinutes()}
        </p>
      </div>
    </div>
  );
}

export default connect()(TimeFilmShowTime);
