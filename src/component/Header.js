import React, {Component} from 'react';
import {Button, Container, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    componentDidMount() {

    }

    render() {
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
                        <Button as='a'>
                            Log in
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}


export default Header