import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import HashLoader from "react-spinners/FadeLoader";
import Banner from "../../../Components/Banner";
import ListMovie from "../../../Components/ListMovie";
import News from "../../../Components/News";
import Oder from "../../../Components/Oder";
import ShowTimes from "../../../Components/ShowTimes";
import Application from "../../../Components/application";
import {
  fetchMovieList,
  fetchMovieListComMing,
} from "../../../redux/actions/movie";
import Footer from "../../../util/Footer";
import Loading from "../../Loading";

const HomePage = (props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let set = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(set);
    };
  }, []);
  useEffect(() => {
    props.dispatch(fetchMovieList());
    props.dispatch(fetchMovieListComMing());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Banner />
      {/* <Oder /> */}
      <ListMovie />
      <ShowTimes />
      <News />
      <Application />
      {/* <Footer/> */}
    </React.Fragment>
  );
};

export default connect()(HomePage);
