import React, { Component } from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { addMovieAuth, deletedMovie, editMovieAuth, fetchListMovie } from "./modules/actions";
import Modal from "react-modal";
import { ErrorMessage, Form, Formik } from "formik";
import moment from "moment";
class Movie extends Component {
  state = {
    isOpen: false,
    profileImg: "",
    edit: {},
  };

  imagesHandle = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(event.target.files[0]);
    // console.log(event.target.files[0]);
  };
  mapData = () => {
    return this.props.listMovie.map((movie, index) => {
      return {
        maPhim: movie.maPhim,
        tenPhim: movie.tenPhim,
        biDanh: movie.biDanh,
        trailer: movie.trailer,
        hinhAnh: movie.hinhAnh,
        moTa: movie.moTa,
        ngayKhoiChieu: moment(movie.ngayKhoiChieu.slice(0, 10)).format(
          "DD/MM/yyyy"
        ),
      };
    });
  };

  openModal = (movie) => {
    this.setState({ isOpen: true, edit: movie });
    console.log(movie);
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  deletedMovie = (movie) => {
    console.log(movie);
    this.props.dispatch(deletedMovie(movie.maPhim));
  };

  editMovie = (movie) => {
    console.log(movie);
    this.props.dispatch(editMovieAuth(movie));
  };

  addMovie = (movie) => {
    console.log(movie);
    this.props.dispatch(addMovieAuth(movie));
  }
  render() {
    const { edit, profileImg } = this.state;
    return (
      <div className="position-relative ">
        <div className="addMovie">
          <button
            type="button"
            className="add"
            data-toggle="modal"
            data-target="#addMovieModal"
          >
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <MaterialTable
          title="Thông Tin Phim"
          columns={[
            { title: "Mã Phim", field: "maPhim", cellStyle: { width: "10px" } },
            {
              title: "Tên Phim",
              field: "tenPhim",
              cellStyle: { width: "700px" },
            },
            // { title: "Trailer", field: "trailer" },
            {
              title: "Hình Ảnh",
              field: "hinhAnh",
              align: "right",
              render: (movie) => (
                <img
                  src={movie.hinhAnh}
                  style={{ width: 100, height: 120, borderRadius: 5 }}
                />
              ),
            },
            {
              title: "Mô Tả",
              field: "moTa",
              cellStyle: { width: "10000px" },
              align: "left",
            },
            {
              title: "Ngày Khởi Chiếu",
              field: "ngayKhoiChieu",
              cellStyle: { width: "200px" },
            },
          ]}
          data={this.mapData()}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Movie",
              onClick: (event, movie) => this.openModal(movie),
            },
            {
              icon: "delete",
              tooltip: "Delete Movie",
              onClick: (event, movie) => this.deletedMovie(movie),
            },
          ]}
          detailPanel={(movie) => {
            return (
              <iframe
                width="100%"
                height="500"
                src={movie.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            );
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />

        {/* Add Movie */}
        <div
          className="modal fade"
          id="addMovieModal"
          tabIndex={20}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm Phim
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <Formik
                  onSubmit={this.addMovie}
                  initialValues={{
                    maPhim: 0,
                    tenPhim: "",
                    biDanh: "",
                    trailer: "",
                    hinhAnh: "",
                    moTa: "",
                    maNhom: "GP10",
                    ngayKhoiChieu: "",
                    danhGia: 0,
                  }}
                  validationSchema={this.check}
                  render={(envent) => (
                    <Form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Tên Phim</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            onChange={envent.handleChange}
                            name="tenPhim"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Bí Danh</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Tên Phim"
                            name="biDanh"
                            onChange={envent.handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Ngày Khởi chiếu</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Ngày Khởi Chiếu"
                            name="ngayKhoiChieu"
                            onChange={envent.handleChange}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Trailer</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Trailer"
                            onChange={envent.handleChange}
                            name="trailer"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Hình Ảnh</label>
                        <div>
                          <img
                            src={profileImg}
                            alt="hình ảnh"
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "10px",
                            }}
                          />
                          <input
                            className="pl-3"
                            type="file"
                            name="hinhAnh"
                            accept="image/*"
                            onChange={this.imagesHandle }
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Mô Tả</label>
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            name="moTa"
                            placeholder="Leave a comment here"
                            id="floatingTextarea2"
                            style={{ height: 100 }}
                            onChange={envent.handleChange}
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-danger mr-4"
                          onClick={this.closeModal}
                        >
                          Đóng Tab
                        </button>
                        <button type="submit" className="btn btn-success ml-4">
                          Thêm Phim
                        </button>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Edit Movie */}
        <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          <span onClick={this.closeModal}>x</span>
          <div
            className="border-bottom mb-3"
            style={{
              width: "100%",
              textAlign: "left",
              paddingLeft: "1rem",
              fontWeight: "650",
              color: "orange",
            }}
          >
            <h5>Cập Nhật Phim</h5>
          </div>
          <Formik
            onSubmit={this.editMovie}
            initialValues={{
              maPhim: edit.maPhim,
              tenPhim: edit.tenPhim,
              biDanh: edit.biDanh,
              trailer: edit.trailer,
              hinhAnh: edit.hinhAnh,
              moTa: edit.moTa,
              maNhom: "GP10",
              ngayKhoiChieu: edit.ngayKhoiChieu,
              danhGia: 0,
            }}
            validationSchema={this.check}
            render={(envent) => (
              <Form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Mã Phim</label>
                    <input
                      disabled
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      defaultValue={edit.maPhim}
                      onChange={envent.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Tên Phim</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Tên Phim"
                      defaultValue={edit.tenPhim}
                      name="tenPhim"
                      onChange={envent.handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Ngày Khởi chiếu</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      defaultValue={edit.ngayKhoiChieu}
                      placeholder="Ngày Khởi Chiếu"
                      name="ngayKhoiChieu"
                      onChange={envent.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Trailer</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      defaultValue={edit.trailer}
                      placeholder="Trailer"
                      onChange={envent.handleChange}
                      name="trailer"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Hình Ảnh</label>
                  <div>
                    <img
                      src={edit.hinhAnh}
                      alt="#"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "10px",
                      }}
                    />
                    <input
                      className="pl-3"
                      type="file"
                      name="hinhAnh"
                      onChange={envent.handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Mô Tả</label>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      name="moTa"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                      defaultValue={edit.moTa}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-danger mr-4"
                    onClick={this.closeModal}
                  >
                    Đóng Tab
                  </button>
                  <button type="submit" className="btn btn-success ml-4">
                    Cập Nhật
                  </button>
                </div>
              </Form>
            )}
          />
        </Modal>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchListMovie());
  }
}

const mapStateToProp = (state) => {
  return {
    listMovie: state.reducerMovieAuth.listMovie,
  };
};

export default connect(mapStateToProp)(Movie);
