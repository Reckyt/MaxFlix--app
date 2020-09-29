import React from "react";

function NoResult() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        marginTop: "100px",
        color: "white",
      }}>
      <h1>
        Votre recherche ne fait pas parite des films ou réalisateurs enregistrés
        sur ce site ! Désolé
      </h1>
    </div>
  );
}

export { NoResult };
