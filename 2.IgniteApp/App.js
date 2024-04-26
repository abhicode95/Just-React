import ReactDOM from "react-dom/client";
import React from "react";
const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(heading);
