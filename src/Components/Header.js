import React, { useState } from "react";

import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import { Link } from "wouter";
export const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Link to="/">
				<Navbar.Brand>MOVIE CENTER</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Guardadas</Nav.Link>
					<Nav.Link href="#link">Favoritas</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
