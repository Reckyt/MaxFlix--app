import React from "react";
import ReactPlayer from "react-player";

import bunny from "";

function PlayerComponent() {
  const style = {
    position: "relative",
    width: "100%",
    height: "calc(100vh - 160px)",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <ReactPlayer
        url={bunny}
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

// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
