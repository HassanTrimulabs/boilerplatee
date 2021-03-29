import { Signup } from "../pages";
import { RouteProps } from "react-router-dom";

type CustomRouteProp = RouteProps & {
  restricted: boolean;
  path: string;
};

const ROUTES: Array<CustomRouteProp> = [
  {
    path: "/signup",
    exact: true,
    component: Signup,
    restricted: false,
  },
];

export default ROUTES;
