import React from "react";
import { Link } from "react-router-dom";

import remove from "../assets/pictures/delete.svg";

import "../css/TableItems.css";

function TableItems(props) {


  let filteredMoviesList =
    props.items &&
    props.items.filter((movie) => {
      if (props.research && props.movie) {
        return (
          movie.title.toLowerCase().includes(props.research.toLowerCase()) ||
          movie.director
            .toLowerCase()
            .includes(props.research.trim().toLowerCase())
        );
      } else if (props.research && !props.movie) {
        return movie.name.toLowerCase().includes(props.research.toLowerCase()) || movie.firstname.toLowerCase().includes(props.research.toLowerCase())
      }
      else {
        return movie;
      }
    });

  const handleDelete = (itemId) => {
    props.deleteItem(itemId);
  };
  console.log(filteredMoviesList)

  return (
    <div className='container--vignette'>
      {filteredMoviesList && filteredMoviesList.map((item) => {
          const directorName = item.firstname + " " + item.name;
          return (
            <div className='vignette'>
              <Link
                to={{
                  pathname: props.movie
                    ? `/modify-movie/${item.id_movie}`
                    : `/modify-director/${item.id_director}`,
                }}>
                <img
                  style={{ width: "130px", height: "200px" }}
                  src={props.movie ? item.poster : item.picture}
                  alt='poster'
                />
                  <img
                    src={remove}
                    alt='delete'
                    className='delete'
                    onClick={() => handleDelete(props.movie ? item.id_movie : item.id_director)}
                  />
              </Link>
              <p>{props.movie ? item.title : directorName}</p>
            </div>
          );
        })}
    </div>
  );
}

export { TableItems };
