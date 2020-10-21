import React from "react";

function IconButton(props) {
  return (
    <div>
      <img
        style={{ width: "30px", margin: "20px", cursor: "pointer" }}
        src={props.src}
        alt='icon'
        onClick={() => props.handleMovie(props.movieId, props.userId)}
      />
    </div>
  );
}

export { IconButton };
