import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { BurgerHome, MenuHome } from "../composant";

import { searchMovie } from "../action/moviesAction";
import { searchDirector } from "../action/directorsAction";
import { changePage, showAsideMenu } from "../action/routingAction";
import { useOnClickOutside } from "../utils/Function";

import avatar from "../assets/pictures/compte.png";
import wheel from "../assets/pictures/gear.svg";

import "../css/HeaderHome.css";

function HeaderHomeComponent(props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const idUser = localStorage.getItem("id-user");
  const isLogged = localStorage.getItem("cool-jwt");

  let admin = props.user && props.user.admin;

  // const userId =
  //   props.userInfo && props.userInfo && props.userInfo.userData[0].id;

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    props.searchMovie(search);
    props.searchDirector(search);
  };

  const handleMenu = (pageNumber, aBoolean) => {
    props.changePage(pageNumber);
    props.showAsideMenu(aBoolean);
    setOpen(false);
  };

  return (
    <div className='container--header'>
      <div className='headerHome'>
        <div className='home--responsive'>
          <Link to='/'>
            <div
              className='websiteName--responsive'
              onClick={() => handleMenu(0, false)}>
              MaxFlix
            </div>
          </Link>
          <div className='home--burger' ref={node}>
            <BurgerHome open={open} setOpen={setOpen} />
            <MenuHome
              open={open}
              setOpen={setOpen}
              handleMenu={handleMenu}
              caseId={props.caseId}
            />
          </div>
        </div>
        <div className='headerHome--nav'>
          <Link to='/'>
            <div className='websiteName' onClick={() => handleMenu(0, false)}>
              MaxFlix
            </div>
          </Link>
          <Link to='/moviesList'>
            <div
              className={props.caseId === 1 ? "selected" : null}
              onClick={() => handleMenu(1, false)}>
              Films
            </div>
          </Link>
          <Link to='/directorsList'>
            <div
              className={props.caseId === 2 ? "selected" : null}
              onClick={() => handleMenu(2, false)}>
              Réalisateurs
            </div>
          </Link>
          {/*<Link to='/series'>
            <div
              className={props.caseId === 3 ? "selected" : null}
              onClick={() => handleMenu(3, false)}>
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
          {isLogged && admin ? (
            <div
              className={
                props.caseId === 4 ? "selected--avatar" : "container--avatar"
              }
              onClick={() => handleMenu(4, true)}>
              <Link to={{ pathname: `/admin/dashboard` }}>
                <img className='wheel' src={wheel} alt='wheel' />
              </Link>
            </div>
          ) : null}
          <div
            className={
              props.caseId === 5 ? "selected--avatar" : "container--avatar"
            }
            onClick={() => handleMenu(5, false)}>
            <Link to={{ pathname: `/account/${idUser}` }}>
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
  user: state.userReducer.user,
  caseId: state.routingReducer.caseId,
  moviesList: state.movieReducer.movies,
  directorsList: state.directorReducer.directors,
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (aInt) => dispatch(changePage(aInt)),
  searchMovie: (filteredMovies) => dispatch(searchMovie(filteredMovies)),
  searchDirector: (filteredDirectors) =>
    dispatch(searchDirector(filteredDirectors)),
  showAsideMenu: (aBoolean) => dispatch(showAsideMenu(aBoolean)),
});

const HeaderHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderHomeComponent);

export { HeaderHome };
