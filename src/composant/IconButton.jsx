import React, { useState } from "react";

function IconButton(props, { position }) {
  const [hover, setHover] = useState(false);

  const showOverlay = () => {
    setHover(true);
  };
  const hideOverlay = () => {
    setHover(false);
  };
  return (
    <div
      className='container--tag'
      onMouseEnter={showOverlay}
      onMouseLeave={hideOverlay}>
      <img
        style={{ width: "30px", margin: "20px", cursor: "pointer" }}
        src={props.src}
        alt='icon'
        onClick={() => props.handleMovie(props.movieId, props.userId)}
      />
      {hover ? <div style={props.style}>{props.content}</div> : null}
    </div>
  );
}

export { IconButton };
