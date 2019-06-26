import React, { Component } from "react";
import "./App.css";
import Feed from "./components/feed.js";
import Sidebar from "./components/sidebar.js";
const TITLE = "BLUES NEWS";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "journal"
    };
    this.onNavClick = this.onNavClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChildDateChange = this.onChildDateChange.bind(this);
  }

  onNavClick() {
    this.setState({ search: "journal" });
  }

  onSearchChange(e) {
    this.setState({ search: e.target.value });
  }

  onChildDateChange(val) {
    this.setState({ search: val });
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
              <h1>{TITLE}</h1>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              <form className="form-inline" onSubmit={this.onSubmit}>
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search.."
                  onChange={this.onSearchChange}
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <Sidebar onChildDateChange={this.onChildDateChange} />
          </div>

          <div className="card col-sm-6 col-md-6 col-lg-6">
            <ul class="nav nav-pills card-header-pills m-2">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  onClick={this.onNavClick}
                >
                  Hot topics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true">
                  Disabled link
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

export default App;
