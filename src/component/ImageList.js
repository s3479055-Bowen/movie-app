import React from 'react';
import {Image} from "semantic-ui-react";

import moviesData from "../data/moviesData"

const movieImages = moviesData.map(movie => <Image src={movie.posterUrl}/>);

const ImageList = () => (
    <Image.Group size='small'>
        {movieImages}
    </Image.Group>
);

export default ImageList