import React, { Component } from "react";
import myJSON from "./data.json";

// Components
import Sidebar from "./components/sidebar.js";
import Posts from "./components/posts.js";
import Pagination from "./components/pagination.js";

// Styles
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      currentPage: 1,
      postsPerPage: 10,
      loading: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAlbumClick = this.handleAlbumClick.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
  }

  componentDidMount() {
    // const gist = "https://gist.githubusercontent.com/japickering/7d45bfea260ec26f9d1fc075441fc8fd/raw/";    
    // fetch("https://cors-anywhere.herokuapp.com/" + gist)
    // fetch(data)
    // .then(function(res) {
    //   return res.json();
    // })
    // .catch(error => {
    //   console.error(error.status);
    // })
    // .then(res => {
    //   this.setState({ 
    //     res: res, 
    //     loading: false 
    //   });
    //   console.log(res);
    // });
    this.setState({ 
      data: myJSON, 
      loading: false
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ search: event.target.value })
  }

  handleReset() {
    this.setState({ search: "" });
  }

  handleAlbumClick() {
    this.setState({ search: "album" });
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  onDateChange(val) {
    this.setState({ search: val });
  }

  setPageNumber(num) {
    this.setState({ currentPage: num });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="spinner-border m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (!this.state.loading && this.state.data === undefined) {
      return (
        <div>no data available</div>
      )
    }

    if (!this.state.loading && this.state.data !== undefined) {
      let posts = this.state.data.data.map((item) => {
        return item;
      });
      const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
      const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
      const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
      return (
        <div className="App">
          <div className="header">
            <div className="row">
              <div className="col col-sm-12 col-md-3 col-lg-6 col-xl-2 mr-2">
                <h1>My Dashboard</h1>
              </div>
              <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <input
                    className="search mr-2" 
                    type="text"
                    name="search"
                    onChange={this.handleChange}
                    placeholder="enter search.."
                    aria-label="Search"
                    value={this.state.search}
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary mb-1 text-white" 
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
  
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <Sidebar onDateChange={this.onDateChange} />
            </div>
  
            <div className="card col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <ul className="nav nav-pills m-2">
                <li className="nav-item">
                  <button className="nav-link" onClick={this.handleReset}>
                    All Topics
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    href="./"
                    aria-disabled="true"
                    onClick={this.handleAlbumClick}
                  >
                    Albums
                  </button>
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
