import React, {Component} from "react";
import {Container} from "semantic-ui-react";

import MovieHero from "../component/MovieHero";
import TrendingMovieList from "../component/TrendingMovieList";


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <MovieHero/>
                <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
                    <TrendingMovieList/>
                </Container>
            </div>
        );
    }
}

export default Home