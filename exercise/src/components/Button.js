import React, { Component } from 'react';

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};
// added an onClick functionality for this component
export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button style={{ ...styles.button, ...this.props.style }} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

