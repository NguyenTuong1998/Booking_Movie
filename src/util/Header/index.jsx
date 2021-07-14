import React, { Component } from "react";
import responHeader from "../../asset/menu-options.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import * as scroll from "react-scroll";
import { fecthDetailUser } from "../../Components/Admin_Components/Customer/modules/action";
class Header extends Component {
  state = {
    data: [],
    hihi: false,
  };

  logout = () => {
    let user = localStorage.getItem("User");
    if (user) {
      Swal.fire({
        icon: "warning, background,padding,Custom width",
        title: "Bạn muốn đăng xuất",
        showCancelButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "black",
        confirmButtonText: "Yes,...",
        width: 600,
        padding: "3em",
        background: "black",
      }).then((removeItem) => {
        if (removeItem.isConfirmed) {
          this.setState({
            hihi: true,
          });
          Swal.fire(
            "Đăng xuất thành công!",
            "Your file has been deleted.",
            "success"
          ).then((res) => {
            if (res.isConfirmed) {
              localStorage.removeItem("User");
              window.location.reload("");
            }
          });
        }
      });
    }
  };
  handelDetailUser = (user) => {
    this.props.dispatch(fecthDetailUser(user));
  }

  render() {

    this.state.data = JSON.parse(localStorage.getItem("User"));
    return (
      <header>
        <nav className="navbar navbar-home navbar-expand-md position-relative">
          <Link to="/">
            <span>EdricNguyen</span>
          </Link>
          <div className="content">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <scroll.Link
                    style={{ cursor: "pointer" }}
                    to="showtimes"
                    offset={-50}
                    smooth={true}
                    duration={1000}
                    className="nav-link"
                  >
                    Lịch chiếu
                  </scroll.Link>
                </li>
                <li className="nav-item">
                  <scroll.Link
                    style={{ cursor: "pointer" }}
                    to="cumRap"
                    offset={-75}
                    smooth={true}
                    duration={1000}
                    className="nav-link"
                  >
                    Cụm Rạp
                  </scroll.Link>
                </li>
                <li className="nav-item">
                  <scroll.Link
                    style={{ cursor: "pointer" }}
                    to="nav-home"
                    offset={-140}
                    smooth={true}
                    duration={1000}
                    className="nav-link"
                  >
                    Tin Tức
                  </scroll.Link>
                </li>
                <li className="nav-item">
                  <scroll.Link
                    style={{ cursor: "pointer" }}
                    to="ungdung"
                    offset={-40}
                    smooth={true}
                    duration={1000}
                    className="nav-link"
                  >
                    Ứng Dụng
                  </scroll.Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="login">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {localStorage.getItem("User") ? (
                  <li className="nav-item active first d-flex">
                    <Link
                      className="nav-link"
                      to="/profile"
                      onClick={() => {
                        this.handelDetailUser(this.state.data);
                      }}
                    >
                      <i class="fas fa-user-astronaut iconLogin"></i>
                      {this.state.data.hoTen}
                    </Link>
                    <span className="nav-link">|</span>
                    <span
                      className="nav-link pl-0 logout"
                      onClick={this.logout}
                    >
                      Đăng xuất
                    </span>
                  </li>
                ) : (
                  <>
                    <li className="nav-item active first d-flex">
                      <Link to="/signin" className="nav-link" href="#">
                        <i className="fa fa-user-circle" /> Đăng nhập
                      </Link>
                      <Link to="/signup" className="nav-link" href="#">
                        Đăng Ký
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {/* Toggler/collapsibe Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <img src={responHeader} width={30} alt />
            </button>
          </div>
        </nav>
      </header>
    );
  }
  componentDidMount() {
    this.setState({
      data: this.props.user,
    });
  }
}

const mapStateToProp = (state) => {
  return {
    user: state.authReducers.data,
  };
};

export default connect(mapStateToProp)(Header);
