import React, {Component} from 'react';
import {Button, Container, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {SessionContext} from "../App";

class Header extends Component {

    showLoginOrLogout(user, token, updateSession) {

        console.log(`(Debug: Header) User: ${user}`);
        console.log(`(Debug: Header) Token: ${token}`);

        let isLoggedIn = (user != null && token != null);

        let button;
        if (isLoggedIn) {
            button = (
                <Button onClick={() => {
                    updateSession(null, null);
                }}>
                    Logout
                </Button>
            );
        } else {
            button = (
                <Button>
                    <Link color="black" to="/login">Login</Link>
                </Button>
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
                        <Link exact to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        {button}
                    </Menu.Item>
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