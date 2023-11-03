const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

/**
 * using pure javascript
 * const heading = document.createElement("h1");
 * heading.innerHTML = "Hello world from Javascript";
 * const root = document.getElementById("root");
 * root.appendChild(heading);
 */