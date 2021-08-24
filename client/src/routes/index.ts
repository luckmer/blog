import { Register, Login } from "../components/index";
import { Blog } from "../views/index";

export const routes = [
  { path: "/", Component: Blog, name: "blog" },
  { path: "/register", Component: Register, name: "register" },
  { path: "/login", Component: Login, name: "login" },
];
