import React, {Component} from 'react';
import {Button, Container, Image, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {SessionContext} from "../App";

class Header extends Component {

    showLoginOrLogout(user, token, updateSession) {

        console.log(`(Debug: Header) User: ${user}`);
        console.log(`(Debug: Header) Token: ${token}`);

        let isLoggedIn = (user && token);

        let rightSection;
        if (isLoggedIn) {
            rightSection = (
                <Menu.Item position='right'>
                    <Button onClick={() => updateSession({}, "")}>
                        Logout
                    </Button>
                    <Button style={{marginLeft: '0.5em'}}>
                        <NavLink style={{color: 'rgba(0, 0, 0, 0.6)'}} to="/user">
                            Profile
                        </NavLink>
                    </Button>
                </Menu.Item>
            );
        } else {
            rightSection = (
                <Menu.Item as='a' position='right'>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to="/login">
                        Login
                    </NavLink>
                </Menu.Item>
            );
        }

        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src='/logo.png' style={{marginRight: '1.5em'}}/>
                        My Movie App
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <NavLink activeStyle={{fontWeight: 'bold'}} exact to="/">Home</NavLink>
                    </Menu.Item>
                    {rightSection}
                </Container>
            </Menu>
        );
    }

    render() {
        return (
            <SessionContext.Consumer>
                {({user, token, updateSession}) => (this.showLoginOrLogout(user, token, updateSession))}
            </SessionContext.Consumer>
        );
    }
}

export default Header