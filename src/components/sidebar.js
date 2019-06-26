import React, { Component } from "react";
// import data from "../data.json";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [
        { id: 1, value: "all", label: "all time" },
        { id: 2, value: "last5", label: "last 5 years" },
        { id: 3, value: "lastyear", label: "last year" },
        { id: 4, value: "lastmonth", label: "last month" }
      ]
    };
  }
  render() {
    const dates = this.state.dates.map(item => {
      return (
        <div key={item.id} className="date-filter">
          <input
            id={"radio" + item.id}
            type="radio"
            name="option"
            value={item.value}
          />
          <label htmlFor={"radio" + item.id}>{item.label}</label>
        </div>
      );
    });
    return (
      <div className="sidebar">
        <div className="accordion">
          <div className="card">
            <div className="card-header" id="heading1">
              <button
                className="btn btn-tertiary"
                type="button"
                data-toggle="collapse"
                data-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                Dates
              </button>
            </div>

            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <div className="card-body">{dates}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
