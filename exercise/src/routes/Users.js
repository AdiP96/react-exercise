import React, { Component } from 'react';
import UsersList from '../components/UsersList';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
        <UsersList props={this.props} />
      </div>
    );
  }
}

