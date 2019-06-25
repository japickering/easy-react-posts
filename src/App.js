import React, { Component } from "react";
import "./App.css";

const loremipsum =
  "Documentation and loremipsums for typography, including global settings, headings, body text, lists, and more.";
const example =
  "Diabetes is a lifelong condition that causes a person's blood sugar level to become too high. There are 2 main types of diabetes: type 1 diabetes where the body's immune system attacks and destroys the cells that produce insulin.";

const mockdata = [
  {
    id: 1,
    date: "01/06/2019",
    author: "jessica jones",
    title: "article",
    body: loremipsum,
    badge: "journal article",
    category: "example"
  },
  {
    id: 2,
    date: "02/06/2019",
    author: "matt murdock",
    title: "diabetes",
    body: example,
    badge: "journal article",
    category: "example"
  },
  {
    id: 3,
    date: "24/06/2019",
    author: "tony stark",
    title: "article",
    body: loremipsum,
    badge: "journal article",
    category: "example"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.onNavClick = this.onNavClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNavClick() {
    this.setState({ search: "journal" });
  }

  onSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    if (this.state.search.length > 2) {
      console.log("search: " + this.state.search);
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-2">
              <h1>OSSUS</h1>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <form onSubmit={this.onSubmit}>
                <input
                  type="search"
                  className="search"
                  placeholder="Search.."
                  onChange={this.onSearchChange}
                  value={this.state.search}
                />
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="content col-sm-6 col-md-6 col-lg-6">
            <ul class="nav nav-tabs mb-2">
              <li class="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  onClick={this.onNavClick}
                >
                  Articles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Casual Search
                </a>
              </li>
            </ul>
            {this.state.search.length > 2 && (
              <Feed search={this.state.search} />
            )}
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

class Feed extends Component {
  render() {
    const { search } = this.props;
    const filtered = mockdata.filter(
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
            <h3>{item.title}</h3>
          </div>
          <div className="row">
            <p>{item.body}</p>
          </div>
          <div className="row">
            <p>
              <span className="badge badge-light">{item.badge}</span>
              <span className="credit">{item.category}</span>
              <span className="credit">
                {item.author} {item.date}
              </span>
            </p>
          </div>
        </div>
      );
    });

    return feed;
  }
}

export default App;
