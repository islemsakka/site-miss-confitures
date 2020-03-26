import React, { Component } from 'react';
import '../App.css';

import HomeContent from './home-content';
import Navigbar from './navbar';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (<div>
          
            <HomeContent />
            

        </div>
        );

    }
}

export default Home;