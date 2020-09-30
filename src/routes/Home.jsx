import React from "react";
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

  const handleClickGoMovie = () => {};

  const arrayLength = props.movies && props.movies.length;
  let idMoviesCarousel = [];

  for (let i = 0; i < 10; i++) {
    let ramdomNumber = Math.floor(Math.random() * arrayLength) + 1;
    idMoviesCarousel.push(ramdomNumber);
  }
  console.log(idMoviesCarousel);

  return (
    <div className='home'>
      <h2>Découvrez cette sélection </h2>
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
        {idMoviesCarousel.map((idMovie, indexNumber) => {
          props.movies &&
            props.movies.filter((movie, indexMovie) => {
              if (idMovie === movie.id_movie) {
                console.log(movie, idMovie);
                return (
                  <div key={indexMovie}>
                    <figure
                      className='carousel--link'
                      style={{
                        backgroundImage: `url(${movie.poster})`,
                      }}
                      onClick={() => handleClickGoMovie(movie.id_movie)}
                    />
                  </div>
                );
              }
            });
        })}
      </Carousel>
    </div>
  );
}

export { Home };
