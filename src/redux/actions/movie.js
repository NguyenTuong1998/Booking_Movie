import axios from "axios";
import {
  FETCH_MOVIE,
  FETCH_MOVIE_DETAIL,
  FETCH_MOVIE_COMMING,
  FETCH_MOVIE_DETAIL_SHOWTIME
} from "../constants/movie";

export const fetchMovieList = () => {
  return (dispatch) => {
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=23&tuNgay=01%2F01%2F2018&denNgay=31%2F12%2F2022",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_MOVIE,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchMovieListComMing = () => {
  return (dispatch) => {
    axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=23&tuNgay=01%2F01%2F2018&denNgay=31%2F12%2F2025",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_MOVIE_COMMING,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchMovieDetail = (id) => {
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: FETCH_MOVIE_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchMovieDetailShowTime = (id) => {
  return (dispatch) => {
    axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
    })
    .then((res) =>{
      dispatch({
        type: FETCH_MOVIE_DETAIL_SHOWTIME,
        payload: res.data,
      });
    })
    .catch(()=>{})
  }
}
