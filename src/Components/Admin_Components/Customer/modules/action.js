import axios from "axios";
import {
  FETCH_USER_MANAGER,
  ADD_USER_AUTH_REQUEST,
  ADD_USER_AUTH_SUCCESS,
  ADD_USER_AUTH_FAILED,
  EDIT_USER_AUTH_SUCCESS,
  EDIT_USER_AUTH_FAILED,
  FECTH_DETAIL_USER_SUCCESS,
  FECTH_DETAIL_USER_FAILED
} from "./constants";
import Swal from "sweetalert2";
export const fetchListUser = () => {
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: FETCH_USER_MANAGER,
          payload: res.data,
        });
      })
      .catch((err) => {});
  };
};

export const deletedUser = (user) => {
  return (dispatch) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      text: "Bạn sẽ không thể phục hồi sau khi xóa!",
      icon: "warning",
      confirmButtonText: "Đồng ý",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
    }).then((resul) => {
      if (resul.isConfirmed) {
        let accessToken = "";
        if (localStorage.getItem("UserAdmin")) {
          accessToken = JSON.parse(
            localStorage.getItem("UserAdmin")
          ).accessToken;
        }
        axios({
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
          method: "DELETE",
          data: user,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => {
            Swal.fire("Xóa tài khoản thành công!", "", "success").then(
              (res) => {
                if (res.isConfirmed) {
                  window.location.reload();
                }
              }
            );
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: `${error.response.data}`,
            });
          });
      }
    });
  };
};

export const addUserAuth = (user) => {
  return (dispatch) => {
    dispatch(addUserRequest());
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch(addUserSuccess(res.data));
        Swal.fire({
          icon: "success",
          title: "Thêm người dùng thành công",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((err) => {
        dispatch(addUserFailded(err));
        Swal.fire({
          icon: "error",
          title: "Thêm thất bại",
          text: err.response.data,
        });
      });
  };
};

export const editUserAuth = (user) => {
  return (dispatch) => {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch(editUserSuccess(res.data));
        Swal.fire("Cập nhật thông tin thành công", "", "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          }
        );
      })
      .catch((err) => {
        dispatch(editUserFailed(err));
        Swal.fire(
          "Cập nhật thông tin không thành công",
          `${err.response.data}`,
          "error"
        );
      });
  };
};

export const fecthDetailUser = (user) => {
  return (dispatch) => {
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: user,
    })
      .then((res) => {
        dispatch({
          type: FECTH_DETAIL_USER_SUCCESS,
          payload: res.data,
        });
        localStorage.setItem("Infouser", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch({
          type: FECTH_DETAIL_USER_FAILED,
          payload: err,
        });
      });
  };
};
const addUserRequest = () => {
  return {
    type: ADD_USER_AUTH_REQUEST,
  };
};

const addUserSuccess = (data) => {
  return {
    type: ADD_USER_AUTH_SUCCESS,
    payload: data,
  };
};

const addUserFailded = (err) => {
  return {
    type: ADD_USER_AUTH_FAILED,
    payload: err,
  };
};

const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_AUTH_SUCCESS,
    payload: data,
  };
};

const editUserFailed = (err) => {
  return {
    type: EDIT_USER_AUTH_FAILED,
    payload: err,
  };
};
