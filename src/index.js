import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hey there!</p>;
}

render(<Hi />, document.getElementById("app"));
