import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';



class Header extends Component {

    render() {
        return(
                <Navbar className="navbar-light"  expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <h3>SPOTLIGHT</h3>
                        </NavbarBrand>
                    </div>
                </Navbar>
                
            
        );
    }
}

export default Header;