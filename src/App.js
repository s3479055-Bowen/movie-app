import React, {Component} from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Container} from 'semantic-ui-react'
import ImageList from "./component/ImageList";
import MovieHero from "./component/MovieHero";


class App extends Component {

    render() {

        return (
            <div className="App">
                <Header/>
                <main>
                    <MovieHero/>
                    <Container textAlign='center' style={{marginTop: '7em', marginBottom: '2em'}}>
                        <ImageList/>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;
