import React, {Component} from 'react'
import {Button, Container, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import {SessionContext} from "../App";
import {loginData, loginResponse} from "../mockupData";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLoading: false,
            error: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event, updateSession) {

        event.preventDefault();

        this.setState({
            isLoading: true
        });

        // validation
        if (!this.state.username || !this.state.password) {
            this.setState({
                isLoading: false,
                error: "Invalid username or password"
            });
            return;
        }

        this.setState({
            error: ""
        });


        // let formData = new FormData();
        // formData.append("username", this.state.username);
        // formData.append("password", this.state.password);

        // fetch("base_url/user/login",
        //     {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/application/json; charset=UTF-8"
        //         },
        //         body: formData
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         // save user object and token to context
        //         this.setState({
        //             isLoading: false
        //         });
        //         this.context.updateSession(data.user, data.token);
        //         this.props.history.push('/');
        //     });


        setTimeout(() => {

            if (this.state.username !== loginData.username
                || this.state.password !== loginData.password) {
                this.setState({
                    error: "Invalid username or password"
                });
            } else {
                console.log("handleSubmit");
                updateSession(loginResponse.user, loginResponse.token);
                this.props.history.push('/')
            }

            this.setState({
                isLoading: false
            });
        }, 1500)
    }

    render() {

        return (
            <SessionContext.Consumer>
                {({user, token, updateSession}) => (
                    <Container style={{marginTop: '7em', marginBottom: '2em'}}>
                        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                            <Grid.Column style={{maxWidth: 450}}>
                                <Header as='h2' color='black' textAlign='center'>
                                    Log-in to your account
                                </Header>
                                <Form size='large' onSubmit={(event) => this.handleSubmit(event, updateSession)}>
                                    <Segment stacked>
                                        <Form.Input
                                            name="username"
                                            fluid icon='user'
                                            iconPosition='left'
                                            placeholder='Username'
                                            onChange={this.handleChange}/>
                                        <Form.Input
                                            name="password"
                                            fluid icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            onChange={this.handleChange}/>
                                        <Button
                                            color='black'
                                            fluid size='large'
                                            disabled={this.state.isLoading}
                                            loading={this.state.isLoading}
                                            content='Login'/>
                                    </Segment>
                                </Form>
                                {this.state.error ? <Message color='red'>Error: {this.state.error}</Message> : ''}
                            </Grid.Column>
                        </Grid>
                    </Container>
                )}
            </SessionContext.Consumer>
        );
    }
}

export default Login