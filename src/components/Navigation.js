import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap'
import { NavLink as RouteLink } from 'react-router-dom'


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <Navbar className ="navLinks" expand="md" fixed="top">

            <Container>
            <NavbarBrand href="">Tran Uyen Nhi Nguyen</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/resume">Resume</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink tag={RouteLink} to="/portfolio">Portfolio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouteLink} to="/login">User</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation