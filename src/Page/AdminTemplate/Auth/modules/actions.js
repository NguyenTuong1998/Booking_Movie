import axios from "axios";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILED } from "./constants";
import Swal from "sweetalert2";
export const fetchLoginAuth = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
        if (res.data.maLoaiNguoiDung === "KhachHang") {
          return Promise.reject({
            response: { data: "Bạn Không Có Quyền Truy Cập...! " },
          });
        }
        sessionStorage.setItem("UserAdmin", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Login success",
        }).then((result) => {
          if (result.isConfirmed) {
            history.replace("/homeAdmin");
          }
        });
      })
      .catch((err) => {
        dispatch(actAuthFailed(err));
        Swal.fire({
          icon: "error",
          title: "Login failed",
          html: `${err.response.data}`,
        });
      });
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};
const actAuthFailed = (err) => {
  return {
    type: AUTH_FAILED,
    payload: err,
  };
};
