import { tickets } from "./tickets.js";
import { paseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...tickets].map((route) => ({
  ...route,
  path: paseRoutePath(route.path),
}));
