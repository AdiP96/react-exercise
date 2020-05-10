import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "Adrian",
        lastName: "Petran"
      }
    }
  }
  render() {
    return (
      <header style={{
        height: 48,
        width: '100%',
        backgroundColor: 'rgb(102,63,180)',
        color: 'white',
        padding: '6px 10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1 }} src="favicon-196x196.png" />
          </Link>
        </div>
        <div>
          {'Modus Create'}
        </div>
        <div style={{ float: 'left', color: 'white', flex: 1 }} />
        <div style={{ float: 'right', paddingRight: 20 }}>

          {
            this.props.isLoggedIn ?
              <div style={{ display: 'flex' }}>
                <div style={{
                  marginTop: 8,
                  textAlign: 'center',
                  background: '#dcdcdc',
                  lineHeight: '35px',
                  height: '35px',
                  width: '35px',
                  borderRadius: '50%',
                  color: 'black'
                }} ><small><strong>
                    {this.state.user.firstName.charAt(0)}{this.state.user.lastName.charAt(0)}</strong></small>
                </div>
                <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={this.props.logOut}>Logout</Button>
              </div>
              : <div>
                <Button onClick={this.props.logIn} style={{ backgroundColor: 'blue', color: 'white' }}>Login</Button>
                <Button onClick={this.props.logIn} style={{ backgroundColor: 'red', color: 'white' }}>Signup</Button>
              </div>
          }
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: 'left',
    margin: 8
  }
};

