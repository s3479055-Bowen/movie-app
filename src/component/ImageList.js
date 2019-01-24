import React from 'react';
import {Image} from "semantic-ui-react";

import {getTrendingMovies} from "../data/service"

class ImageList extends React.Component {

    getMovieImages() {
        return getTrendingMovies().map(
            movie => <Image key={movie.id} src={movie.posterUrl}/>);
    }

    render() {
        return (
            <Image.Group size='small'>
                {this.getMovieImages()}
            </Image.Group>
        )
    }
}

export default ImageList