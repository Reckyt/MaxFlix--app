import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changePage } from "../action/caseAction";
import { searchMovie } from "../action/moviesAction";
import { searchDirector } from "../action/directorsAction";

import avatar from "../assets/pictures/compte.png";
import wheel from "../assets/pictures/gear.svg";

import "../css/HeaderHome.css";

function HeaderHomeComponent(props) {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    props.searchMovie(search);
    props.searchDirector(search);
  };

  const userId =
    props.userInfo && props.userInfo && props.userInfo.userData[0].id;

  return (
    <div className='container--header'>
      <div className='headerHome'>
        <div className='headerHome--nav'>
          <Link to='/'>
            <div className='websiteName' onClick={() => props.changePage(0)}>
              MaxFlix
            </div>
          </Link>
          <Link to='/moviesList'>
            <div
              className={props.caseId === 1 ? "selected" : null}
              onClick={() => props.changePage(1)}>
              Films
            </div>
          </Link>
          <Link to='/directorsList'>
            <div
              className={props.caseId === 2 ? "selected" : null}
              onClick={() => props.changePage(2)}>
              Réalisateurs
            </div>
          </Link>
          {/*<Link to='/series'>
            <div
              className={props.caseId === 3 ? "selected" : null}
              onClick={() => props.changePage(3)}>
              Séries
            </div>
  </Link>*/}
        </div>
        <div className='headerHome--searchBar'>
          <input
            placeholder='Film, réalisateur'
            value={search}
            onChange={handleSearch}
          />
          <div
            className={
              props.caseId === 4 ? "selected--avatar" : "container--avatar"
            }
            onClick={() => props.changePage(4)}>
            <Link to={{ pathname: `/admin/dashboard` }}>
              <img className='wheel' src={wheel} alt='wheel' />
            </Link>
          </div>
          <div
            className={
              props.caseId === 5 ? "selected--avatar" : "container--avatar"
            }
            onClick={() => props.changePage(5)}>
            <Link to={{ pathname: `/account/${userId}` }}>
              <img className='avatar' src={avatar} alt='avatar' />
            </Link>
          </div>
        </div>
      </div>
      <div className='lign'> </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.userReducer.userInfo,
  caseId: state.caseReducer.caseId,
  moviesList: state.movieReducer.movies,
  directorsList: state.directorReducer.directors,
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (aInt) => dispatch(changePage(aInt)),
  searchMovie: (filteredMovies) => dispatch(searchMovie(filteredMovies)),
  searchDirector: (filteredDirectors) =>
    dispatch(searchDirector(filteredDirectors)),
});

const HeaderHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderHomeComponent);

export { HeaderHome };
