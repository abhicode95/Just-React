{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
  </div>
</div>; 
React.createElement(tag,props)
*/
}

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");

const headingTag = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "parent" }, "I am h1 tag"),
    React.createElement("h2", { id: "parent" }, "I am h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(headingTag);
