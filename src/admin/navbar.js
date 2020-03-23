import React, { Component } from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import '../App.css';
class Navigbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Navbar className="navBar">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <i class="fas fa-home"></i>
                <i class="far fa-comments"></i>
                <i class="far fa-bell"></i>



            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navigbar;


/** <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */