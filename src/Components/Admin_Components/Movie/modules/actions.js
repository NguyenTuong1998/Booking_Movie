import axios from "axios";
import Swal from "sweetalert2";
import {
  FETCH_MOVIE_AUTH,
  ADD_MOVIE_AUTH_REQUEST,
  ADD_MOVIE_AUTH_SUCCESS,
  ADD_MOVIE_AUTH_FAILED,
  EDIT_MOVIE_AUTH_SUCCESS,
  EDIT_MOVIE_AUTH_FAILED,
} from "./constants";

export const fetchListMovie = () => {
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10`,
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: FETCH_MOVIE_AUTH,
          payload: res.data,
        });
      })
      .catch((err) => {});
  };
};
export const deletedMovie = (maPhim) => {
  return (dispatch) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa phim này?",
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
          url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
          method: "DELETE",
          data: maPhim,
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

export const editMovieAuth = (movie) => {
  return (dispatch) => {
    let accessToken = "";
    if (localStorage.getItem("UserAdmin")) {
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
      method: "POST",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        dispatch(editMovieSuccess(res.data));
        Swal.fire("Cập nhật thông tin thành công", "", "success").then(
          (result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          }
        );
      })
      .catch((err) => {
        dispatch(editMovieFailed(err));
        Swal.fire(
          "Cập nhật thông tin không thành công",
          `${err.response.data}`,
          "error"
        );
      });
  };
};

export const addMovieAuth = (movie) => {
  return (dispatch) => {
    dispatch(addMovieRequest());
    let accessToken = "";
    if(localStorage.getItem("UserAdmin")){
      accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;      
    }
    axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
      method:"POST",
      data: movie,
      headers:{
        Authorization: `Bearer ${accessToken}`,
      }
    })
    .then((res) => {
      dispatch(addMovieSuccess(res.data));
      Swal.fire({
        icon: "success",
        title: "Thêm phim thành công",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    })
    .catch((err) => {
      dispatch(addMoiveFailed(err));
      Swal.fire({
        icon: "error",
        title: "Thêm phim thất bại",
        html: `${err.response.data}`,
      });
    })
  }
}

const addMovieRequest = () => {
  return {
    type: ADD_MOVIE_AUTH_REQUEST,
  }
}

const addMovieSuccess = (data) => {
  return {
    type: ADD_MOVIE_AUTH_SUCCESS,
    payload: data,
  }
}

const addMoiveFailed = (err) => {
  return {
    type: ADD_MOVIE_AUTH_FAILED,
    payload: err,
  }
}

const editMovieSuccess = (data) => {
  return {
    type: EDIT_MOVIE_AUTH_SUCCESS,
    payload: data,
  };
};

const editMovieFailed = (err) => {
  return {
    type: EDIT_MOVIE_AUTH_FAILED,
    payload: err,
  };
};
