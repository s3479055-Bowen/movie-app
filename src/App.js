import React, {Component} from 'react';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Container} from 'semantic-ui-react'
import SmallImageList from "./component/SmallImageList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Container image style={{marginTop: '7em', marginBottom: '2em'}}>
                        <SmallImageList/>
                    </Container>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default App;
