import MaterialTable from "material-table";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchListUser,
  deletedUser,
  addUserAuth,
  editUserAuth,
} from "./modules/action";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import Modal from "react-modal";
import { event } from "jquery";

class Customer extends Component {
  state = {
    isOpen: false,
    edit: {},
  };
  mapData = () => {
    return this.props.listUser.map((user, index) => {
      return {
        taiKhoan: user.taiKhoan,
        matKhau: user.matKhau,
        hoTen: user.hoTen,
        email: user.email,
        soDt: user.soDt,
        maLoaiNguoiDung: user.maLoaiNguoiDung,
      };
    });
  };

  deletedUser = (user) => {
    console.log(user);
    this.props.dispatch(deletedUser(user.taiKhoan));
  };

  check = Yup.object().shape({
    taiKhoan: Yup.string()
      .required("Tài Khoản không được để trống !!")
      .min(5, "Tối thiểu có trên 5 kí tự"),
    matKhau: Yup.string()
      .required("Mật khẩu không được để trống !!")
      .min(5, "Tối thiểu có trên 5 kí tự"),
    email: Yup.string()
      .required("Email không được để trống")
      .email("Không đúng định dạng"),
    soDt: Yup.string()
      .required("Số Điện thoại không được để trống !!")
      .matches(/^[0-9]+$/, "Số điện thoại không đúng định dạng"),
    hoTen: Yup.string().required("Họ Tên không được để trống !!"),
  });
  onSubmit = (user) => {
    this.props.dispatch(addUserAuth(user));
    console.log(user);
  };

  openModal = (user) => {
    this.setState({ isOpen: true, edit: user });
    console.log(user);
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };

  editUser = (user) => {
    console.log(user);
    this.props.dispatch(editUserAuth(user));
  };

  render() {
    console.log(this.state.edit);
    const { edit } = this.state;
    return (
      <div className="position-relative ">
        <div className="addUser">
          <button
            type="button"
            className="add"
            data-toggle="modal"
            data-target="#addUserModal"
          >
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <MaterialTable
          title="Thông Tin Người Dùng"
          columns={[
            { title: "Tài Khoản", field: "taiKhoan" },
            { title: "Mật Khẩu", field: "matKhau" },
            { title: "Họ Tên", field: "hoTen" },
            { title: "Email", field: "email" },
            { title: "Số Điện Thoại", field: "soDt" },
            { title: "Mã Loại", field: "maLoaiNguoiDung" },
          ]}
          data={this.mapData()}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit User",
              dataToggle: "modal",
              dataTarget: "#EditUserModal",
              onClick: (event, user) => this.openModal(user),
            },
            {
              icon: "delete",
              tooltip: "Delete User",
              onClick: (event, user) => this.deletedUser(user),
            },
          ]}
        />

        {/* ADD_User Modal */}

        <div
          className="modal fade"
          id="addUserModal"
          tabIndex={20}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm Người Dùng
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
                  onSubmit={this.onSubmit}
                  initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    soDt: "",
                    maNhom: "GP01",
                    hoTen: "",
                    maLoaiNguoiDung: "",
                  }}
                  validationSchema={this.check}
                  render={(envent) => (
                    <Form>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Tài Khoản</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Tài Khoản"
                            name="taiKhoan"
                            onChange={envent.handleChange}
                          />
                          <ErrorMessage name="taiKhoan">
                            {(msg) => (
                              <div className="text text-danger">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Mật Khẩu</label>
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Mật Khẩu"
                            name="matKhau"
                            onChange={envent.handleChange}
                          />
                          <ErrorMessage name="matKhau">
                            {(msg) => (
                              <div className="text text-danger">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                            name="email"
                            onChange={envent.handleChange}
                          />
                          <ErrorMessage name="email">
                            {(msg) => (
                              <div className="text text-danger">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputPassword4">Số Điện Thoại</label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputPassword4"
                            placeholder="Số Diện Thoại"
                            onChange={envent.handleChange}
                            name="soDt"
                          />
                          <ErrorMessage name="soDt">
                            {(msg) => (
                              <div className="text text-danger">{msg}</div>
                            )}
                          </ErrorMessage>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Họ Tên</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput2"
                          placeholder="Tên Đầy Đủ"
                          onChange={envent.handleChange}
                          name="hoTen"
                        />
                        <ErrorMessage name="hoTen">
                          {(msg) => (
                            <div className="text text-danger">{msg}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">
                          Loại Người Dùng
                        </label>
                        <select
                          id="inputState"
                          class="form-control"
                          name="maLoaiNguoiDung"
                          onChange={envent.handleChange}
                        >
                          <option value="KhachHang" selected disabled>
                            ...
                          </option>
                          <option value="QuanTri">Khách Hàng</option>
                          <option value="QuanTri">Quản Trị</option>
                        </select>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Đóng
                        </button>
                        <button type="submit" className="btn btn-success">
                          Thêm
                        </button>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}

        <Modal isOpen={this.state.isOpen} onRequestClose={this.closeModal}>
          <span onClick={this.closeModal}>x</span>
          <div
            className="border-bottom mb-3"
            style={{ width: "100%", textAlign: "center", color: "orange" }}
          >
            <h5>Cập Nhật Người Dùng</h5>
          </div>
          <Formik
            onSubmit={this.editUser}
            initialValues={{
              taiKhoan: edit.taiKhoan,
              matKhau: edit.matKhau,
              email: edit.email,
              soDt: edit.soDt,
              maNhom: "GP01",
              hoTen: edit.hoTen,
              maLoaiNguoiDung: edit.maLoaiNguoiDung,
            }}
            validationSchema={this.check}
            render={(envent) => (
              <Form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Tài Khoản</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      defaultValue={edit.taiKhoan}
                      name="taiKhoan"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="taiKhoan">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Mật Khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Mật Khẩu"
                      defaultValue={edit.matKhau}
                      name="matKhau"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="matKhau">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      defaultValue={edit.email}
                      placeholder="Email"
                      name="email"
                      onChange={envent.handleChange}
                    />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Số Điện Thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      defaultValue={edit.soDt}
                      placeholder="Số Diện Thoại"
                      onChange={envent.handleChange}
                      name="soDt"
                    />
                    <ErrorMessage name="soDt">
                      {(msg) => <div className="text text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">Họ Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={edit.hoTen}
                    id="formGroupExampleInput2"
                    placeholder="Tên Đầy Đủ"
                    onChange={envent.handleChange}
                    name="hoTen"
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <div className="text text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput2">
                    Loại Người Dùng
                  </label>
                  <select
                    id="inputState"
                    class="form-control"
                    name="maLoaiNguoiDung"
                    onChange={envent.handleChange}
                  >
                    {edit.maLoaiNguoiDung === "KhachHang" ? (
                      <>
                        <option value={edit.maLoaiNguoiDung}>Khách hàng</option>
                        <option value="QuanTri">Quản trị</option>
                      </>
                    ) : (
                      <>
                        <option value={edit.maLoaiNguoiDung}>Quản trị</option>
                        <option value="KhachHang">Khách hàng</option>
                      </>
                    )}
                  </select>
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
    this.props.dispatch(fetchListUser());
  }
}

const mapStateToProp = (state) => {
  return {
    listUser: state.reducerUser.listUser,
  };
};

export default connect(mapStateToProp)(Customer);
