import React, { Component } from "react";
import "./App.css";
import Feed from "./components/feed.js";
import Sidebar from "./components/sidebar.js";

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
            <Sidebar search={this.state.search} />
          </div>
          <div className="content col-sm-6 col-md-6 col-lg-6">
            <ul className="nav nav-tabs mb-2">
              <li className="nav-item">
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

export default App;
