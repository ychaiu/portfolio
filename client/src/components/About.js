import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="main-content-container">
                <VerticalTimeline className="timeline-container">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2011 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">Web Developer & GIS Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">Oakland, CA</h4>
                        <p>
                        Web Development of Interactive Web Maps
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        position="right"
                    >
                        <h3 className="vertical-timeline-element-title">GIS Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">Oakalnd, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        position="left"
                    >
                        <h3 className="vertical-timeline-element-title">GIS Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">Oakalnd, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2016 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        position="right"
                    >
                        <h3 className="vertical-timeline-element-title">GIS Analyst</h3>
                        <h4 className="vertical-timeline-element-subtitle">Oakalnd, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    </VerticalTimeline>
            </div>
        )
    }
}

export default About;