import React, { Component } from 'react';
import '../App.css';
class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="dashboardContent">
            <div className="firstRowCont">
                <div className="container1"></div>
                <div className="container1"></div>
                <div className="container1"></div>
            </div>
            <div className="container1 cont5"></div>
            <div className="container1 cont6 "></div>

        </div>
        );
    }
}

export default HomeContent;