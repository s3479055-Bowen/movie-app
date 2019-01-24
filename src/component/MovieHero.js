import React from 'react';
import {Container, Header, Responsive, Segment} from "semantic-ui-react";

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

const MovieHero = () => (

    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
            textAlign='center'
            style={{minHeight: 700, padding: '1em 0em'}}
            vertical>
            <Container text>
                <Header
                    as='h1'
                    content='My Cloud Movie App'
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em',
                    }}
                />
                <Header
                    as='h2'
                    content='Explore the best movies from the cloud.'
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em',
                    }}
                />
            </Container>
        </Segment>
    </Responsive>
);

export default MovieHero