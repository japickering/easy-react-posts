import React, { Component } from "react";
// import data from "./data.json";
import Sidebar from "./components/sidebar.js";
import Posts from "./components/posts.js";
import Pagination from "./components/pagination.js";
import "./App.css";

const TITLE = "BLUES NEWS";
const searchDefault = "topic";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      results: [],
      search: searchDefault,
      currentPage: 1,
      postsPerPage: 10
    };
    this.fetchFromGist = this.fetchFromGist.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChildDateChange = this.onChildDateChange.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
  }

  componentDidMount() {
    this.fetchFromGist();
  }

  // Load our JSON from a Gist on Github
  fetchFromGist() {
    const URI =
      "https://gist.githubusercontent.com/japickering/386bc527b6800043f4914e84bb73d2c3/raw/";
    fetch(`https://cors-anywhere.herokuapp.com/${URI}`)
      .then(function(res) {
        return res.json();
      })
      .catch(error => {
        console.error(error);
      })
      .then(results => {
        this.setState({ results: results, loading: false });
      });
  }

  onNavClick() {
    this.setState({ search: searchDefault });
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
    // this.setState({
    //   isLoading: true
    // });
    if (this.state.search.length > 2) {
      console.log("search: " + this.state.search);
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <h1>loading..</h1>;
    }
    if (!this.state.loading) {
      const data = this.state.results;
      const posts = data.filter(
        item =>
          item.title === this.state.search ||
          item.year === this.state.search ||
          item.author.indexOf(this.state.search) !== -1 ||
          item.category.indexOf(this.state.search) !== -1 ||
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
                    href='#'
                    onClick={this.onNavClick}
                  >
                    All Topics
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link disabled'
                    href='!#'
                    aria-disabled='true'
                  >
                    Disabled link
                  </a>
                </li>
              </ul>

              <Posts posts={currentPosts} />
              <Pagination
                postsPerPage={this.state.postsPerPage}
                totalPosts={posts.length}
                setPageNumber={this.setPageNumber}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
