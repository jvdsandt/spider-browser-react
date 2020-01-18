import React, {useState} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Topmenu = () => {

    return (
        <Navbar>
            <Navbar.Brand>Spider</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/search" className="nav-link">Search</Link>
                    <Link to="/search" className="nav-link">Git Repositories</Link>
                    <Link to="/search" className="nav-link">Monticello Repositories</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Topmenu;