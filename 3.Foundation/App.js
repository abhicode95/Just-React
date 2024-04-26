import ReactDOM from "react-dom/client";
import React from "react";

//React Component

const Title = () => {
  return (
    <>
      <h1>React Title</h1>
    </>
  );
};

const num = 1000;

const HeadingComponent = () => {
  return (
    <>
      <h1>React Functional Component</h1>
      {num}
      <Title />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent />);
