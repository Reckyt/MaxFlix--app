import React from "react";

import loading from "../assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
      <img
        src={loading}
        alt='Loading'
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
};

export { Loading };
