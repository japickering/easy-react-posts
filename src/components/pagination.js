import React, { Component } from "react";
import data from "../data.json";

export default class Pagination extends Component {
  render() {
    const { search, onChildDateChange } = this.props;
    const filtered = data.filter(
      item =>
        item.title === search ||
        item.year === search ||
        item.author.indexOf(search) !== -1 ||
        item.badge.indexOf(search) !== -1 ||
        item.body.indexOf(search) !== -1
    );
    // setPages = totalPosts / postsPerPage
    const postsPerPage = 5;
    const totalPosts = filtered.length;
    const pages = Math.ceil(totalPosts / postsPerPage);
    console.log("pages: " + pages);

    let list = [];
    for (let i = 1; i <= pages; i++) {
      list.push(
        <a className='page-link' href='#'>
          {i}
        </a>
      );
    }

    return (
      <div>
        {totalPosts >= postsPerPage && (
          <nav aria-label='Page navigation'>
            <ul className='pagination'>{list}</ul>
          </nav>
        )}
      </div>
    );
  }
}
