import React, {Component} from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import MovieHero from "./component/MovieHero";
import TrendingMovieList from "./component/TrendingMovieList";
import {Container} from "semantic-ui-react";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <MovieHero/>
                    <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
                        <TrendingMovieList/>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    };
}

export default App;