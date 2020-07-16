import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

 class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModal1Open: false,
            isModal2Open:false

        };
        
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);

      

    }

    toggleModal1() {
        this.setState({
          isModal1Open: !this.state.isModal1Open
        });
      }
      handleLogin(event) {
        this.toggleModal1();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    // ***************************************************

    toggleModal2() {
        this.setState({
          isModal2Open: !this.state.isModal2Open
        });
      }
    
      handleSignUp(event) {
        this.toggleModal2();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }
    // **************************************************
    render() {
        return (
            <>
            <Navbar className="navbar-light"  expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                    <h3>SPOTLIGHT</h3>
                </NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal1}><span className="fa fa-sign-in fa-md"></span> Login</Button>
                    </NavItem>
                    <NavItem>
                        <Button outline onClick={this.toggleModal2}><span className="fa fa-sign-in fa-md"></span> Sign Up</Button>
                    </NavItem>
                </Nav>
            </div>

            </Navbar>
                <Modal isOpen={this.state.isModal1Open} toggle={this.toggleModal1}>
                    <ModalHeader toggle={this.toggleModal1}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>Sign Up</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSignUp}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="role">Role</Label>
                                <Input type="text" id="role" name="role"
                                    innerRef={(input) => this.role = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
            </>
        )
    }
}

export default Login
