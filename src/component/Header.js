import React from 'react';
import {Button, Container, Image, Menu} from "semantic-ui-react";

const Header = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{marginRight: '1.5em'}}/>
                My Movie App
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item position='right'>
                <Button as='a'>
                    Log in
                </Button>
                <Button as='a' style={{marginLeft: '0.5em'}}>
                    Sign Up
                </Button>
            </Menu.Item>
        </Container>
    </Menu>
);

export default Header