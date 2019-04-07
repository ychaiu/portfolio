import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage-container">  
                <Jumbotron className="jumbotron">
                    <p className="blurb">
                    Hello! I'm Yessenia, a fullstack engineer with a background in GIS and public health. 
                    I love learning new things. Hire me!

                    I enjoy tinkering with new tools. Hello! I'm Yessenia, a fullstack engineer with a background in GIS and public health. 
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Homepage;