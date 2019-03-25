import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Nav className="flex-column">
                    <Image src="holder.js/171x180" roundedCircle />
                    <Nav.Link href ="/About">About Me</Nav.Link>
                    <Nav.Link href ="/Portfolio">Portfolio</Nav.Link>
                    <Nav.Link href ="/Resume">Resume</Nav.Link>
                    <Nav.Link href ="/Blog">Blog</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default Sidebar;