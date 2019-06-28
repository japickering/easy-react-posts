import React, { Component } from "react";
import data from "./data.json";
import Sidebar from "./components/sidebar.js";
import Posts from "./components/posts.js";
import Pagination from "./components/pagination.js";
import "./App.css";

const TITLE = "BLUES NEWS";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "journal",
      currentPage: 1,
      postsPerPage: 10
    };
    this.onNavClick = this.onNavClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChildDateChange = this.onChildDateChange.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
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

  setPageNumber(num) {
    this.setState({ currentPage: num });
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
    const posts = data.filter(
      item =>
        item.title === this.state.search ||
        item.year === this.state.search ||
        item.author.indexOf(this.state.search) !== -1 ||
        item.badge.indexOf(this.state.search) !== -1 ||
        item.body.indexOf(this.state.search) !== -1
    );
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
      <div className='App'>
        <div className='header'>
          <div className='row'>
            <div className='col-sm-3 col-md-2 col-lg-2 mt-1'>
              <h1>{TITLE}</h1>
            </div>
            <div className='col-sm-6 col-md-6 col-lg-4 mb-1'>
              <form onSubmit={this.onSubmit}>
                <input
                  className='search'
                  type='search'
                  onChange={this.onSearchChange}
                  placeholder='Search..'
                  aria-label='Search'
                />
              </form>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-3 col-md-2 col-lg-2'>
            <Sidebar onChildDateChange={this.onChildDateChange} />
          </div>

          <div className='card col-sm-6 col-md-6 col-lg-6'>
            <ul className='nav nav-pills card-header-pills m-2'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  href='!#'
                  onClick={this.onNavClick}
                >
                  Hot topics
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled' href='!#' aria-disabled='true'>
                  Disabled link
                </a>
              </li>
            </ul>

            <Posts posts={currentPosts} />
            <Pagination
              postsPerPage={this.state.postsPerPage}
              totalPosts={posts.length}
              paginate={this.state.setPageNumber}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
