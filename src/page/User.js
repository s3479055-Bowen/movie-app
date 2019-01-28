import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import {Redirect} from "react-router";
import {SessionContext} from "../App";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static checkSession(user, token) {

        console.log(`User: ${user.username}`);
        console.log(`Token: ${token}`);

        if (!user || !token) {
            return <Redirect to="/"/>;
        }

        return (
            <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
                <h1>User Page: {user.username}</h1>
            </Container>
        );
    }

    render() {
        return (
            <SessionContext.Consumer>
                {({user, token}) => (User.checkSession(user, token))}
            </SessionContext.Consumer>
        );
    }
}

export default User