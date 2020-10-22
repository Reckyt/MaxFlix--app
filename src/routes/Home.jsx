import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "../css/Home.css";

function Home(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselMovies =
    props.movies &&
    props.movies.splice(Math.floor(Math.random() * props.movies.length), 10);

  return (
    <div className='home'>
      <h2>Découvrez cette sélection </h2>
      {carouselMovies && (
        <Carousel
          sliderClass=''
          slidesToSlide={1}
          minimumTouchDrag={80}
          additionalTransfrom={0}
          centerMode={true}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition='all 0.4'
          transitionDuration={100}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'>
          {carouselMovies !== 0 &&
            carouselMovies.map((movie, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Link to={{ pathname: `/movie/${movie.id_movie}` }}>
                    <figure
                      className='carousel--link'
                      style={{
                        backgroundImage: `url(${movie.poster})`,
                      }}
                    />
                  </Link>
                </div>
              );
            })}
        </Carousel>
      )}
    </div>
  );
}

export { Home };
