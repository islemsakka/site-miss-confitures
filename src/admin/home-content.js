import React, { Component } from 'react';
import '../App.css';
import Calendar from './sidebar-components/calendar';
class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="dashboardContent">
        <Calendar/>

        </div>
        );
    }
}

export default HomeContent;