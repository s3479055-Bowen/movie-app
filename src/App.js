// library import
import React from 'react';
import {Route, Switch} from "react-router-dom";

// local import
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Movie from "./page/Movie";
import User from "./page/User";
import LoginForm from "./page/Login";

function App() {

    return (
        <div className="App">
            <Header/>
            <div style={{minHeight: '30em'}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/movie/:movieId" component={Movie}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/user" component={User}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
