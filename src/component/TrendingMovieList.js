import React, {Component} from 'react';
import {Grid, Image} from "semantic-ui-react";
import {moviesData} from "../data/service";

class TrendingMovieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        };
    }

    componentDidMount() {

        this.setState({
            isLoading: true
        });

        // get trending movies from api
        // fetch("")
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             isLoading: false,
        //             movies: data
        //         })
        //     });

        // mock up data
        setTimeout(() => {
            this.setState({
                isLoading: false,
                movies: moviesData
            })
        }, 1500)
    }

    render() {

        if (this.state.isLoading) {
            return <p>Loading...</p>
        }

        return (
            <Grid columns={5}>
                {this.state.movies.map(movie =>
                    <Grid.Column key={movie.id}>
                        <Image src={movie.posterUrl}/>
                    </Grid.Column>
                )}
            </Grid>
        );
    }
}

export default TrendingMovieList