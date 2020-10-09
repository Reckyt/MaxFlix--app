import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changePage } from "../action/routingAction";

import "../css/AsideMenu.css";

function AsideMenuComponent(props) {
  return (
    <div className={props.showAsideMenu ? "aside--menu" : "hide--aside--menu"}>
      <Link
        className={
          props.caseId === 6 ? "button--menu selected" : "button--menu"
        }
        to={{ pathname: `/admin/new-movie` }}
        onClick={() => props.changePage(6)}>
        <p>Ajouter un film </p>
      </Link>
      <Link
        className={
          props.caseId === 7 ? "button--menu selected" : "button--menu"
        }
        to={{ pathname: `/admin/new-director` }}
        onClick={() => props.changePage(7)}>
        <p>Ajouter un réalisateur</p>
      </Link>
      <Link
        className={
          props.caseId === 8 ? "button--menu selected" : "button--menu"
        }
        to={{ pathname: `/admin/movies-items` }}
        onClick={() => props.changePage(8)}>
        <p>Afficher tous les films</p>
      </Link>
      <Link
        className={
          props.caseId === 9 ? "button--menu selected" : "button--menu"
        }
        to={{ pathname: `/admin/directors-items` }}
        onClick={() => props.changePage(9)}>
        <p>Afficher tous les réalisateurs</p>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  caseId: state.routingReducer.caseId,
  showAsideMenu: state.routingReducer.showAsideMenu,
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (aInt) => dispatch(changePage(aInt)),
});

const AsideMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsideMenuComponent);

export { AsideMenu };
