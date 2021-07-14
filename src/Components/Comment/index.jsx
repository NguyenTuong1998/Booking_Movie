import React, { Component } from "react";
import HoverRating from "../Rating";
import data from "./cmt.json";
import pc from "../../asset/dinh.jpg";
import Swal from "sweetalert2";

class Comment extends Component {
  state = {
    lstComment: [],
    comment: "",
    rating: 0,
    isVisiable: 3,
  };

  handleViewMore = () => {
    this.setState({
      isVisiable: this.state.isVisiable + 2,
    });
  };

  renderlstComment = () => {
    return this.state.lstComment
      .reverse()
      .slice(0, this.state.isVisiable)
      .map((item, index) => {
        return (
          <div className="mb-3 info slideInDown animated">
            <div className="d-flex info-item" key={index}>
              <div className="d-flex background">
                <img
                  src="https://loremflickr.com/320/240/dog"
                  width="50px"
                  alt="user"
                />
                <p className="mb-0">{item.user}</p>
              </div>
              <div className="rating">
                {item.rating}
                <i class="pl-2 fas fa-star" style={{ color: "orange" }}></i>
              </div>
            </div>
            <div className="comment">
              <p>{item.comment}</p>
            </div>
          </div>
        );
      });
  };
  handleChange = (e) => {
    this.setState(
      {
        comment: e.target.value,
      },
      () => {
        console.log(this.state.comment);
      }
    );
  };
  handleComment = () => {
    const lstNewComment = [...this.state.lstComment];
    const name = JSON.parse(localStorage.getItem("User"));

    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Vui lòng đăng nhập !!! ",
      });
    } else if (this.state.comment === "") {
      Swal.fire({
        icon: "error",
        title: "Vui lòng không để trống ô comment...!!! ",
      });
    } else {
      const customer = {
        user: name.hoTen,
        comment: this.state.comment,
        rating: this.state.rating,
      };
      lstNewComment.push(customer);
      this.setState(
        {
          lstComment: lstNewComment,
        },
        () => {
          console.log(this.state.lstComment);
        }
      );
    }
  };

  getData = (eve) => {
    this.setState({
      rating: eve,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5 coming_left">
            <HoverRating data={this.getData} />
            <textarea
              name=""
              placeholder="Hãy viết gì đó đi...!"
              id=""
              rows="5"
              cols="50"
              onChange={this.handleChange}
            ></textarea>

            <button
              className="btn btn-success"
              type="submit"
              onClick={this.handleComment}
            >
              Đăng
            </button>
          </div>
          <div className="col-7 coming_right">
            {this.renderlstComment()}
            <div className="text-center mb-3">
              <button
                className="btn btn-secondary"
                onClick={this.handleViewMore}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      lstComment: data,
    });
  }
}

export default Comment;
