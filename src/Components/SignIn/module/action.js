import axios from "axios";
import * as actionTypes from "./constant";
import Swal from "sweetalert2";

export const fetchLogin = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: user,
    })
      .then((res) => {
        dispatch(actAuthSuccess(res.data));
        localStorage.setItem("User", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Login success",
        }).then((reuslt) => {
          if (reuslt.isConfirmed) {
            history.replace("/");
          }
        });
      })
      .catch((err) => {
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
    type: actionTypes.LOGIN_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (err) => {
  return {
    type: actionTypes.LOGIN_FAILED,
    payload: err,
  };
};
