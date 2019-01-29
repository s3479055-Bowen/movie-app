import React, {Component} from "react";
import {Button, Card, Dropdown, Form, Grid, Icon} from "semantic-ui-react";
import {Redirect} from "react-router";
import {SessionContext} from "../App";

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    handleChange = (e, {value}) => this.setState({value});

    checkSession(user, token) {

        if (!user || !token) {
            return <Redirect to="/"/>;
        }

        console.log(`User: ${user.username}`);
        console.log(`Token: ${token}`);

        return (
            <Grid columns={3} style={{marginTop: '7em', marginBottom: '2em', padding: '0em 6.5em'}}>
                <Grid.Column width={5}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{user.firstname} {user.lastname}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{user.username} ({user.email})</span>
                            </Card.Meta>
                            <Card.Description>{user.firstname} is a movie-lover on the Cloud.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user outline'/>
                                {user.gender} {user.dob}({user.age} years old)
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Update Profile
                            </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Form>
                                <Form.Input
                                    name="firstname"
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder={user.firstname}
                                    onChange={this.handleChange}/>
                                <Form.Input
                                    name="lastname"
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder={user.lastname}
                                    onChange={this.handleChange}/>
                                <Form.Input
                                    name="email"
                                    fluid icon='mail'
                                    iconPosition='left'
                                    placeholder={user.email}
                                    onChange={this.handleChange}/>
                                <Form.Input
                                    name="dob"
                                    fluid icon='calendar alternate outline'
                                    iconPosition='left'
                                    placeholder={user.dob}
                                    onChange={this.handleChange}/>
                                <Form.Field>
                                    <Dropdown
                                        placeholder={user.gender}
                                        fluid search selection
                                        options={[
                                            {
                                                value: 'Male',
                                                text: 'Male',
                                                label: {color: 'blue', empty: true, circular: true}
                                            },
                                            {
                                                value: 'Female',
                                                text: 'Female',
                                                label: {color: 'red', empty: true, circular: true}
                                            }
                                        ]}
                                    />
                                </Form.Field>
                                <Button
                                    color='black'
                                    fluid size='large'
                                    // disabled={this.state.isLoading}
                                    // loading={this.state.isLoading}
                                    content='Update'/>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                Update Password
                            </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Form>
                                <Form.Input
                                    name="password"
                                    fluid icon='lock'
                                    iconPosition='left'
                                    placeholder='New Password'
                                    type='password'
                                    onChange={this.handleChange}/>
                                <Form.Input
                                    name="confirm_password"
                                    fluid icon='lock'
                                    iconPosition='left'
                                    placeholder='Confirm Password'
                                    type='password'
                                    onChange={this.handleChange}/>

                                <Button
                                    color='black'
                                    fluid size='large'
                                    // disabled={this.state.isLoading}
                                    // loading={this.state.isLoading}
                                    content='Update'/>
                            </Form>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        );
    }

    render() {
        return (
            <SessionContext.Consumer>
                {({user, token}) => (this.checkSession(user, token))}
            </SessionContext.Consumer>
        );
    }
}

export default User