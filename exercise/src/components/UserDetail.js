import React, { Component } from 'react';
import UserService from '../services/UserService'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';

export default class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // our main user object
            user: {}
        };
    }
    componentDidMount = async () => {
        await this.loadUsers()
    }
    // this calls a function in the userService that gets all the user info for the user id provided in the url params
    loadUsers = async () => {
        try {
            const us = UserService.getUserById(this.props.match.params.id).then(result => result);
            await Promise.all([us]).then(async (response) => {
                this.setState({
                    user: JSON.parse(response[0]).data
                })
            })
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    // here we redirect back to the users list page
    goBackToUsersList = () => {
        this.props.history.push('/users')
    }

    render() {
        return (
            <div>
                <IconButton onClick={() => this.goBackToUsersList()}>
                    <ArrowBackIcon />
                </IconButton>
                <div style={center}>
                    <Grid container style={center}>
                        <Grid container item>
                            <img style={center} src={this.state.user.avatar} alt="image" />
                        </Grid>
                        <Grid container item>
                            <h3 style={center} >{this.state.user.first_name} {this.state.user.last_name}</h3>
                        </Grid>
                        <Grid container item>
                            <h3 style={center}>{this.state.user.email}</h3>
                        </Grid>
                    </Grid>
                </div>
            </div>

        );
    }

}
const center = {
    margin: 'auto',
    width: '50%',
    padding: 10
}

