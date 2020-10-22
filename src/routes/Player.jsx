import React from "react";
import { Redirect } from "react-router-dom";

import { PlayerComponent } from "../composant";

function Player(props) {
  const isLogged = localStorage.getItem("cool-jwt");

  if (!isLogged) {
    return <Redirect to='/signIn' />;
  }
  return (
    <div>
      <PlayerComponent />
    </div>
  );
}

export { Player };
