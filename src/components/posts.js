import React, { Component } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.initialCap = this.initialCap.bind(this);
    this.getPlaylist = this.getPlaylist.bind(this);
  }

  initialCap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getPlaylist(post) {
    let plist = post.plist.map((song) => {
      return (
        <li key={post.category + "-" + post.author + "-" + post.date}>
          <a className="btn-link" href={post.spotify} rel="noopener noreferrer" target="_blank">
            {this.initialCap(song)}
          </a>
        </li>
      );
    });
    return plist;
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map((post) => (
          <div className="card posts bg-light mb-3">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              {!post.plist && <p className="card-text">{post.body}</p>}
              {post.plist && (
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <img className="cover-art" src={post.img} alt="" />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <h3>Listen on Spotify</h3>
                    <ul className="playlist">{this.getPlaylist(post)}</ul>
                  </div>
                </div>
              )}
            </div>
            <div>
              <span className="badge badge-secondary">{post.category}</span>
              <span className="credit">{post.author}</span>
              <span className="credit">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
