import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
export default class HomeContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.isLoggedIn ? <div>
            <Button onClick={this.props.logOut}>Logout</Button>
            <Link to="/users">Go to users list</Link></div>
            : <Button onClick={this.props.logIn}>Login</Button>
        }
      </div>
    );
  }
}
