import React, {Component} from "react";
import {Container} from "semantic-ui-react";
import {Redirect} from "react-router";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        let user = this.context.user;
        if (user == null) {
            return <Redirect to="/"/>;
        }

        return (
            <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
                <h1>User Page</h1>
            </Container>
        );
    }
}

export default User