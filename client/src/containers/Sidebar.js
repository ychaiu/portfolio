import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <Nav fill className="flex-column sidebar-content">
                <Image className="sidebar-item profile-pic" src="https://res.cloudinary.com/ychaiu/image/upload/v1553490477/portfolio_site/profile_pic.jpg" />
                <Nav.Link className="sidebar-item" href ="/About">About Me</Nav.Link>
                <Nav.Link className="sidebar-item" href ="/Portfolio">Portfolio</Nav.Link>
                <Nav.Link className="sidebar-item" href ="/Resume">Resume</Nav.Link>
                <Nav.Link className="sidebar-item" href ="/Blog">Blog</Nav.Link>
            </Nav>
        )
    }
}

export default Sidebar;