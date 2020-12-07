import React from "react";
import ReactPlayer from "react-player";

function PlayerComponent(props) {
  const style = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 160px)",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const titleMovie = props.movie && props.movie.title.toLowerCase();

  return (
    <div style={style}>
      <ReactPlayer
        url={
          props.canWatch
            ? `http://192.168.1.78:3000/api/video/${props.movieId}/${titleMovie}`
            : "https://www.dropbox.com/s/mik5i6iy8tqgs41/contenu%20bloqu%C3%A9.mp4?dl=0"
        }
        controls
        playing={false}
        width='100%'
        height='100%'
        style={{ position: "absolute", top: "0", left: "0", outline: "none" }}
      />
    </div>
  );
}

export { PlayerComponent };
