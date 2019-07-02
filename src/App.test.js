import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Posts from "./components/Posts.js";
import Pagination from "./components/pagination.js";
import Sidebar from "./components/sidebar.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sidebar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Posts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Pagination />, div);
  ReactDOM.unmountComponentAtNode(div);
});
