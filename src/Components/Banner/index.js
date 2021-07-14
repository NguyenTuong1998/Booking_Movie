import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = (props) => {
  const settings = {
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  const Images = [
    {
      name: "img-1",
      url: "./Images/slider2.jpg",
      link:
        "https://www.youtube.com/watch?v=xLYN94jkiDo&list=RDtnuPdtzSf2c&index=2",
    },
    {
      name: "img-2",
      url: "./Images/slider4.jpg",
      link:
        "https://www.youtube.com/watch?v=CJOGsuY1x3M&list=RDtnuPdtzSf2c&index=5",
    },
    {
      name: "img-3",
      url: "./Images/slider5.png",
      link:
        "https://www.youtube.com/watch?v=BhSsopT6h4A&list=RDtnuPdtzSf2c&index=9",
    },
  ];

  // const [trailer, setTrailer] = useState(false);
  // const trailerMovie = () => {
  //   setTrailer(true);
  // };

  return (
    <section className="carousel">
      <Slider {...settings}>
        {Images.map((img) => {
          return (
            <div className="position-relative">
              <img src={img.url} alt="img" width="100%" />
              {/* <div className="trailer">
                <a href={img.link} data-lity>
                  <i class="fas fa-play"></i>
                </a>
              </div> */}

              {/* <ModalVideo
                channel="youtube"
                isOpen={trailer}
                videoId={img.link}
                onClose={() => setTrailer(false)}
                className="trailer"
              ></ModalVideo>
              <button onClick={trailerMovie} className="trailer">
                <i class="fas fa-play"></i>
              </button> */}
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
