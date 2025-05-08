import { A, Router } from "@solidjs/router";
import Home from "./Home";

const Routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/random",
    component: Random,
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

function Random() {
  return (
    <div>
      <h1 class="w-4">Random</h1>
      <div>n = {Math.random()}</div>

      <br />

      <A href="/">Home (router)</A>
    </div>
  );
}
