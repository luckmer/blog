import * as Page from "../components/index";
import * as View from "../views/index";

export const routes = [
  { path: "/", Component: View.Blog, name: "blog" },
  { path: "/register", Component: Page.Register, name: "register" },
  { path: "/login", Component: Page.Login, name: "login" },
  { path: "/profile/:id", Component: Page.Profile, name: "Profile" },
  { path: "/PostCreator", Component: Page.PostCreator, name: "PostCreator" },
  { path: "/details/:id", Component: View.details, name: "details" },
  { path: "/categories/:id", Component: View.Category, name: "category" },
  { path: "*", Component: View.End, name: "404" },
];
