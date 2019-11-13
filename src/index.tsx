import * as React from "react";
import { render } from "react-dom";

function App() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
