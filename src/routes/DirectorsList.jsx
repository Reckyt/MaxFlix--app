import React from "react";
import { DirectorCard, NoResult, Loading } from "../composant";

function DirectorsList(props) {
  let filteredDirectorsList =
    props.directors &&
    props.directors.filter((director) => {
      if (props.research) {
        return (
          director.name
            .toLowerCase()
            .includes(props.research.trim().toLowerCase()) ||
          director.firstname
            .toLowerCase()
            .includes(props.research.toLowerCase())
        );
      } else {
        return director;
      }
    });

  const renderList = (filteredDirectorsList) => {
    if (filteredDirectorsList.length === 0) {
      return <NoResult />;
    } else {
      return filteredDirectorsList.map((director, i) => {
        return <DirectorCard key={i} director={director} />;
      });
    }
  };

  return (
    <div className='container--list'>
      <h1>Réalisateurs</h1>
      <div className='container--movies'>
        {props.directors && props.directors.length > 0 ? (
          renderList(filteredDirectorsList)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export { DirectorsList };
