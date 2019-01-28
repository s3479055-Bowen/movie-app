// library import
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

// local import
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Movie from "./page/Movie";
import User from "./page/User";
import Login from "./page/Login";

export const SessionContext = React.createContext({
    user: {},
    token: "",
    updateSession: (user, token) => {
        this.user = user;
        this.token = token;
    }
});

class App extends Component {

    constructor(props) {
        super(props);

        console.log("App constructor called!");

        this.updateSession = (user, token) => {
            this.setState({
                user: user,
                token: token
            });

            if (!user && !token) {
                sessionStorage.setItem("user", user);
                sessionStorage.setItem("token", token);
            } else {
                sessionStorage.clear();
            }
        };

        this.state = {
            user: sessionStorage.getItem("user"),
            token: sessionStorage.getItem("token"),
            updateSession: this.updateSession
        }
    }

    render() {
        return (
            <SessionContext.Provider value={this.state}>
                <div className="App">
                    <Header/>
                    <div style={{minHeight: '30em'}}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/movie/:movieId" component={Movie}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/user" component={User}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </SessionContext.Provider>
        );
    }
}

App.contextType = SessionContext;

export default App;
