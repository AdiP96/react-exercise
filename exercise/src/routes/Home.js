import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  logIn = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  logOut = () => {
    this.setState({
      isLoggedIn: false
    })
  }
  // here I added the login and logout functions and the isLoggedIn flag and sent them as props to TopBar and HomeContent and so they will have the same data and be changed at the same time
  render() {
    return (
      <div className="App">
        <TopBar isLoggedIn={this.state.isLoggedIn} logIn={this.logIn} logOut={this.logOut} />
        <HomeContent  isLoggedIn={this.state.isLoggedIn} logIn={this.logIn} logOut={this.logOut} />
      </div>
    );
  }
}

