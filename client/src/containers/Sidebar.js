import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Blog from '../components/Blog';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="sidebar-container">
                    <Nav fill className="flex-column sidebar-content">
                        <Image className="sidebar-item profile-pic" src="https://res.cloudinary.com/ychaiu/image/upload/v1553490477/portfolio_site/profile_pic.jpg" />
                        <div className="sidebar-item blurb">
                        Hello! I'm Yessenia, a fullstack engineer with a background in GIS and public health. 
                        I have a love for learning.
                        </div>
                        <NavLink className="sidebar-item" to="/about">About Me</NavLink>
                        <NavLink className="sidebar-item" to="/projects">Projects</NavLink>
                        <NavLink className="sidebar-item" to="/resume">Resume</NavLink>
                        <NavLink className="sidebar-item" to="/blog">Blog</NavLink>
                    </Nav>
                </div>
                <Switch>
                    <Route exact path="/About" component={About}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/blog" component={Blog}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Sidebar;