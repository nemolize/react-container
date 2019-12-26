import * as React from "react";
import { render } from "react-dom";

function App() {
  return (<>Hello World</>);
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
