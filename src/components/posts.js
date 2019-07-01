import React, { Component } from "react";
// import Typist from "react-typist";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.ucFirst = this.ucFirst.bind(this);
  }
  ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => (
          <div key={post.id} className='card posts bg-light mb-3'>
            <div className='card-body'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{post.body}</p>
            </div>
            <div>
              <span className='badge badge-secondary'>{post.category}</span>
              <span className='credit'>{post.author}</span>
              <span className='credit'>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
