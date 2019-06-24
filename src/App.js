import React, { Component } from 'react';
import './App.css';

const data = [
  {id: 1, date: '01/06/2019', title: 'article 1', image: 'cover.png', alt: 'alt text', copy: 'lorem ipsum'},
  {id: 2, date: '02/06/2019', title: 'article 2', image: 'cover.png', alt: 'alt text', copy: 'lorem ipsum'},
  {id: 3, date: '24/06/2019', title: 'article 3', image: 'cover.png', alt: 'alt text', copy: 'lorem ipsum'}
];

class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="row">
          <div className="border-white col-sm-3 col-md-6 col-lg-3">
            <h1>OSSUS</h1>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3">
            <input type="search" className="search" placeholder="Search.."></input>
          </div>
        </div>
      </div>
    )
  }
}

class Sidebar extends Component {

  render(){
    return (
      <div className="sidebar">
        <form className="dateForm">
          <h3>Articles by Date</h3>
          <div>
            <input id="radio1" type="radio" name="choice" value="all" />
            <label for="radio1">All time</label>
          </div>
          <div>
            <input id="radio2" type="radio" name="choice" value="last5" />
            <label for="radio2">Last 5 years</label>
          </div>
          <div>
            <input id="radio3" type="radio" name="choice" value="lastyear" />
            <label for="radio3">Last year</label>
          </div>
         <div>
         <input id="radio4" type="radio" name="choice" value="lastmonth" />
          <label for="radio4">Last month</label>
         </div>
        </form>
      </div>
    );
  }
}

class Feed extends Component {

  render(){
    const list = data.map(function(item) {
      return (
        <div className="container">
          <div className="row">
            <h3>{item.title}</h3>
          </div>
          <div className="row">
            <img className="banner" src={item.image} alt={item.alt} />
          </div>
          <div className="row">
            <p>{item.copy}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="feed">
        {list}
      </div>
    );
  }
}

class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-4 col-lg-2">
              <Sidebar />
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <Feed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
