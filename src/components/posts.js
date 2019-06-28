import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map(post => (
          <div key={post.id} className='card posts'>
            <div className='card-body'>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <div className='card-actions'>
              <span className='badge-light'>{post.badge}</span>
              <span className='credit'>{post.category}</span>
              <span className='credit'>{post.author}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
