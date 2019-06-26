import React, { Component } from "react";
import data from "../data.json";

export default class Feed extends Component {
  render() {
    const { search } = this.props;
    const filtered = data.filter(
      item =>
        item.title === search ||
        item.author.indexOf(search) !== -1 ||
        item.badge.indexOf(search) !== -1 ||
        item.body.indexOf(search) !== -1
    );
    const feed = filtered.map(item => {
      return (
        <div key={item.id} className="container feed">
          <div className="row">
            <h3> {item.title} </h3>{" "}
          </div>{" "}
          <div className="row">
            <p> {item.body} </p>{" "}
          </div>{" "}
          <div className="row">
            <p>
              <span className="badge badge-light"> {item.badge} </span>{" "}
              <span className="credit"> {item.category} </span>{" "}
              <span className="credit">
                {" "}
                {item.author} {item.date}{" "}
              </span>{" "}
            </p>{" "}
          </div>{" "}
        </div>
      );
    });

    return feed;
  }
}
