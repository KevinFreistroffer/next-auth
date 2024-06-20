import { text } from "stream/consumers";

export interface IRoute {
  route: string;
  text: string;
}

export const publicRoutes: IRoute[] = [
  {
    route: "/",
    text: "Home",
  },
  {
    route: "/about",
    text: "About",
  },
  {
    route: "/signup",
    text: "Sign Up",
  },
  {
    route: "/login",
    text: "Login",
  },
];

export const protectedRoutes: IRoute[] = [
  {
    route: "/dashbard",
    text: "Dashboard",
  },
];
