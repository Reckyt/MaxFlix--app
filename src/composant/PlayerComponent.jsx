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

  const titleMovie = props.movie && props.movie.title;

  return (
    <div style={style}>
      <ReactPlayer
        url={`http://localhost:3000/api/video/${props.movieId}/${titleMovie}`}
        controls
        playing={false}
        width='100%'
        height='100%'
        style={{ position: "absolute", top: "0", left: "0" }}
        // light={this.props.imageUrl}
        // onEnded={this.props.handleEnded}
      />
    </div>
  );
}

export { PlayerComponent };
