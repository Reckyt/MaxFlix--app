import React from "react";

import { AsideMenu } from "./";

import { ModifyDirector } from "./ModifyDirector";
import { ModifyMovie } from "./ModifyMovie";
import { NewDirector } from "./NewDirector";
import { NewMovie } from "./NewMovie";
import { TableItems } from "./TableItems";

function DashBoard(props) {
  return (
    <div>
      <AsideMenu />
      <NewDirector />
      <NewMovie />
      <TableItems />
    </div>
  );
}

export { DashBoard };
