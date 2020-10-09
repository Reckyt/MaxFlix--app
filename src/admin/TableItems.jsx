import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import remove from "../assets/pictures/delete.svg";

import "../css/TableItems.css";

function TableItems(props) {
  const getDirectors = props.getDirectors;

  useEffect(() => {
    if (!props.movie) {
      getDirectors();
    }
  }, [getDirectors, props.movie]);

  const handleDelete = (directorId) => {
    props.deleteDirector(directorId);
  };

  return (
    <div className='container--vignette'>
      {props.items &&
        props.items.map((item) => {
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
                {!props.movie && (
                  <img
                    src={remove}
                    alt='delete'
                    className='delete'
                    onClick={() => handleDelete(item.id_director)}
                  />
                )}
              </Link>
              <p>{props.movie ? item.title : directorName}</p>
            </div>
          );
        })}
    </div>
  );
}

export { TableItems };
