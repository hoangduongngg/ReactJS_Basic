// //  1. React.createElement()
function render(element) {
  //   //React@17
  //   const root = document.querySelector("#root");
  //   ReactDOM.render(element, root);

  //React@18
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(element);
}

// //1.1 - Create headiing
// const h1React = React.createElement(
//   "h1",
//   {
//     title: "Hello",
//     className: "heading",
//   },
//   "Hello guys!"
// );
// render(h1React);
// //1.2 - Create ul li
// const ulReact = React.createElement(
//   "ul",
//   { id: "ul", className: "m-3" },
//   React.createElement("li", { className: "m-2" }, "React"),
//   React.createElement("li", null, "React1")
// );
// render(ulReact);

//1.3 - Create a Title
const divReact = React.createElement(
  "div",
  { className: "post-item" },
  React.createElement("h2", { title: "Learn JS" }, "Learn ReactJS"),
  React.createElement("p", null, "Learn React JS form basics.")
);
render(divReact);
