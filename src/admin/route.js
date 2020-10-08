import { NewMovie, NewDirector, TableItems } from "./";

const dashboardRoutes = [
  {
    path: "/new-movie",
    component: NewMovie,
    layout: "/admin",
  },
  {
    path: "/new-director",
    component: NewDirector,
    layout: "/admin",
  },
  {
    path: "/table-items",
    component: TableItems,
    layout: "/admin",
  },
];

export default dashboardRoutes;
