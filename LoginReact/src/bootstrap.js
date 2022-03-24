import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el, { onSignIn }) => {
  ReactDOM.render(<App onSignIn={onSignIn} />, el);
  return {};
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, {});
  }
}
export { mount };
