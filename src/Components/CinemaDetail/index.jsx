import React, { Component } from "react";
import pc1 from "../../asset/rap.jpg";
import TimeShowTime from "../TimeShowTime";
class CinemaDetail extends Component {
  renderCinema = () => {
    return this.props.data.cumRapChieu.map((item, index) => {
      return (
        <>
          <div className="d-flex ">
            <img
              style={{ height: "60px", marginBottom: "1.2rem", borderRadius: 8 }}
              src={pc1}
              alt="#"
            />
            <p className="pl-3" style={{fontWeight: 600}}>{item.tenCumRap}</p>
          </div>
          <TimeShowTime data={item} />
          <hr />
        </>
      );
    });
  };
  render() {
    return <>{this.renderCinema()}</>;
  }
}

export default CinemaDetail;
