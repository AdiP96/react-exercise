import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserService from '../services/UserService'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // current page number
            pageNumber: 1,
            // our total user list number of pages
            totalPages: null,
            // our user list 
            users: [],
            // a flag to see if the current page is the first page
            firstPage: true,
            // a flag to see if the current page is the last page
            lastPage: false,

        };
    }
    componentDidMount = async () => {
        await this.loadUsers()
    }
    // here we load our users list for the current page number and set the first and last page flags
    loadUsers = async () => {
        try {
            const us = UserService.getUsers(this.state.pageNumber).then(result => result);
            await Promise.all([us]).then(async (response) => {
                let resp = JSON.parse(response[0])
                let firstPage = false
                let lastPage = false
                if (this.state.pageNumber === 1) {
                    firstPage = true
                }
                if (resp.total_pages === this.state.pageNumber) {
                    lastPage = true
                }
                this.setState({
                    users: resp.data,
                    totalPages: resp.total_pages,
                    firstPage: firstPage,
                    lastPage: lastPage
                })
            })
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }
    // change to the previous user page
    previousPage = async () => {
        if (this.state.pageNumber > 1) {
            await this.setState({
                pageNumber: --this.state.pageNumber
            })
            this.loadUsers();
        }
    }
    // change to the next user page
    nextPage = async () => {
        if (this.state.totalPages > this.state.pageNumber) {
            await this.setState({
                pageNumber: ++this.state.pageNumber
            })
            this.loadUsers();
        }
    }
    // this opens the user detail page for the given id
    openUserDetails = (id) => {
        this.props.props.history.push('/users/' + id)
    }
    render() {
        return (
            <div style={center}>
                <div style={{ textAlign: 'center' }}>
                    <h3>User list</h3>
                </div>
                <List>
                    {this.state.users.map((user, index) => {
                        return (
                            <ListItem style={itemStyle} key={user.id} button onClick={() => this.openUserDetails(user.id)}>
                                <ListItemText
                                    primary={user.first_name + ' ' + user.last_name}
                                    secondary={user.email}
                                />
                            </ListItem>
                        )
                    })}
                </List>
                <IconButton disabled={this.state.firstPage} onClick={() => this.previousPage()}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton disabled={this.state.lastPage} onClick={() => this.nextPage()}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>
        );
    }

}
const center = {
    margin: 'auto',
    width: '50%',
    padding: 10
}
const itemStyle = {
    backgroundColor: 'lightBlue',
    marginTop: 2,
    borderRadius: 10,
    cursor: 'pointer'
}