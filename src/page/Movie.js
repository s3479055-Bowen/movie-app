import React from "react";
import {Container} from "semantic-ui-react";

function Movie({match}) {

    return (
        <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
            <h1>Movie Page {match.params.movieId}</h1>
        </Container>
    );
}

export default Movie