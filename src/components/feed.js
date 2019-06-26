import React, { Component } from "react";
import data from "../data.json";

export default class Feed extends Component {
  render() {
    const { search } = this.props;
    const filtered = data.filter(
      item =>
        item.title === search ||
        item.year === search ||
        item.author.indexOf(search) !== -1 ||
        item.badge.indexOf(search) !== -1 ||
        item.body.indexOf(search) !== -1
    );
    const feed = filtered.map(item => {
      return (
        <div className="card feed" key={item.id}>
          <div className="card-header">
            <h3> {item.title} </h3>
          </div>
          <div className="card-body">
            <p> {item.body} </p>
            <p>
              <span className="badge badge-light">{item.badge}</span>
              <span className="credit"> {item.category} </span>
              <span className="credit">{item.author}</span>
              <span className="credit">{item.date}</span>
            </p>
          </div>
        </div>
      );
    });

    return feed;
  }
}
