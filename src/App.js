import React, { Component } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    date: "01/06/2019",
    title: "article 1",
    copy: "article summary"
  },
  {
    id: 2,
    date: "02/06/2019",
    title: "article 2",
    copy: "article summary"
  },
  {
    id: 3,
    date: "24/06/2019",
    title: "article 3",
    copy: "article summary"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="row">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <h1>OSSUS</h1>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <input type="search" className="search" placeholder="Search.." />
          </div>
        </div>
      </div>
    );
  }
}

class Sidebar extends Component {
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
            name="filter"
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
              <h3>
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Dates
                </button>
              </h3>
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

class Feed extends Component {
  render() {
    const list = data.map(item => {
      return (
        <div key={item.id} className="container">
          <div className="row">
            <h3>{item.title}</h3>
          </div>
          <div className="row">
            <p>{item.copy}</p>
          </div>
        </div>
      );
    });

    return <div className="feed">{list}</div>;
  }
}

export default App;
