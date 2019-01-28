import React, {Component} from "react";
import {Container, Header, Image, Message} from "semantic-ui-react";
import {getMovie} from "../mockupData";
import ReactPlayer from "react-player";


class Movie extends Component {

    constructor(props) {
        super(props);
        this.movieId = props.match.params.movieId;
        this.state = {
            movie: {}
        };
    }

    componentDidMount() {

        // get movie from api
        // fetch(`base_url/movie/${this.movieId}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             movie: data
        //         })
        //     });

        // mock up data
        setTimeout(() => {
            this.setState({
                movie: getMovie(this.movieId)
            })
        }, 1500)
    }

    render() {
        return (
            <Container style={{marginTop: '7em', marginBottom: '2em'}}>
                <Image size="medium" src={this.state.movie.posterUrl}/>
                <Header
                    as='h2'
                    content={this.state.movie.title}
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'bold',
                        marginTop: '1.5em',
                    }}
                />
                <Header
                    as='h3'
                    content="Director:"
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'normal',
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h3'
                    content={this.state.movie.director}
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h3'
                    content="Stars:"
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'normal',
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h3'
                    content={this.state.movie.stars}
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h3'
                    content="Description:"
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'normal',
                        marginTop: '1em',
                    }}
                />
                <Header
                    as='h3'
                    content={this.state.movie.description}
                    style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        marginTop: '1em',
                    }}
                />

                <ReactPlayer url={this.state.movie.trailerUrl}/>
            </Container>
        );
    }
}

export default Movie