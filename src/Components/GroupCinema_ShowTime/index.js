import React from 'react'
import { connect } from 'react-redux';
import { actFetchMaCumRapShowTime } from "../ShowTimes/module/action";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pc1 from "../../asset/rap.jpg";
const GroupCinemaShowTime = (props) => {
  // console.log(props.Group);
  return (
    <>
      <div
        className={
          props.Index === 0 ? "row rap__item show active " : "row rap__item show"
        }
        onClick={() => {
          props.handleClickCinema(props.Group.maCumRap);
        }}
      >
        <div className="col-3 rap__img">
          <LazyLoadImage
            src={pc1}
            alt={props.Group.tenCumRap}
          />
        </div>
        <div className="col-9 rap__text">
          <p>{props.Group.tenCumRap}</p>
          <span>{props.Group.diaChi}</span>
          <br />
          <a href="#">[ Chi tiết ]</a>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClickCinema: (maCumRap) => {
      dispatch(actFetchMaCumRapShowTime(maCumRap))
    }
  }
}

export default connect(null, mapDispatchToProps)(GroupCinemaShowTime);
