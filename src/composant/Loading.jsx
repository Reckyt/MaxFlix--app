import React from "react";

import loading from "../assets/loader.gif";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        marginTop: "300px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <img
        src={loading}
        alt='Loading'
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  );
};

export { Loading };
