import React from "react";
import { DirectorCard } from "../composant";

const directors = [
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
  {
    name: "Jackson",
    firstname: "Peter",
    picture:
      "https://tse3.mm.bing.net/th?id=OIP.zDj1j_wrbNRI5LZFpLaBagHaKd&pid=Api",
  },
];

function DirectorsList() {
  return (
    <div className='container--list'>
      <h1>Réalisateurs</h1>
      <div className='container--movies'>
        {directors.map((director, i) => {
          return <DirectorCard director={director} />;
        })}
      </div>
    </div>
  );
}

export { DirectorsList };
