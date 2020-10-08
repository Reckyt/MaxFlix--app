import React from "react";
import { Link } from "react-router-dom";

import "../css/TableItems.css";

function TableItems(props) {
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
              </Link>
              <p>{props.movie ? item.title : directorName}</p>
            </div>
          );
        })}
    </div>
  );
}

export { TableItems };
