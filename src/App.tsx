import { A, Router } from "@solidjs/router";
import Home from "./Home";

const Routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "*404",
    component: () => {
      return <div innerHTML={`<!--ssr-not-found-->`}></div>;
    },
  },
];

export function App(props?: { serverUrl?: string }) {
  return <Router url={props?.serverUrl}>{Routes}</Router>;
}
