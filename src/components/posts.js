import React, { Component } from "react";

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
          <div key={post.id} className='card posts'>
            <div className='card-body'>
              <h3>{post.title}</h3>
              <p>{this.ucFirst(post.body)}</p>
            </div>
            <div className='card-actions'>
              <span className='badge-light'>{post.category}</span>
              <span className='credit'>{post.author}</span>
              <span className='credit'>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
